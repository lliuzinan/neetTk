import type { NoteSection } from "@/lib/noteContent";

export const noteExercises: Record<string, NoteSection> = {
  "recombinant-dna-technology": {
    heading: "A selected colony is evidence of a marker, not proof of an insert",
    paragraphs: [
      "In an invented paper model, a plasmid carries an antibiotic-resistance marker outside its cloning site. Two candidate plasmids retain that marker: one has the intended insert and one has closed again without the insert. If either enters a suitable susceptible host and the marker functions, its host can survive the matching selection condition. Survival alone does not distinguish the two plasmids.",
      "The incorrect conclusion is 'every selected colony contains the desired recombinant DNA'. The selection asks whether the relevant marker is functional, while a separate screen must distinguish the insert-bearing construct from the empty vector. This model assumes that the insert does not disrupt the resistance marker; insertional inactivation changes the logic and must be stated explicitly.",
      "Connect this distinction to Cloning Vectors and Insertional Inactivation in NCERT's Biotechnology: Principles and Processes. The broader process guide covers the full production sequence; here the useful output is a narrower evidence statement: what did this selection establish, and what remains untested? This is a conceptual comparison, not a laboratory protocol."
    ],
  },
  "plant-respiration": {
    heading: "Calculate RQ without reversing the gas ratio",
    paragraphs: [
      "An invented dark-chamber record for respiring seeds shows 14 mL of carbon dioxide released and 20 mL of oxygen consumed during the same interval, measured at the same temperature and pressure. RQ is carbon dioxide released divided by oxygen consumed: 14 / 20 = 0.70. Writing 20 / 14 reverses the definition. Comparable gas volumes can be used because they represent the same relative amounts of gas under these conditions.",
      "A value below one is consistent with a substrate such as fat requiring proportionally more oxygen than carbohydrate. It does not identify a particular fatty acid or prove that only one substrate was used. For complete glucose oxidation, the balanced reaction consumes six oxygen molecules and releases six carbon dioxide molecules, giving RQ = 1. During alcoholic fermentation, oxygen uptake is zero, so the same division has no finite value; do not report RQ = 0.",
      "Check the Respiratory Quotient section of NCERT's Respiration in Plants chapter, linked below. Then explain why a photosynthesising leaf is a poor substitute for this dark-chamber example: the measured gas exchange can combine photosynthesis with respiration."
    ],
  },
  "blood-and-circulation": {
    heading: "Follow a red cell through two circuits",
    paragraphs: [
      "Start an imagined red cell in a vein returning from a leg. Trace it through the vena cava, right atrium, tricuspid valve, right ventricle and pulmonary artery to lung capillaries. After gas exchange, continue through a pulmonary vein, left atrium, mitral valve, left ventricle and aorta towards a systemic capillary bed. Passing through the heart twice completes the pulmonary and systemic circuits together.",
      "Now test the claim 'every artery carries oxygenated blood'. The pulmonary artery in that route carries relatively deoxygenated blood, yet it remains an artery because flow is away from the heart. Pulmonary veins return relatively oxygenated blood. Vessel names describe direction, not oxygen content. Valves support one-way flow; they do not add oxygen.",
      "For a separate pump check, an invented heart rate of 72 beats per minute and stroke volume of 65 mL per beat give 4,680 mL per minute, or 4.68 L per minute, for one ventricle. Do not double this merely because the heart has two ventricles: the circuits operate in series. Connect both checks to the Cardiac Output and Double Circulation discussions in NCERT's Body Fluids and Circulation chapter."
    ],
  },
  "excretion-and-kidney-function": {
    heading: "Keep filtration and excretion in different columns",
    paragraphs: [
      "Use a simplified substance account: excreted amount = filtered amount - reabsorbed amount + secreted amount, all measured over the same interval. If 100 arbitrary units enter the filtrate, 98 return to the blood and 3 are added from the blood to the tubule, the final amount in urine is 100 - 98 + 3 = 5 units. These are invented teaching values, not clinical measurements.",
      "The wrong answer 2 ignores secretion. The wrong answer 201 adds all movements without considering direction. Reabsorption moves material from tubular fluid towards blood; secretion moves it into tubular fluid. Neither process means that filtration has happened a second time.",
      "Next consider water regulation: greater ADH action can increase water reabsorption in responsive distal nephron segments, reducing water loss in urine. That is a change in tubular handling, not proof that more blood was filtered. Use the Urine Formation and Regulation of Kidney Function sections in the linked NCERT chapter to label each movement."
    ],
  },
  "human-respiration": {
    heading: "Equal minute ventilation can hide different useful airflow",
    paragraphs: [
      "Compare two invented breathing patterns with an assumed anatomical dead-space volume of 150 mL per breath. Pattern A moves 500 mL twelve times per minute; pattern B moves 250 mL twenty-four times per minute. Both have minute ventilation of 6,000 mL. Under this simplified model, fresh air reaching the gas-exchange region is (tidal volume - dead space) x breathing frequency: A gives 4,200 mL per minute, while B gives 2,400 mL per minute.",
      "The difference comes from filling conducting passages more frequently with the same total inspired volume. Saying 'twice as many breaths means twice the gas exchange' ignores volume per breath and dead space. This is a calculation model, not advice about how someone should breathe.",
      "NCERT's Breathing and Exchange of Gases chapter distinguishes the conducting part from the respiratory part and defines tidal volume and respiratory rate. Return to those definitions before comparing airflow with diffusion: air reaching alveoli and oxygen crossing the respiratory membrane are related but separate events."
    ],
  },
  "photosynthesis-in-higher-plants": {
    heading: "Count carbon atoms before counting glucose",
    paragraphs: [
      "In the Calvin-cycle model, three carbon dioxide molecules enter three turns of carboxylation. Six molecules of three-carbon 3-PGA are formed and then reduced using ATP and NADPH. Of the six resulting triose-phosphate equivalents, five are used to regenerate three five-carbon RuBP molecules; one is the net three-carbon output. The net account uses nine ATP and six NADPH per three carbon dioxide molecules.",
      "The tempting answer 'three carbon dioxide molecules produce one glucose' loses half the carbon atoms. A six-carbon sugar equivalent requires six carbon dioxide molecules and two net three-carbon equivalents; the corresponding cycle account is eighteen ATP and twelve NADPH. Glucose is not the immediate product of a single carboxylation reaction.",
      "Check the Calvin Cycle section of NCERT's Photosynthesis in Higher Plants. On paper, keep regeneration separate from net output. Carbon returned to RuBP remains inside the cycle and cannot simultaneously be counted as exported sugar."
    ],
  },
  "mitosis-and-meiosis": {
    heading: "Track 2n = 6 through replication and reduction",
    paragraphs: [
      "For an invented diploid cell with 2n = 6, begin before S phase with six chromosomes and six DNA molecules. After replication there are still six chromosomes, now consisting of twelve sister chromatids in total. Replication doubles DNA content without doubling the chromosome count while the sisters remain joined.",
      "After meiosis I, each of the two cells has three chromosomes, each still made of two sister chromatids: three chromosomes and six DNA molecules per cell. After meiosis II, each product has three chromosomes and three DNA molecules. Homologue separation causes the reduction at meiosis I; sister separation occurs at meiosis II.",
      "The statement 'DNA replication makes the cell tetraploid' confuses DNA quantity with chromosome sets. These counts refer to the specified stages and completed divisions; during anaphase, separated chromatids are counted as daughter chromosomes. Use NCERT's Cell Cycle and Cell Division chapter to mark the division boundaries on your sketch."
    ],
  },
  "dna-rna-replication-transcription-translation": {
    heading: "Check the template direction before decoding a message",
    paragraphs: [
      "Take this short invented DNA template, written 3-prime to 5-prime: TAC GGA ATT. The complementary RNA written 5-prime to 3-prime is AUG CCU UAA. RNA polymerase reads the template in the opposite direction to the new RNA strand's synthesis. Copying the template letters and merely replacing T with U would give the wrong message.",
      "In this deliberately simplified coding example, AUG specifies the initiating methionine, CCU specifies proline and UAA is a stop signal. The two amino-acid residues form a dipeptide with one peptide bond. A stop codon does not supply a third amino acid. Actual translation initiation also depends on cellular context; an arbitrary AUG in a longer RNA does not by itself establish the reading frame.",
      "Use the Transcription and Genetic Code sections in NCERT's Molecular Basis of Inheritance chapter. First verify strand polarity and complementary bases, then group the RNA into codons. Those are two different checks, and a correct amino-acid table cannot rescue an incorrectly transcribed sequence."
    ],
  },
  "mutation-and-gene-expression": {
    heading: "A changed codon need not change the amino acid",
    paragraphs: [
      "Compare two invented RNA codons in the same reading frame: GAA and GAG. Both specify glutamate in the standard genetic code, so this substitution is synonymous at the amino-acid level. If GAA instead becomes UAA in a coding region, the new codon is a stop signal. The number of altered bases is one in each example, but the coding consequences differ.",
      "The claim 'every substitution changes the protein sequence' is therefore false. Equally, a synonymous change should not be declared harmless in every biological context merely because the encoded amino acid is unchanged. The result established by this exercise is narrower: the codon table predicts the same amino acid.",
      "Contrast both substitutions with an insertion of one base within a coding sequence: downstream triplet grouping changes until the frame is restored or translation stops. Connect the Mutation and Genetic Code discussions in NCERT's inheritance chapters; do not infer an organism's phenotype from the codon alone."
    ],
  },
  "cell-theory-and-cell-organelles": {
    heading: "Trace a secreted protein without sending it through every organelle",
    paragraphs: [
      "Follow an invented secreted protein with an ER-targeting signal. Its polypeptide is made by a ribosome associated with rough ER and enters the ER during synthesis. It then moves through transport vesicles to the Golgi, is processed and sorted, and reaches the plasma membrane in a secretory vesicle. Fusion releases the cargo outside the cell.",
      "A ribosome joins amino acids; the Golgi does not replace the ribosome as the site of polypeptide synthesis. A lysosome is not a compulsory stop for a protein destined for secretion. The route depends on the cargo's destination, so a cytosolic protein should not automatically be assigned the same ER-to-Golgi journey.",
      "Use NCERT's Cell: The Unit of Life sections on the endomembrane system and ribosomes. Cover the organelle names and reconstruct the route using jobs: synthesis, entry, transport, sorting and release. A mitochondrion can supply energy without being a cargo station in that route."
    ],
  },
  "endocrine-system-and-hormones": {
    heading: "Trace the feedback arrow after thyroid hormone rises",
    paragraphs: [
      "Consider a simplified intact hypothalamus-pituitary-thyroid axis. TRH stimulates pituitary TSH release, and TSH stimulates thyroid hormone production. If thyroid hormone rises while the feedback system remains responsive, its inhibitory effect on the hypothalamus and pituitary tends to reduce further stimulation. The prediction is reduced drive, not an ever-increasing release of TSH.",
      "The wrong explanation 'thyroid hormone raises TSH because both belong to the same pathway' confuses a stimulatory forward arrow with an inhibitory return arrow. Write the sign beside each connection before predicting the next change. This is a control-system exercise; it cannot be used to interpret a person's laboratory results or diagnose a condition.",
      "In NCERT's Chemical Coordination and Integration chapter, relate this example to feedback regulation and the pituitary-thyroid relationship. As a separate distinction, explain why ADH release from the posterior pituitary does not mean ADH is synthesised there: the hypothalamic neurons supply it."
    ],
  },
  "immunity-pathogens-vaccines": {
    heading: "Separate an immediate antibody supply from immune memory",
    paragraphs: [
      "Compare two textbook situations: an antigen exposure stimulates the recipient's own immune response, while a transfer of ready-made antibodies supplies antibodies made elsewhere. The first is active immunity; the second is passive immunity. Antibody presence alone cannot tell you which route produced protection.",
      "In a primary active response, activation and expansion of antigen-specific cells take time. A later encounter with the same antigen can produce a faster, stronger secondary response because memory cells were formed. Transferred antibodies can act without that initial production step, but the transfer itself does not generate the recipient's antigen-specific memory cells.",
      "Correct the statement 'anything that supplies antibodies is a vaccine'. Vaccination aims to induce an active response and memory; passive antibody transfer is a different mechanism. Check Active and Passive Immunity and Vaccination and Immunisation in NCERT's Human Health and Disease chapter. This comparison explains categories, not which intervention an individual needs."
    ],
  },
  "neuron-nerve-impulse-synapse": {
    heading: "Locate the step that makes a chemical synapse directional",
    paragraphs: [
      "An impulse reaches an axon terminal and triggers neurotransmitter release from vesicles. The transmitter crosses the cleft and binds to receptors on the postsynaptic membrane. The receiving membrane's response depends on the receptor and channels involved; transmitter binding is not a guarantee that a new action potential will occur.",
      "Now test the claim 'the same electrical impulse simply jumps across the chemical synaptic cleft'. The gap is crossed by a chemical messenger. Electrical activity before and after the cleft belongs to two membranes, with release and receptor binding between them. The usual direction follows the location of presynaptic release machinery and postsynaptic receptors.",
      "NCERT's Neural Control and Coordination distinguishes chemical from electrical synapses. Explain the chemical route first, then state why a direct current path at an electrical synapse is a different mechanism. Do not extend one synapse's description to every neural junction."
    ],
  },
};
