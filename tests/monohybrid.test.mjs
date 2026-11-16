import test from 'node:test';
import assert from 'node:assert/strict';
import {cross,gametes,genotypes,appendCross,crossSummary} from '../lib/monohybrid.ts';
test('all nine parental combinations conserve probability and agree with independent allele-frequency calculation',()=>{
 const frequency={AA:1,Aa:.5,aa:0};
 for(const a of genotypes)for(const b of genotypes){const r=cross(a,b),p=frequency[a],q=frequency[b];assert.deepEqual(r.totals,{AA:p*q,Aa:p*(1-q)+(1-p)*q,aa:(1-p)*(1-q)});assert.equal(Object.values(r.totals).reduce((s,v)=>s+v,0),1);assert.equal(r.dominant+r.recessive,1);assert.deepEqual(r.totals,cross(b,a).totals);}
});
test('segregation, testcross and true breeding examples',()=>{assert.deepEqual(cross('Aa','Aa').totals,{AA:.25,Aa:.5,aa:.25});assert.deepEqual(cross('Aa','aa').totals,{AA:0,Aa:.5,aa:.5});assert.deepEqual(cross('AA','aa').totals,{AA:0,Aa:1,aa:0});assert.equal(gametes('aa').length,1);assert.throws(()=>cross('AB','Aa'));});
test('record export carries model limits; append never replaces notes and refuses overflow',()=>{const s=crossSummary('Aa','Aa');assert.match(s,/Aa 50%/);assert.match(s,/not guaranteed counts/);assert.match(s,/complete dominance/);assert.ok(appendCross('My own reasoning',s).startsWith('My own reasoning\n'));assert.throws(()=>appendCross('x'.repeat(7999),s));});
