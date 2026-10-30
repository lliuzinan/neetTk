import test from 'node:test';
import assert from 'node:assert/strict';
import {emptyBook, emptyRecord, parseRecordBook} from '../lib/explanationRecords.ts';
test('backup round trip preserves multiline Unicode notes across topics',()=>{
 const book={version:1,records:{segregation:{...emptyRecord(),claim:'A → a\nMy explanation'},linkage:{...emptyRecord(),next:'复习 tomorrow'}}};
 assert.deepEqual(parseRecordBook(JSON.stringify(book)),book);
 assert.deepEqual(parseRecordBook(JSON.stringify(emptyBook())),emptyBook());
});
test('invalid imports fail instead of silently discarding existing records',()=>{
 for(const raw of ['{bad','null','{"version":2,"records":{}}','{"version":1,"records":[]}',JSON.stringify({version:1,records:{unknown:emptyRecord()}}),JSON.stringify({version:1,records:{segregation:{claim:'partial'}}}),JSON.stringify({version:1,records:{segregation:{...emptyRecord(),claim:'a'.repeat(8001)}}}),' '.repeat(500001)]) assert.throws(()=>parseRecordBook(raw));
});
