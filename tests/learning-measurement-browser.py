"""Test consent and purposeful tool events without transmitting analytics or ads.
Default: map the production hostname to the local build. --live verifies production.
Google script is stubbed: proves event queue semantics, not Google receipt.
"""
import sys
from urllib.parse import urlsplit
from playwright.sync_api import sync_playwright, expect
LIVE='--live' in sys.argv
ORIGIN='https://medqgo.com'
PATH='/neet-ug/biology/tools/monohybrid-cross'
with sync_playwright() as p:
 b=p.chromium.launch(channel='chrome',headless=True)
 c=b.new_context(viewport={'width':390,'height':900},accept_downloads=True)
 third=[]
 def route(r):
  url=r.request.url
  if urlsplit(url).netloc=='medqgo.com':
   if LIVE:r.continue_()
   else:r.fulfill(response=r.fetch(url=url.replace(ORIGIN,'http://localhost:3126',1)))
  else:
   third.append(url)
   if 'googletagmanager.com/gtag/js' in url:r.fulfill(status=200,content_type='application/javascript',body='/* deliberately stubbed: never send QA traffic */')
   else:r.abort()
 c.route('**/*',route)
 page=c.new_page();response=page.goto(ORIGIN+PATH);assert response.status==200
 expect(page.locator('meta[name=robots]')).to_have_attribute('content','index, follow')
 expect(page.locator('link[rel=canonical]')).to_have_attribute('href',ORIGIN+PATH)
 expect(page.get_by_role('button',name='Reject analytics',exact=True)).to_be_visible()
 page.get_by_role('button',name='Aa × aa',exact=True).click()
 events=lambda:page.evaluate("Array.from(window.dataLayer||[]).map(x=>Array.from(x)).filter(x=>x[0]==='event'&&x[1].startsWith('monohybrid_'))")
 assert events()==[] and not any('googletagmanager' in u for u in third)
 page.get_by_role('button',name='Reject analytics',exact=True).click()
 page.get_by_role('button',name='AA × aa',exact=True).click();assert events()==[]
 page.evaluate("window.dispatchEvent(new Event('medqgo:privacy'))")
 page.get_by_role('button',name='Allow analytics',exact=True).click()
 page.wait_for_function('window.medqgoAnalyticsAllowed===true')
 assert events()==[], 'do not replay pre-consent interactions'
 page.get_by_role('button',name='Aa × Aa',exact=True).click()
 page.locator('table button').nth(1).click()
 page.get_by_role('button',name='Append to my record',exact=True).click()
 with page.expect_download():page.get_by_role('button',name='Download calculation',exact=True).click()
 names=[e[1] for e in events()]
 assert names==['monohybrid_start','monohybrid_result','monohybrid_route','monohybrid_save','monohybrid_download_request'],names
 assert all(e[2]=={} for e in events()), 'no user notes or genotypes'
 # Failures must not report saves.
 page.get_by_role('button',name='Aa × aa',exact=True).click()
 page.evaluate("localStorage.setItem('medqgo-explanation-records-v1','broken')")
 page.get_by_role('button',name='Append to my record',exact=True).click()
 assert [e[1] for e in events()].count('monohybrid_save')==1
 page.evaluate("window.dispatchEvent(new Event('medqgo:privacy'))")
 page.get_by_role('button',name='Reject analytics',exact=True).click()
 before=len(events());page.get_by_role('button',name='Aa × Aa',exact=True).click();assert len(events())==before
 assert page.evaluate("window['ga-disable-G-K750YZ44D1']") is True
 for width in [320,390,768,1440]:
  page.set_viewport_size({'width':width,'height':900});assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
 page.get_by_role('link',name='Open my explanation →',exact=True).click()
 expect(page.locator('#record-topic')).to_have_value('segregation')
 assert len(events())==before
 page.goto(ORIGIN+PATH)
 page.get_by_role('button',name='Aa × aa',exact=True).click();assert events()==[]
 if not LIVE:
  local=b.new_page();local.goto('http://localhost:3126'+PATH)
  local.wait_for_function('window.medqgoAnalyticsAllowed===false')
  assert local.locator('#medqgo-ga').count()==0
  local.close()
 print('PASS: consent/rejection/revocation, no replay, purposeful events, save failure, privacy, canonical, four viewports, record handoff, local exclusion')
 c.close();b.close()
