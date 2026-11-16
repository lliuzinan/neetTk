import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluate, patterns, pedigreeFacts, verdictLabel } from '../lib/pedigree.ts';

test('fictional family keeps dominant contradiction separate from compatible hypotheses', () => {
  assert.equal(pedigreeFacts.length, 3);
  assert.equal(evaluate('autosomal-dominant').verdict, 'contradicted');
  assert.equal(evaluate('autosomal-recessive').verdict, 'compatible');
  assert.equal(evaluate('x-linked-recessive').verdict, 'compatible');
  assert.match(evaluate('autosomal-recessive').next, /does not prove/);
});

test('all public pattern labels and verdict labels are explicit', () => {
  assert.deepEqual(patterns.map(pattern => pattern.short), ['AD', 'AR', 'XLR']);
  assert.equal(verdictLabel('compatible'), 'Compatible with the observations');
  assert.equal(verdictLabel('contradicted'), 'Contradicted by the observations');
  assert.equal(verdictLabel('underdetermined'), 'Underdetermined');
});
