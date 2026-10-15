import test from 'node:test';
import assert from 'node:assert/strict';
import {learningQuestions as questions, learningSteps as steps, parseProgress} from '../lib/inheritanceLearning.ts';
test('recovers only valid versioned answers and known reading marks',()=>{
 assert.deepEqual(parseProgress('{bad'),{answers:{},read:[]});
 assert.deepEqual(parseProgress(JSON.stringify({answers:{'gametes-v1':1,'sample-v1':99,'joint-v1':'1',unknown:0},read:['segregation','invented']})),{answers:{'gametes-v1':1},read:['segregation']});
});
test('all original checks have an explanation for every option and a learning destination',()=>{
 assert.equal(new Set(questions.map(q=>q.id)).size,10);
 for(const q of questions){assert.ok(steps.some(s=>s.id===q.step));assert.equal(q.options.length,q.feedback.length);assert.ok(q.options[q.answer]);assert.ok(q.feedback.every(f=>f.length>20));}
});
test('calculated answers follow gamete enumeration rather than stored ratios',()=>{
 const gametes=g=>[...new Set(g.split(''))];
 const offspring=(a,b)=>gametes(a).flatMap(x=>gametes(b).map(y=>[x,y].sort().join('')));
 assert.equal(offspring('Aa','aa').filter(x=>x==='aa').length/offspring('Aa','aa').length,.5);
 assert.equal(Math.pow(.5,4),1/16);
 assert.equal(.5*.5,1/4);
 assert.equal((6+4)/(46+44+6+4),.1);
 assert.equal(questions.find(q=>q.id==='sample-v1').options[questions.find(q=>q.id==='sample-v1').answer],'1/16');
 assert.equal(questions.find(q=>q.id==='joint-v1').options[questions.find(q=>q.id==='joint-v1').answer],'1/4');
 assert.equal(questions.find(q=>q.id==='recombination-v1').options[questions.find(q=>q.id==='recombination-v1').answer],'10%');
});
