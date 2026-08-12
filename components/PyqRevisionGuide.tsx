type Faq = {
  question: string;
  answer: string;
};

type RevisionGuide = {
  paper: string;
  focus: string[];
  revisionMethod: string;
  ncertReminder: string;
  faqs: Faq[];
};

const guides: Record<number, RevisionGuide> = {
  2025: {
    paper: "Code 45 English paper",
    focus: ["Molecular Basis of Inheritance", "Chemical Coordination and Integration", "Cell: The Unit of Life"],
    revisionMethod: "Use this paper as a final-pattern check. Attempt it in one sitting, then sort every error into an NCERT line, a diagram or a concept-link error before revising.",
    ncertReminder: "Prioritise exact NCERT terminology in molecular biology, hormones, biodiversity and biotechnology. For assertion-style choices, eliminate options that add facts not stated by NCERT.",
    faqs: [
      { question: "Are these NEET 2025 Biology questions from the official paper?", answer: "This page uses the NEET 2025 Code 45 English question paper and the official answer key as source material. OCR output was reviewed before publication." },
      { question: "How should I revise NEET 2025 Biology PYQs?", answer: "Attempt the question first, check the answer, then read the NCERT-aligned explanation and note the exact concept tested." },
    ],
  },
  2024: {
    paper: "Code T1 English paper",
    focus: ["Molecular Basis of Inheritance", "Biotechnology: Principles and Processes", "Human Health and Disease"],
    revisionMethod: "After solving, make a two-column error log: one side for the NCERT fact you missed and one side for why the distractor looked plausible.",
    ncertReminder: "Re-read biotechnology enzymes and vectors, genetic-process vocabulary, immunity terms and disease-causing organisms from NCERT before attempting the set again.",
    faqs: [
      { question: "Are these NEET 2024 Biology answers checked with the official key?", answer: "This page uses the NEET 2024 Code T1 English paper and checks answers against the official final answer key before publication." },
      { question: "What should I revise after NEET 2024 Biology PYQs?", answer: "Review the linked NCERT concepts behind each mistake, especially molecular biology, biotechnology and human health topics, before reattempting the incorrect questions." },
    ],
  },
  2023: {
    paper: "Code F2 English paper",
    focus: ["Cell Cycle and Cell Division", "Cell: The Unit of Life", "Human Health and Disease"],
    revisionMethod: "Work through the set chapter by chapter after a first timed attempt. This makes it easier to see whether an error comes from a definition, sequence, diagram or exception.",
    ncertReminder: "For cell biology, revise organelle functions and division-stage order. For health topics, compare pathogen, symptom, prevention and immune-response wording carefully.",
    faqs: [
      { question: "Are these NEET 2023 Biology answers checked with the official key?", answer: "This page uses the NEET 2023 Code F2 English paper and checks answers against the official final answer key before publication." },
      { question: "How can NEET 2023 Biology PYQs improve revision?", answer: "Use the explanations to connect each wrong answer to an NCERT concept, then reattempt the questions after revising that chapter." },
    ],
  },
  2022: {
    paper: "Code Q6 English paper",
    focus: ["Biotechnology: Principles and Processes", "Molecular Basis of Inheritance", "Principles of Inheritance and Variation"],
    revisionMethod: "Mark every statement-based question during your first attempt. On review, identify the single NCERT word that makes each option true or false.",
    ncertReminder: "Revisit recombinant DNA steps, inheritance ratios and molecular biology processes. Do not replace NCERT wording with coaching shorthand when checking close options.",
    faqs: [
      { question: "Are these NEET 2022 Biology answers based on the official key?", answer: "This page uses the NEET 2022 Code Q6 English question paper as source material and checks answers against the official NTA final answer key." },
      { question: "Why should I solve NEET 2022 Biology PYQs?", answer: "NEET 2022 Biology PYQs help students identify recurring NCERT concepts across genetics, ecology, plant physiology, biotechnology, and human physiology." },
    ],
  },
  2021: {
    paper: "Code M1 English paper",
    focus: ["Molecular Basis of Inheritance", "Biotechnology: Principles and Processes", "Cell Cycle and Cell Division"],
    revisionMethod: "Use this paper to practise retrieving facts without prompts. After checking the key, write one short correction for each error rather than copying the whole explanation.",
    ncertReminder: "Concentrate on transcription and translation, cloning steps and cell-division checkpoints. These topics reward exact sequence and terminology rather than broad familiarity.",
    faqs: [
      { question: "Are these NEET 2021 Biology answers checked with the official key?", answer: "This page uses the NEET 2021 Code M1 Biology question paper and checks answers against the official final answer key before publication." },
      { question: "How should I use NEET 2021 Biology PYQs for revision?", answer: "Solve the question first, check the answer, then connect the explanation to the NCERT concept. Pay special attention to ecology, genetics, human physiology, and biotechnology questions." },
    ],
  },
  2020: {
    paper: "Code E1 English paper",
    focus: ["Biotechnology: Principles and Processes", "Cell Cycle and Cell Division", "Principles of Inheritance and Variation"],
    revisionMethod: "Treat this as a precision drill. Reattempt wrong questions after 48 hours without seeing the answer, then keep only the facts you still miss in your revision list.",
    ncertReminder: "Check biotechnology tools, division phases, inheritance exceptions and human-health facts directly against NCERT. Older papers are especially useful for recurring factual traps.",
    faqs: [
      { question: "Are these NEET 2020 Biology answers checked with the official key?", answer: "This page uses the NEET 2020 Code E1 Biology question paper and checks answers against the official final answer key before publication." },
      { question: "How should I use NEET 2020 Biology PYQs for revision?", answer: "Solve the question first, check the answer, then connect the explanation to the NCERT concept. Pay special attention to ecology, genetics, human physiology, and biotechnology questions." },
    ],
  },
  2019: {
    paper: "Code P1 English paper",
    focus: ["Microbes in Human Welfare", "Cell: The Unit of Life", "Environmental Issues"],
    revisionMethod: "Use this older paper to uncover stable NCERT facts. For every wrong answer, name the chapter and the line or diagram you need to revisit before moving on.",
    ncertReminder: "Revise microbes and their products, cell-structure functions, environmental agreements, reproduction and endocrine terms. These are factual areas where one qualifier changes the answer.",
    faqs: [
      { question: "Are these NEET 2019 Biology answers checked with the official key?", answer: "This page uses the NEET 2019 Code P1 Biology question paper and checks answers against the official final answer key before publication." },
      { question: "How should I use NEET 2019 Biology PYQs for revision?", answer: "Solve the question first, check the answer, then connect the explanation to the NCERT concept. Pay special attention to ecology, genetics, human physiology, and biotechnology questions." },
    ],
  },
};

export function getPyqRevisionFaq(year: number) {
  return guides[year].faqs;
}

export function PyqRevisionGuide({ year }: { year: number }) {
  const guide = guides[year];

  return (
    <>
      <section className="contentBand pyqRevisionGuide">
        <p className="eyebrow">Revision guide</p>
        <h2>How to use NEET {year} Biology PYQs</h2>
        <p>
          This set contains reviewed questions from the {guide.paper}. Use it to test recall, then use the explanations to return to the relevant NCERT concept instead of memorising option letters.
        </p>
        <div className="pyqGuideGrid">
          <div>
            <h3>High-yield chapters in this set</h3>
            <ul className="seoList">{guide.focus.map((topic) => <li key={topic}>{topic}</li>)}</ul>
          </div>
          <div>
            <h3>Best review method</h3>
            <p>{guide.revisionMethod}</p>
          </div>
          <div>
            <h3>NCERT focus</h3>
            <p>{guide.ncertReminder}</p>
          </div>
        </div>
      </section>

      <section className="contentBand faqBlock">
        <p className="eyebrow">Frequently asked questions</p>
        <h2>NEET {year} Biology PYQ FAQs</h2>
        {guide.faqs.map((faq) => (
          <div className="faqItem" key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </section>
    </>
  );
}
