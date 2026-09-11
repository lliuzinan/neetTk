export type TopicSeoContent = {
  focus: string[];
  traps: string[];
};

const defaultContent: TopicSeoContent = {
  focus: [
    "Start from the NCERT definition, then rebuild the relationship or process in your own words.",
    "Keep examples and exceptions beside the main idea so similar concepts do not collapse into one list.",
    "Finish with a short recall check rather than another passive reread.",
  ],
  traps: [
    "A familiar keyword is not enough; check the full relationship before accepting a statement.",
    "Keep NCERT-level facts separate from advanced detail that does not help the stated revision goal.",
  ],
};

const topicContent: Record<string, TopicSeoContent> = {
  "cell-theory-and-cell-organelles": {
    focus: ["Cell theory and the structural difference between prokaryotic and eukaryotic cells.", "How ribosomes, nucleus, mitochondria, endoplasmic reticulum, Golgi apparatus, lysosomes, and chloroplasts contribute different functions.", "A structure-to-function map instead of an isolated list of organelle names."],
    traps: ["Protein synthesis begins at ribosomes; later processing and packaging are different jobs.", "Mitochondria, chloroplasts, and nucleus can all be linked with genetic material in different contexts, so identify the structure being described.", "Do not turn advanced organelle-processing detail into a claimed NCERT fact without checking the source chapter."],
  },
  "dna-rna-replication-transcription-translation": {
    focus: ["The information route from DNA to RNA to protein, with replication kept separate from expression.", "The input, output, location, and main machinery of replication, transcription, and translation.", "How codons, anticodons, and amino acids relate without being the same thing."],
    traps: ["Transcription makes RNA from a DNA template; translation makes a polypeptide from mRNA information.", "A codon is an information unit in mRNA, not an amino acid itself.", "Replication produces DNA from DNA and is not another name for transcription."],
  },
  "mutation-and-gene-expression": {
    focus: ["The difference between changing DNA information and regulating when information is used.", "How substitution, insertion, and deletion can have different consequences.", "The route from DNA change to RNA and protein consequence."],
    traps: ["A mutation is not automatically harmful or automatically visible in phenotype.", "An insertion or deletion can alter later codon grouping; a substitution does not necessarily do so.", "Gene regulation is not the same as a change in DNA sequence."],
  },
  "immunity-pathogens-vaccines": {
    focus: ["The order from physical barriers to innate responses to antigen-specific acquired immunity.", "The difference between antigens, antibodies, B lymphocytes, and T lymphocytes.", "Why active and passive immunity produce different timing and memory patterns."],
    traps: ["Fast does not automatically mean antigen-specific; innate immunity is fast and broadly protective.", "A pathogen, disease symptom, vector, reservoir, and transmission route are different categories.", "Passive immunity provides ready-made antibodies but does not create the same lasting memory as active immunity."],
  },
  "endocrine-system-and-hormones": {
    focus: ["Major endocrine sources, their signals, target tissues, and physiological effects.", "Feedback control and the direction of a regulatory loop.", "The difference between endocrine circulation, receptor response, and duct-based exocrine secretion."],
    traps: ["The posterior pituitary releases ADH and oxytocin; the hypothalamus synthesises them.", "Peptide hormones such as insulin and ADH act through cell-surface receptors, whereas steroid hormones can act through intracellular receptors.", "Growth hormone, thyroxine, and insulin should be separated by the specific effect named in the statement."],
  },
  "neuron-nerve-impulse-synapse": {
    focus: ["The direction of information flow through a neuron, synapse, and reflex arc.", "The sequence from resting state through depolarisation and recovery.", "Why myelin changes conduction speed without being the source of an impulse."],
    traps: ["Dendrites mainly receive signals; axons carry impulses away from the cell body.", "A chemical synapse is a directional signalling junction, not a direct electrical wire.", "A receptor detects a stimulus; an effector produces the response."],
  },
  "human-respiration": {
    focus: ["The sequence from ventilation to alveolar exchange, blood transport, and tissue exchange.", "The partial-pressure gradients that set the direction of oxygen and carbon dioxide diffusion.", "The different major transport forms of oxygen and carbon dioxide in blood."],
    traps: ["Ventilation moves air; gas exchange moves gases across a respiratory membrane.", "At rest, inspiration requires muscle activity while quiet expiration is largely elastic recoil.", "Oxygen is mainly haemoglobin-bound, whereas carbon dioxide is mainly transported as bicarbonate."],
  },
  "excretion-and-kidney-function": {
    focus: ["The nephron flow from glomerular filtration through selective reabsorption, secretion, and urine concentration.", "The direction of movement between blood, filtrate, and the outside of the body.", "How water balance and waste removal overlap without being the same process."],
    traps: ["Filtration is blood to Bowman's capsule; reabsorption returns substances from tubule to blood.", "The urinary bladder stores urine; kidneys form it.", "ADH supports water conservation in the distal nephron and collecting ducts; it does not create the initial filtrate."],
  },
};

export function getTopicSeoContent(slug: string) {
  return topicContent[slug] || defaultContent;
}
