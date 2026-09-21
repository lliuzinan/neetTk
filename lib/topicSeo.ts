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
  "chromosomal-basis-of-inheritance": {
    focus: ["How homologous chromosome behaviour during meiosis explains allele segregation.", "Why independent orientation of chromosome pairs can create new gamete combinations.", "How linkage and crossing over change parental and recombinant combinations."],
    traps: ["Homologous chromosomes separate in meiosis I; sister chromatids separate in meiosis II.", "Crossing over is between non-sister chromatids of homologous chromosomes during prophase I.", "A 50 percent recombination frequency can reflect unlinked genes or genes far apart on the same chromosome; it does not prove linkage."],
  },
  "sexual-reproduction-in-flowering-plants": {
    focus: ["The route from anther and stigma to pollen-tube entry into an ovule.", "The two fertilisation events in an embryo sac and the distinct products they produce.", "Post-fertilisation changes from ovule to seed and ovary to fruit."],
    traps: ["Pollination is pollen transfer; fertilisation occurs later inside the embryo sac.", "One male gamete fuses with the egg to form zygote, while the other joins polar nuclei to begin endosperm formation.", "An ovule develops into a seed; an ovary develops into a fruit."],
  },
  "mendelian-inheritance": {
    focus: ["How paired alleles segregate into gametes before fertilisation.", "The difference between genotype, phenotype, dominant expression, and recessive expression.", "How a Punnett square follows from gametes and produces a probability model."],
    traps: ["A dominant allele is not automatically more common, stronger, or healthier.", "A gamete from Aa carries A or a, not both alleles together.", "A 3:1 phenotype ratio requires the stated complete-dominance and parental-cross conditions."],
  },
  "recombinant-dna-technology": {
    focus: ["The sequence from donor DNA and vector preparation through host introduction and selection.", "The distinct actions of restriction endonuclease, DNA ligase, vector, host, and selectable marker.", "The difference between producing recombinant DNA, cloning it in cells, and recovering a useful product."],
    traps: ["Restriction endonuclease cuts DNA; DNA ligase joins fragments.", "A vector carries the insert; it is not the host cell that receives the construct.", "Transformation, selection, screening, and downstream processing are different workflow stages."],
  },
  "pedigree-analysis-and-inheritance-patterns": {
    focus: ["How a family diagram records relationships, generations and the stated trait.", "How parent-offspring observations can rule simple inheritance models in or out.", "Why X-linked patterns require a chromosome route check rather than a count of affected people."],
    traps: ["A shaded pedigree symbol indicates the stated trait; it does not automatically reveal the genotype.", "One branch of a pedigree is not enough to establish an inheritance model when the rest of the family disagrees.", "A father passes an X chromosome to daughters and a Y chromosome to sons, so direct father-to-son transmission is not an X-linked route."],
  },
  "molecular-tools-and-dna-analysis": {
    focus: ["The different jobs of restriction enzymes, PCR and gel electrophoresis.", "How a PCR cycle amplifies a primer-defined DNA region.", "Why DNA migrates toward a positive electrode and smaller fragments usually travel farther in an agarose gel."],
    traps: ["PCR amplifies a target sequence; it does not separate DNA fragments by size.", "DNA ligase joins fragments, whereas a restriction endonuclease cuts DNA at recognised sequences.", "DNA is negatively charged and migrates toward the positive electrode in a gel."],
  },
  "biotechnology-applications": {
    focus: ["How to separate a biotechnology method from its product or intended application.", "NCERT-linked examples in health-related products, crop traits and gene-based intervention.", "Why biosafety, biopiracy and patents belong beside the application examples."],
    traps: ["A biotechnology application is not the same thing as a laboratory tool such as a vector or restriction enzyme.", "A named crop trait should not be enlarged into a claim of resistance to every pest or environmental condition.", "Gene therapy is a gene-based application category, not another name for routine drug treatment."],
  },
  "human-reproduction": {
    focus: ["The route from gamete formation through fertilisation, cleavage, implantation and placental exchange.", "The difference between a cell event, a developmental stage, a location and an exchange structure.", "A location-first map for separating oviduct, uterus, placenta and umbilical cord."],
    traps: ["A gamete is not a zygote; a zygote forms only after sperm and ovum fuse.", "Fertilisation is normally described in the oviduct, while implantation occurs in the uterine endometrium.", "Placenta and umbilical cord have linked but different roles: exchange surface versus connection."],
  },
  "reproductive-health": {
    focus: ["Reproductive health as education, wellbeing, prevention and access to appropriate healthcare.", "The distinction between an STI, a route of transmission, a prevention measure and a symptom.", "Contraception and assisted reproductive technologies as NCERT-level concepts with defined purposes."],
    traps: ["A study guide can explain a prevention principle but cannot diagnose or recommend care for an individual.", "Awareness, prevention, testing and treatment are different public-health categories.", "Assisted reproductive technologies are not interchangeable terms and are not general lifestyle procedures."],
  },
  "molecular-basis-of-inheritance": {
    focus: ["DNA base pairing, nucleotide structure and the information carried by sequence.", "How DNA packaging into nucleosomes differs from making DNA copies.", "Why replication is semiconservative and how leading and lagging strands arise."],
    traps: ["A gene is a defined DNA segment; a chromosome is a larger organised DNA-protein structure containing many genes.", "Packaging folds existing DNA; replication makes new complementary DNA strands.", "Each replicated DNA double helix has one parental and one newly synthesised strand, not two entirely new strands."],
  },
  "evolution-and-natural-selection": {
    focus: ["Evolution as a population-level change in allele frequency across generations.", "The linked conditions of variation, heritability, selection pressure and unequal reproductive success.", "How selection, drift, gene flow and mutation provide different explanations for change."],
    traps: ["Natural selection acts through individuals but evolutionary change is measured in populations over generations.", "A trait must be heritable and linked with differential reproduction to change in frequency by natural selection.", "Evolution is not a statement that every change is progress, purpose or increased complexity."],
  },
  "organisms-and-populations": {
    focus: ["How abiotic and biotic factors connect an organism to its habitat and niche.", "Population attributes and the four processes that add or remove individuals.", "Why exponential and logistic models make different resource assumptions."],
    traps: ["Habitat is the place an organism lives; niche is its functional role and resource relationship.", "Density is a population property, not a characteristic of one organism.", "Carrying capacity belongs to an environment and can change; it is not a permanent universal number for a species."],
  },
  "ecosystem-energy-flow-and-ecological-pyramids": {
    focus: ["Energy enters most ecosystems through producer photosynthesis, then passes through trophic levels with loss at each transfer.", "GPP, producer respiration and NPP as a sequence; NPP is the fraction available to heterotrophs.", "Food chains, food webs and ecological pyramids separated by the quantity each one describes."],
    traps: ["Energy flows one way and needs continuing input; nutrients can return to producers through environmental cycles.", "An energy pyramid is always upright, while biomass can be inverted in an aquatic ecosystem.", "Standing biomass describes an amount at a time; productivity includes an area-and-time rate."],
  },
  "mitosis-and-meiosis": {
    focus: ["The G1, S, G2 and M phases, with DNA content kept separate from chromosome number.", "Mitosis as equational division and the sequence from prophase through cytokinesis.", "Meiosis I versus meiosis II, including homologous pairing, crossing over and the reduction of chromosome number."],
    traps: ["DNA replication during S phase doubles DNA content but does not double chromosome number.", "Homologous chromosomes separate in anaphase I; sister chromatids separate in anaphase II and mitosis.", "Crossing over occurs between non-sister chromatids of homologous chromosomes during pachytene of prophase I."],
  },
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
  "morphology-of-flowering-plants": {
    focus: ["External landmarks that distinguish roots, stems, leaves and flowers.", "How modified organs retain evidence of their developmental origin while taking on storage, support, defence or climbing roles.", "The sequence from inflorescence and floral whorls to fruit and seed development."],
    traps: ["An underground storage structure is not automatically a root; nodes and buds identify potato as a stem tuber.", "Phyllotaxy describes leaf arrangement on a stem, while venation describes veins within a leaf blade.", "After fertilisation, ovules develop into seeds and the ovary generally develops into a fruit."],
  },
  "anatomy-of-flowering-plants": {
    focus: ["Meristematic versus permanent tissues and the roles of parenchyma, collenchyma and sclerenchyma.", "The cellular components and living-state distinctions within xylem and phloem.", "How vascular arrangement, cambium and pith identify dicot and monocot roots, stems and leaves."],
    traps: ["Xylem parenchyma is living even though the main xylem conducting elements are dead at maturity.", "Roots have radial xylem and phloem, whereas typical stem bundles are conjoint and collateral.", "Dicot stem bundles are commonly arranged in a ring and open; monocot stem bundles are scattered and closed."],
  },
};

export function getTopicSeoContent(slug: string) {
  return topicContent[slug] || defaultContent;
}
