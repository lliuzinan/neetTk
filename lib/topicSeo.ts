export type TopicSeoContent = {
  focus: string[];
  traps: string[];
  practicePlan: string;
  faqs: Array<{ question: string; answer: string }>;
};

const defaultContent: TopicSeoContent = {
  focus: [
    "Revise the NCERT definitions first, then solve short concept-check MCQs.",
    "Mark examples and exceptions because NEET Biology questions often test exact wording.",
    "Review every wrong option after practice so close distractors become easier to eliminate.",
  ],
  traps: [
    "Do not rely on memorized keywords without checking the full statement.",
    "Separate NCERT-level facts from advanced details that are not needed for NEET-UG.",
  ],
  practicePlan:
    "Start with 10 questions from this topic, review the explanation for every wrong answer, then repeat the same topic after revising the NCERT paragraph.",
  faqs: [
    {
      question: "Are these questions useful for NEET-UG Biology revision?",
      answer:
        "Yes. The published MCQs are mapped to NEET-UG Biology topics and include visible answers with concise explanations for revision.",
    },
    {
      question: "Should I read NCERT before solving these MCQs?",
      answer:
        "Yes. Read the NCERT section first, then use the MCQs to test recall, process order, examples, and common distractors.",
    },
  ],
};

const topicContent: Record<string, TopicSeoContent> = {
  "cell-theory-and-cell-organelles": {
    focus: [
      "Cell theory, cell structure, and differences between prokaryotic and eukaryotic cells.",
      "Ribosomes, nucleus, mitochondria, endoplasmic reticulum, Golgi apparatus, lysosomes, and other organelles.",
      "Organelle functions such as protein synthesis, packaging, respiration, storage, and genetic control.",
    ],
    traps: [
      "Confusing ribosomes with the nucleus for protein synthesis.",
      "Mixing up mitochondria, chloroplasts, and nucleus when questions ask where DNA is present.",
      "Treating advanced organelle-processing details as NEET-UG facts unless they are directly NCERT aligned.",
    ],
    practicePlan:
      "Revise NCERT cell structure tables first, then solve organelle-function MCQs in short sets of 10. Revisit every wrong option and attach it to the correct organelle.",
    faqs: [
      {
        question: "Which cell organelles are most important for NEET Biology?",
        answer:
          "Ribosomes, nucleus, mitochondria, endoplasmic reticulum, Golgi apparatus, lysosomes, chloroplasts, and cell membrane are high-yield for NEET-UG Biology.",
      },
      {
        question: "How should I practice cell organelle MCQs?",
        answer:
          "Make a one-line function map for each organelle, then solve MCQs that test location, structure, and function differences.",
      },
    ],
  },
  "dna-rna-replication-transcription-translation": {
    focus: [
      "DNA replication, transcription, translation, genetic code, codons, and anticodons.",
      "Central dogma flow from DNA to RNA to protein.",
      "Basic gene expression regulation at NCERT level.",
    ],
    traps: [
      "Confusing transcription with translation.",
      "Forgetting that eukaryotic transcription mainly occurs in the nucleus.",
      "Mixing codon, anticodon, and amino acid relationships.",
    ],
    practicePlan:
      "Draw the central dogma flow once, revise codon and anticodon terms, then solve MCQs that ask process location, sequence, and molecular role.",
    faqs: [
      {
        question: "Is molecular basis of inheritance important for NEET?",
        answer:
          "Yes. DNA, RNA, replication, transcription, translation, and genetic code are recurring NEET Biology areas from NCERT Class 12.",
      },
      {
        question: "What is the best way to revise transcription and translation?",
        answer:
          "Revise the sequence, location, template, product, and enzyme or machinery involved in each process, then practice statement-based MCQs.",
      },
    ],
  },
  "endocrine-system-and-hormones": {
    focus: [
      "Major endocrine glands and the hormones they secrete.",
      "Hormone functions, feedback control, and target organs.",
      "Common NCERT examples such as thyroid, pituitary, adrenal, pancreatic, and gonadal hormones.",
    ],
    traps: [
      "Confusing anterior pituitary regulation with hormones from other endocrine glands.",
      "Mixing steroid, peptide, and amine hormone examples.",
      "Forgetting target-organ effects when the question asks for function rather than source.",
    ],
    practicePlan:
      "Make a gland-hormone-function table, revise it twice, then solve MCQs by identifying whether the question asks source, function, or regulation.",
    faqs: [
      {
        question: "Which endocrine topics are high-yield for NEET Biology?",
        answer:
          "Pituitary, thyroid, adrenal, pancreas, reproductive hormones, feedback control, and hormone functions are high-yield NEET Biology areas.",
      },
      {
        question: "How can I avoid mistakes in hormone questions?",
        answer:
          "Always identify three things: the gland, the hormone, and the target effect. Most wrong options swap one of these.",
      },
    ],
  },
  "plant-respiration": {
    focus: [
      "Glycolysis, Krebs cycle, electron transport chain, and ATP formation.",
      "Aerobic and anaerobic respiration differences.",
      "Respiratory quotient and basic NCERT pathway sequence.",
    ],
    traps: [
      "Mixing the site of glycolysis with mitochondrial reactions.",
      "Confusing respiration with photosynthesis terminology.",
      "Memorizing ATP numbers without understanding the process order.",
    ],
    practicePlan:
      "Revise the pathway sequence and reaction sites, then solve MCQs that ask where each step occurs and what product is formed.",
    faqs: [
      {
        question: "Is respiration in plants important for NEET?",
        answer:
          "Yes. NEET often tests pathway order, reaction site, ATP production, and differences between aerobic and anaerobic respiration.",
      },
      {
        question: "What should I memorize in plant respiration?",
        answer:
          "Memorize the major pathway sequence, cellular location of each step, key products, and NCERT-level definitions.",
      },
    ],
  },
  "pedigree-analysis-and-inheritance-patterns": {
    focus: [
      "Mendelian inheritance, autosomal and sex-linked patterns, and pedigree symbols.",
      "Dominant and recessive trait identification across generations.",
      "Basic genetic disease examples used to understand inheritance patterns.",
    ],
    traps: [
      "Assuming a trait is dominant just because it appears often.",
      "Missing carrier logic in recessive inheritance.",
      "Confusing autosomal inheritance with sex-linked inheritance.",
    ],
    practicePlan:
      "Start by identifying affected and unaffected individuals, then check whether the trait skips generations and whether males or females are affected differently.",
    faqs: [
      {
        question: "How do I solve pedigree questions for NEET?",
        answer:
          "First decide whether the trait is dominant or recessive, then check if the pattern is autosomal or sex-linked using generation and gender clues.",
      },
      {
        question: "Are pedigree questions common in NEET Biology?",
        answer:
          "Pedigree analysis is a useful practice area because it tests inheritance logic, not just memorization.",
      },
    ],
  },
};

export function getTopicSeoContent(slug: string) {
  return topicContent[slug] || defaultContent;
}
