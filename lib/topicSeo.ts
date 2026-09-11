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
  "photosynthesis-in-higher-plants": {
    focus: ["Chloroplast compartments and the linked roles of light reactions and carbon fixation.", "Pigments, photosystems, ATP and NADPH as a connected energy-transfer route.", "C3 and C4 pathways, photorespiration, and factors that affect the rate of photosynthesis."],
    traps: ["PSII is named before PSI in the non-cyclic pathway even though its number is higher.", "The Calvin cycle does not require darkness; it uses ATP and NADPH made by light reactions.", "C4 plants initially fix carbon dioxide in mesophyll cells before the Calvin cycle operates in bundle-sheath cells."],
  },
  "plant-respiration": {
    focus: ["The path from glucose through glycolysis to pyruvate, followed by aerobic or anaerobic routes.", "Where each main stage occurs and why plants exchange gases without specialised respiratory organs.", "Respiratory quotient and the difference between energy release, gas exchange, and photosynthesis."],
    traps: ["Glycolysis occurs in the cytoplasm, while later aerobic stages are associated with mitochondria.", "Fermentation is not the same as complete aerobic oxidation of glucose.", "Respiration continues in plant cells in light and dark; it is not the reverse name for photosynthesis."],
  },
  "digestion-and-absorption": {
    focus: ["The food route, accessory glands, and the distinct jobs of mechanical and chemical digestion.", "How carbohydrates, proteins, and lipids reach absorbable products.", "Small-intestinal adaptations and the separate routes taken by many nutrients and lipid products."],
    traps: ["Digestion breaks complex food into absorbable units; absorption moves those units across the intestinal lining.", "Bile aids fat emulsification but is not itself a digestive enzyme.", "Most absorption occurs in the small intestine, not the stomach or large intestine."],
  },
  "blood-and-circulation": {
    focus: ["Blood components, double circulation, and the path through the heart, lungs, and body tissues.", "The functional difference between arteries, veins, capillaries, and the cardiac chambers.", "How clotting, blood groups, and cardiac rhythm fit into the chapter without becoming one list."],
    traps: ["Arteries carry blood away from the heart and veins carry it toward the heart; oxygen content is not the defining rule.", "Pulmonary circulation is heart to lungs to heart, while systemic circulation is heart to body to heart.", "Platelets support clotting; they are not a type of white blood cell."],
  },
};

export function getTopicSeoContent(slug: string) {
  return topicContent[slug] || defaultContent;
}
