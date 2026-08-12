"use client";

import { useEffect, useMemo, useState } from "react";
import { trackEvent } from "@/components/AnalyticsBeacon";
import type { OptionKey } from "@/lib/content";

type PracticeQuestion = {
  id: string;
  stem: string;
  options: Record<OptionKey, string>;
  correctOption: OptionKey;
  explanation: string;
  ncertRef: string;
};

type StoredProgress = {
  index: number;
  score: number;
  incorrectIds: string[];
};

type Props = {
  topicName: string;
  topicSlug: string;
  questions: PracticeQuestion[];
};

const optionKeys: OptionKey[] = ["A", "B", "C", "D"];

export function PracticePlayer({ topicName, topicSlug, questions }: Props) {
  const storageKey = `medqgo-practice-${topicSlug}`;
  const [progress, setProgress] = useState<StoredProgress>({ index: 0, score: 0, incorrectIds: [] });
  const [selected, setSelected] = useState<OptionKey | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) {
        const saved = JSON.parse(stored) as StoredProgress;
        if (Number.isInteger(saved.index) && saved.index >= 0 && saved.index < questions.length) {
          setProgress({ index: saved.index, score: Math.max(0, saved.score || 0), incorrectIds: saved.incorrectIds || [] });
        }
      }
    } catch {
      // Practice remains usable when browser storage is unavailable.
    }
    setLoaded(true);
    trackEvent("practice_start", { topic_slug: topicSlug, question_count: questions.length });
  }, [questions.length, storageKey, topicSlug]);

  useEffect(() => {
    if (!loaded) return;
    try {
      if (progress.index >= questions.length) {
        window.localStorage.removeItem(storageKey);
        return;
      }
      window.localStorage.setItem(storageKey, JSON.stringify(progress));
    } catch {
      // Practice remains usable when browser storage is unavailable.
    }
  }, [loaded, progress, questions.length, storageKey]);

  const question = questions[progress.index];
  const isLastQuestion = progress.index === questions.length - 1;
  const isCorrect = submitted && selected === question.correctOption;
  const answeredCount = progress.index + (submitted ? 1 : 0);
  const accuracy = answeredCount ? Math.round((progress.score / answeredCount) * 100) : 0;
  const summary = useMemo(() => ({ answeredCount, accuracy }), [accuracy, answeredCount]);

  function submitAnswer() {
    if (!selected || submitted) return;
    const correct = selected === question.correctOption;
    setSubmitted(true);
    setProgress((current) => ({
      ...current,
      score: current.score + (correct ? 1 : 0),
      incorrectIds: correct ? current.incorrectIds : [...new Set([...current.incorrectIds, question.id])],
    }));
    trackEvent("answer_submit", { topic_slug: topicSlug, question_id: question.id, correct });
  }

  function nextQuestion() {
    if (!submitted) return;
    if (isLastQuestion) {
      trackEvent("practice_complete", {
        topic_slug: topicSlug,
        questions_answered: questions.length,
        score: progress.score,
      });
      setProgress((current) => ({ ...current, index: questions.length }));
      try {
        window.localStorage.removeItem(storageKey);
      } catch {
        // Progress will simply not persist in this browser.
      }
      return;
    }
    setProgress((current) => ({ ...current, index: current.index + 1 }));
    setSelected(null);
    setSubmitted(false);
  }

  function restart() {
    try {
      window.localStorage.removeItem(storageKey);
    } catch {
      // Progress will simply not persist in this browser.
    }
    setProgress({ index: 0, score: 0, incorrectIds: [] });
    setSelected(null);
    setSubmitted(false);
    trackEvent("practice_restart", { topic_slug: topicSlug });
  }

  if (progress.index >= questions.length) {
    return (
      <section className="practiceComplete" aria-live="polite">
        <p className="eyebrow">Practice complete</p>
        <h2>{topicName} session finished</h2>
        <p>You scored {progress.score} out of {questions.length}. Review the NCERT concept behind each mistake, then take the set again for retention.</p>
        <div className="practiceSummary">
          <span><strong>{progress.score}/{questions.length}</strong> correct</span>
          <span><strong>{progress.incorrectIds.length}</strong> concepts to revisit</span>
        </div>
        <button type="button" className="practicePrimary" onClick={restart}>Practice again</button>
      </section>
    );
  }

  return (
    <section className="practiceShell" aria-label={`${topicName} practice session`}>
      <div className="practiceStats" aria-live="polite">
        <span>Question {progress.index + 1} of {questions.length}</span>
        <span>Score {progress.score}</span>
        <span>Accuracy {summary.accuracy}%</span>
      </div>
      <div className="practiceProgress" aria-hidden="true"><span style={{ width: `${((progress.index + 1) / questions.length) * 100}%` }} /></div>
      <article className="practiceQuestion">
        <p className="eyebrow">{question.ncertRef}</p>
        <h2>{question.stem}</h2>
        <div className="practiceOptions">
          {optionKeys.map((key) => {
            const answerState = submitted
              ? key === question.correctOption ? " correct" : key === selected ? " incorrect" : ""
              : key === selected ? " selected" : "";
            return (
              <button
                type="button"
                className={`practiceOption${answerState}`}
                disabled={submitted}
                key={key}
                onClick={() => setSelected(key)}
              >
                <strong>{key}</strong><span>{question.options[key]}</span>
              </button>
            );
          })}
        </div>
        {!submitted ? (
          <button type="button" className="practicePrimary" disabled={!selected} onClick={submitAnswer}>Check answer</button>
        ) : (
          <div className={isCorrect ? "practiceFeedback correct" : "practiceFeedback incorrect"}>
            <h3>{isCorrect ? "Correct" : `Correct answer: ${question.correctOption}`}</h3>
            <p>{question.explanation}</p>
            <button type="button" className="practicePrimary" onClick={nextQuestion}>{isLastQuestion ? "Finish session" : "Next question"}</button>
          </div>
        )}
      </article>
    </section>
  );
}
