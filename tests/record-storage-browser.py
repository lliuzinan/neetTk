"""Storage-failure regression. Requires Python Playwright and installed Google Chrome.
Run against a local production build: python3 tests/record-storage-browser.py
External requests, including advertising and analytics, are blocked.
"""
import json
from urllib.parse import urlsplit
from playwright.sync_api import sync_playwright

BASE = 'http://localhost:3126'
KEY = 'medqgo-explanation-records-v1'
EMPTY = dict.fromkeys(['claim', 'evidence', 'assumptions', 'working', 'limits', 'revision', 'next'], '')
ORIGINAL = {'version': 1, 'records': {'segregation': {**EMPTY, 'claim': 'Original persisted note'}}}
IMPORTED = {'version': 1, 'records': {'segregation': {**EMPTY, 'claim': 'Imported claim', 'evidence': 'Imported evidence'}}}

with sync_playwright() as p:
    browser = p.chromium.launch(channel='chrome', headless=True)
    for failure in [None, 'QuotaExceededError', 'SecurityError']:
        for action in ['Merge missing fields', 'Replace all records', 'Mark reviewed today']:
            context = browser.new_context(viewport={'width': 390, 'height': 844})
            context.route('**/*', lambda route: route.continue_() if urlsplit(route.request.url).netloc == urlsplit(BASE).netloc else route.abort())
            context.add_init_script('''const key = %s;
const original = Storage.prototype.setItem;
if (localStorage.getItem(key) === null) original.call(localStorage, key, %s);
const failure = %s;
if (failure) Storage.prototype.setItem = function(k,v) {
    if (k === key) throw new DOMException('Simulated write failure', failure);
    return original.call(this,k,v);
};''' % (json.dumps(KEY), json.dumps(json.dumps(ORIGINAL)), json.dumps(failure)))
            page = context.new_page()
            page.goto(BASE + '/neet-ug/biology/learn/inheritance#explanation-record')
            page.get_by_role('button', name='Restore backup', exact=True).click() if action != 'Mark reviewed today' else None
            if action != 'Mark reviewed today':
                page.locator('input[type=file]').set_input_files({'name': 'synthetic.json', 'mimeType': 'application/json', 'buffer': json.dumps(IMPORTED).encode()})
            page.get_by_role('button', name=action, exact=True).click()
            status = page.locator('#explanation-record [role=status]').inner_text()
            stored = json.loads(page.evaluate('(key) => localStorage.getItem(key)', KEY))
            if failure:
                assert status == 'Not saved to this browser.', (failure, action, status)
                assert 'only in this tab' in page.locator('#explanation-record [role=alert]').inner_text()
                assert stored == ORIGINAL, (failure, action, stored)
            else:
                assert 'saved in this browser' in status or 'Review marked for today' in status, status
                assert page.locator('#explanation-record [role=alert]').count() == 0
            # Export must still recover the in-memory work even when persistence fails.
            with page.expect_download() as event:
                page.get_by_role('button', name='Download backup', exact=True).click()
            with open(event.value.path()) as f:
                exported = json.load(f)
            record = exported['records']['segregation']
            if action == 'Merge missing fields':
                assert record['claim'] == 'Original persisted note' and record['evidence'] == 'Imported evidence'
            elif action == 'Replace all records':
                assert exported == IMPORTED
            else:
                assert record['claim'] == 'Original persisted note' and record['lastReviewed']
            if not failure:
                assert stored == exported
            assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
            print(f'{failure or "normal"}: {action}: passed; backup recoverable; no mobile overflow')
            context.close()
    browser.close()
