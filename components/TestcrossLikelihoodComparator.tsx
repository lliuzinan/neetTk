"use client";

import { useMemo, useState } from "react";

function binomialCountProbability(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  // log(C(n,k)) avoids overflowing intermediate factorials.
  const r = Math.min(k, n - k);
  let logCombination = 0;
  for (let i = 1; i <= r; i += 1) {
    logCombination += Math.log(n - r + i) - Math.log(i);
  }
  return Math.exp(logCombination - n * Math.log(2));
}

function formatProbability(value: number): string {
  if (value === 0) return "0";
  if (value < 0.0001) return value.toExponential(3);
  return `${(value * 100).toLocaleString(undefined, { maximumFractionDigits: 4 })}%`;
}

export function TestcrossLikelihoodComparator() {
  const [sampleSize, setSampleSize] = useState(4);
  const [recessiveCount, setRecessiveCount] = useState(0);
  const comparison = useMemo(() => {
    const aaLikelihood = recessiveCount === 0 ? 1 : 0;
    const AaLikelihood = binomialCountProbability(sampleSize, recessiveCount);
    return { aaLikelihood, AaLikelihood };
  }, [sampleSize, recessiveCount]);

  return (
    <section className="testcrossComparator" aria-labelledby="testcross-comparator-title">
      <p className="eyebrow">MODEL COMPARISON / FIXED SAMPLE</p>
      <h2 id="testcross-comparator-title">Compare the same test-cross record under AA and Aa</h2>
      <p>
        Plant U shows the dominant phenotype and is crossed with a verified <i>aa</i> tester. Enter the
        number scored and the number with the recessive phenotype. The calculator compares the probability
        of that <em>count</em> under each candidate, assuming one autosomal locus, complete dominance,
        independent offspring outcomes and equal survival and scoring.
      </p>

      <div className="testcrossInputs">
        <label>
          Offspring scored (n)
          <input type="number" min="1" max="1000" value={sampleSize}
            onChange={(event) => {
              const next = Number(event.target.value);
              if (Number.isInteger(next) && next >= 1 && next <= 1000) {
                setSampleSize(next);
                setRecessiveCount((count) => Math.min(count, next));
              }
            }} />
        </label>
        <label>
          Recessive phenotype (k)
          <input type="number" min="0" max={sampleSize} value={recessiveCount}
            onChange={(event) => {
              const next = Number(event.target.value);
              if (Number.isInteger(next) && next >= 0 && next <= sampleSize) setRecessiveCount(next);
            }} />
        </label>
      </div>

      <div className="testcrossResults" aria-live="polite">
        <article>
          <h3>Candidate: AA</h3>
          <p>Every offspring receives A from Plant U; with an aa tester, all are expected to show the dominant phenotype.</p>
          <strong>{formatProbability(comparison.aaLikelihood)}</strong>
          <span>Probability of observing exactly {recessiveCount} recessive among {sampleSize}</span>
        </article>
        <article>
          <h3>Candidate: Aa</h3>
          <p>Each offspring has probability 1/2 of receiving a from Plant U and showing the recessive phenotype.</p>
          <strong>{formatProbability(comparison.AaLikelihood)}</strong>
          <span>Probability of observing exactly {recessiveCount} recessive among {sampleSize}</span>
        </article>
      </div>

      <div className="testcrossInterpretation">
        {recessiveCount > 0 ? (
          <p><strong>Within this model, the observed recessive offspring rules out AA.</strong> It must receive an a allele from both parents. This is a likelihood comparison under stated assumptions, not a posterior probability for either genotype.</p>
        ) : (
          <p><strong>No recessive offspring does not rule out Aa.</strong> Under Aa, the probability of this all-dominant count is (1/2)<sup>n</sup>. A less likely observation can still occur; the result alone does not give the probability that Plant U is AA or Aa.</p>
        )}
      </div>

      <details>
        <summary>How is the comparison calculated?</summary>
        <p>For AA, the recessive probability is 0, so the count has probability 1 when k = 0 and 0 when k &gt; 0. For Aa, the count probability is C(n, k) × (1/2)<sup>n</sup>. The binomial coefficient counts the possible positions of the k recessive offspring.</p>
        <p>These are probabilities of the observed count conditional on each candidate genotype. They are not posterior probabilities. A posterior comparison would also require prior probabilities and a fuller model of how the candidates were selected.</p>
      </details>
      <p className="testcrossBoundary"><strong>Interpret cautiously:</strong> the comparison fails if parentage, phenotype scoring, independence or equal survival assumptions are not credible. It is a teaching model, not a real breeding or diagnosis tool.</p>
    </section>
  );
}
