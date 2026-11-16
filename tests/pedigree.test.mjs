import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluate, getRecessiveCross, patterns, pedigreeFacts, verdictLabel } from '../lib/pedigree.ts';
import { cross } from '../lib/monohybrid.ts';

test('fictional family keeps dominant contradiction separate from compatible hypotheses', () => {
  assert.equal(pedigreeFacts.length, 3);
  assert.equal(evaluate('autosomal-dominant').verdict, 'contradicted');
  assert.equal(evaluate('autosomal-recessive').verdict, 'compatible');
  assert.equal(evaluate('x-linked-recessive').verdict, 'compatible');
  assert.match(evaluate('autosomal-recessive').next, /only under/);
});

test('only known fictional case IDs initialize an autosomal cross', () => {
  const first = getRecessiveCross('generation-one');
  const second = getRecessiveCross('generation-two');
  assert.notEqual(first.child, second.child);
  for (const example of [first, second]) assert.equal(cross(...example.parents).totals.aa, .25);
  for (const input of [undefined, 'x-linked-recessive', ['generation-one'], '__proto__']) {
    assert.equal(getRecessiveCross(input), undefined);
  }
});

test('all public pattern labels and verdict labels are explicit', () => {
  assert.deepEqual(patterns.map(pattern => pattern.short), ['AD', 'AR', 'XLR']);
  assert.equal(verdictLabel('compatible'), 'Compatible with the observations');
  assert.equal(verdictLabel('contradicted'), 'Contradicted by the observations');
  assert.equal(verdictLabel('underdetermined'), 'Underdetermined');
});
