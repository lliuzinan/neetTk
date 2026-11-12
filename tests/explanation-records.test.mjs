import test from 'node:test';
import assert from 'node:assert/strict';
import {emptyBook, emptyRecord, parseRecordBook, recordBackupMaxBytes, recordTopics, recordFields} from '../lib/explanationRecords.ts';
test('backup round trip preserves multiline Unicode notes across topics',()=>{
 const book={version:1,records:{segregation:{...emptyRecord(),claim:'A → a\nMy explanation'},linkage:{...emptyRecord(),next:'复习 tomorrow'}}};
 assert.deepEqual(parseRecordBook(JSON.stringify(book)),book);
 assert.deepEqual(parseRecordBook(JSON.stringify(emptyBook())),emptyBook());
});
test('invalid imports fail instead of silently discarding existing records',()=>{
 for(const raw of ['{bad','null','{"version":2,"records":{}}','{"version":1,"records":[]}',JSON.stringify({version:1,records:{unknown:emptyRecord()}}),JSON.stringify({version:1,records:{segregation:{claim:'partial'}}}),JSON.stringify({version:1,records:{segregation:{...emptyRecord(),claim:'a'.repeat(8001)}}}),' '.repeat(recordBackupMaxBytes+1)]) assert.throws(()=>parseRecordBook(raw));
});

test('optional review dates survive backups while legacy records remain valid',()=>{
 const book={version:1,records:{testcross:{...emptyRecord(),reviewDate:'2026-11-04',lastReviewed:'2026-11-01'}}};
 assert.deepEqual(parseRecordBook(JSON.stringify(book)),book);
 assert.deepEqual(parseRecordBook(JSON.stringify({version:1,records:{testcross:emptyRecord()}})).records.testcross,emptyRecord());
 for(const reviewDate of ['2026-02-30','2026-13-01','tomorrow',42,'']) assert.throws(()=>parseRecordBook(JSON.stringify({version:1,records:{testcross:{...emptyRecord(),reviewDate}}})));
});


test('every allowed field can round-trip in UTF-8 or escaped JSON at full capacity',()=>{
 for(const text of ['汉'.repeat(8000), '\u0001'.repeat(8000)]) {
  const record=Object.fromEntries(recordFields.map(f=>[f.id,text]));
  const book={version:1,records:Object.fromEntries(recordTopics.map(t=>[t,{...record}]))};
  const backup=JSON.stringify(book,null,2);
  assert.ok(Buffer.byteLength(backup)>500000);
  assert.ok(Buffer.byteLength(backup)<=recordBackupMaxBytes);
  assert.deepEqual(parseRecordBook(backup),book);
 }
});
test('byte limit also rejects oversized multibyte input before parsing',()=>{
 const raw='汉'.repeat(700000);
 assert.ok(raw.length<recordBackupMaxBytes);
 assert.throws(()=>parseRecordBook(raw),/too large/);
});
