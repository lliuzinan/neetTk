export type NoteSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type NoteReference = {
  label: string;
  href: string;
};

export type NoteComparisonTable = {
  heading: string;
  intro: string;
  columns: string[];
  rows: string[][];
};

export type NoteEditorialBlock = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export const AUTHORED_NOTE_SLUGS = [
  "human-respiration",
  "excretion-and-kidney-function",
  "immunity-pathogens-vaccines",
  "endocrine-system-and-hormones",
  "neuron-nerve-impulse-synapse",
  "dna-rna-replication-transcription-translation",
  "cell-theory-and-cell-organelles",
  "mutation-and-gene-expression",
  "mitosis-and-meiosis",
  "photosynthesis-in-higher-plants",
  "plant-respiration",
  "digestion-and-absorption",
  "blood-and-circulation",
  "mendelian-inheritance",
  "recombinant-dna-technology",
  "sexual-reproduction-in-flowering-plants",
  "chromosomal-basis-of-inheritance",
  "pedigree-analysis-and-inheritance-patterns",
  "molecular-tools-and-dna-analysis",
  "biotechnology-applications",
  "human-reproduction",
  "reproductive-health",
  "molecular-basis-of-inheritance",
  "evolution-and-natural-selection",
  "organisms-and-populations",
  "ecosystem-energy-flow-and-ecological-pyramids",
] as const;

const noteContent: Record<string, NoteSection[]> = {
  "human-respiration": [
    {
      heading: "Human respiration: the high-yield sequence",
      paragraphs: [
        "For NEET revision, treat respiration as one connected sequence: ventilation moves air, diffusion exchanges gases, blood transports them, and tissues use oxygen for cellular respiration. A question may test one step, but the options often borrow terms from another step.",
        "Keep the direction of movement clear. During normal inspiration, thoracic volume increases and intrapulmonary pressure falls slightly below atmospheric pressure, allowing air to enter. Expiration at rest is mainly passive because elastic recoil reduces thoracic volume.",
      ],
    },
    {
      heading: "Gas exchange at the respiratory surface",
      paragraphs: [
        "Alveoli provide a large, moist and thin exchange surface. Oxygen diffuses from alveolar air into pulmonary capillary blood because its partial pressure is higher in the alveoli. Carbon dioxide moves in the opposite direction because its partial pressure is higher in deoxygenated blood reaching the lungs.",
        "Do not replace partial-pressure gradients with a vague idea that gases simply move toward the heart. Diffusion occurs across the respiratory membrane, while circulation carries the exchanged gases away from or toward that membrane.",
      ],
      bullets: [
        "Ventilation: movement of air into and out of lungs.",
        "External respiration: exchange between alveoli and pulmonary blood.",
        "Transport: movement of gases in blood.",
        "Internal respiration: exchange between systemic blood and tissues.",
      ],
    },
    {
      heading: "Oxygen and carbon dioxide transport",
      paragraphs: [
        "Most oxygen is transported bound reversibly to haemoglobin in red blood cells; only a small fraction is dissolved in plasma. The oxygen-haemoglobin dissociation curve is therefore a useful way to think about loading in the lungs and unloading in actively respiring tissues.",
        "Carbon dioxide is carried in more than one form. The largest share is transported as bicarbonate, with smaller fractions dissolved in plasma or associated with haemoglobin and plasma proteins. In close options, identify whether the question asks for the major form, not merely a possible form.",
      ],
    },
    {
      heading: "Regulation and common NEET traps",
      bullets: [
        "Do not confuse respiratory rhythm generation with gas exchange at alveoli.",
        "At rest, inspiration requires muscle activity; quiet expiration is primarily elastic recoil.",
        "Oxygen is mostly haemoglobin-bound, whereas carbon dioxide is mostly transported as bicarbonate.",
        "Partial pressure, not total atmospheric pressure alone, explains diffusion direction.",
        "Separate ventilation problems from transport problems: both can reduce oxygen delivery, but they are not the same mechanism.",
      ],
    },
    {
      heading: "A 15-minute revision method",
      paragraphs: [
        "First draw four boxes labelled ventilation, alveolar exchange, blood transport and tissue exchange. Add one direction arrow for oxygen and one for carbon dioxide in each box. Then make a two-column list: oxygen transport versus carbon dioxide transport. Finally, solve a short set and rewrite every wrong answer as a one-line correction tied to one of the four boxes.",
        "This approach builds retrieval rather than recognition. It also makes it easier to reject distractors that use a correct fact in the wrong stage of the respiratory process.",
      ],
    },
  ],
  "excretion-and-kidney-function": [
    {
      heading: "Excretion: organise the chapter as a flow",
      paragraphs: [
        "A reliable NEET revision route is to follow blood through the nephron: filtration at the glomerulus, selective reabsorption along the tubule, secretion of selected substances into tubular fluid, and final urine concentration in the collecting duct. Questions often test the sequence or ask which process explains a change in tubular fluid.",
        "The kidney is not simply a filter that removes everything from blood. Useful substances and much of the water are selectively returned to circulation, while nitrogenous waste and excess ions are regulated through coordinated nephron processes.",
      ],
    },
    {
      heading: "Filtration at the renal corpuscle",
      paragraphs: [
        "The glomerulus is a capillary tuft within Bowman's capsule. Its filtration depends on pressure differences across the filtration membrane. The filtrate resembles plasma in many small solutes, but cells and most large plasma proteins normally remain in the blood.",
        "When an option describes filtration, check whether it belongs to the glomerulus or a later tubule segment. Reabsorption is not filtration, and secretion is not the same as movement of a useful substance back into blood.",
      ],
      bullets: [
        "Filtration: blood to Bowman's capsule.",
        "Reabsorption: tubular fluid to peritubular blood.",
        "Secretion: peritubular blood to tubular fluid.",
        "Excretion: removal of the final urine from the body.",
      ],
    },
    {
      heading: "Selective reabsorption and the nephron",
      paragraphs: [
        "The proximal convoluted tubule is central to bulk reabsorption. Later segments refine water and ion balance. The loop of Henle contributes to the medullary concentration gradient, while the distal tubule and collecting duct respond to the body's regulatory needs.",
        "Antidiuretic hormone is a high-yield connection: it increases water reabsorption in the distal nephron and collecting ducts when the body needs to conserve water. Do not confuse this with a hormone that directly creates the initial glomerular filtrate.",
      ],
    },
    {
      heading: "What to separate in close options",
      bullets: [
        "Urine formation versus urine storage: kidneys form urine; the urinary bladder stores it.",
        "Glomerular filtration versus tubular reabsorption: their directions are opposite.",
        "Osmoregulation versus removal of nitrogenous waste: both involve kidneys, but the question may ask for one specific role.",
        "Urea, uric acid and ammonia: identify the organismal context before selecting the major nitrogenous waste product.",
        "Hormonal control of water balance versus neural control of micturition.",
      ],
    },
    {
      heading: "A 15-minute revision method",
      paragraphs: [
        "Draw a nephron and label the direction of fluid flow. Beside each segment, write one main task rather than a long list: filtration, bulk reabsorption, gradient formation, fine regulation, or final concentration. Then answer a short set by naming the process before looking at the options.",
        "For each error, record whether you mixed up a nephron segment, a direction of transport, or a regulatory hormone. That makes subsequent revision specific and prevents memorising answer letters without understanding the physiology.",
      ],
    },
  ],
  "immunity-pathogens-vaccines": [
    {
      heading: "Immunity: start with the body's lines of defence",
      paragraphs: [
        "For NEET revision, arrange immunity from broad to specific. Physical barriers such as skin and mucous membranes form the first line. Innate responses act quickly and do not depend on a previous encounter with one particular antigen. Acquired immunity is antigen-specific and develops memory.",
        "This sequence helps with close options. A response can be rapid without being specific, and it can be specific without being the first response to an infection. Identify whether the question is asking about a barrier, an innate cell-based response, or an acquired immune response.",
      ],
      bullets: [
        "Innate immunity: present from birth and broadly protective.",
        "Acquired immunity: antigen-specific and associated with immunological memory.",
        "Active immunity: the body produces its own immune response after antigen exposure.",
        "Passive immunity: ready-made antibodies are received from another source.",
      ],
    },
    {
      heading: "Antigens, antibodies and lymphocytes",
      paragraphs: [
        "An antigen is a substance that can be recognised by the immune system and can trigger a specific response. Antibodies are proteins produced by plasma cells derived from B lymphocytes. They bind particular antigens; they are not general-purpose chemicals that kill every pathogen in the same way.",
        "T lymphocytes and B lymphocytes have different roles. In simple exam comparisons, B-cell responses are linked with antibody production, while T-cell responses include cell-mediated functions. Avoid choosing an option just because it mentions a lymphocyte: check which mechanism is being tested.",
      ],
    },
    {
      heading: "Pathogens and disease transmission",
      paragraphs: [
        "A pathogen is a disease-causing organism or agent. Bacteria, viruses, protozoans, fungi and parasitic worms can all be relevant in the NEET syllabus, but their biology and modes of control differ. Read the organismal clue before matching a disease with its cause or transmission route.",
        "Transmission questions often mix reservoir, vector and route. A vector carries a pathogen between hosts, whereas a reservoir is the organism or environment in which an infectious agent is normally maintained. Contaminated food, water, air, contact and insect vectors are routes or mechanisms, not interchangeable labels.",
      ],
      bullets: [
        "Do not classify every microbe as a virus or every infectious disease as vector-borne.",
        "Separate the causative organism from the symptom, vector and preventive measure.",
        "A prevention method may reduce transmission without directly treating an established infection.",
      ],
    },
    {
      heading: "Vaccination and immune memory",
      paragraphs: [
        "Vaccination presents the immune system with an antigenic stimulus in a controlled way so that memory can develop. On a later exposure to the relevant antigen, the secondary response is typically faster and stronger because memory cells are available.",
        "Vaccines support active acquired immunity. Antiserum containing pre-formed antibodies gives passive immunity and may act immediately, but it does not create the same long-term memory. This active-versus-passive distinction is a dependable way to resolve common NEET distractors.",
      ],
    },
    {
      heading: "A 15-minute revision method",
      paragraphs: [
        "Make four columns headed barrier, innate response, acquired response and prevention. Place each NCERT term in one column, then add one example and one common confusion. Finish by explaining active and passive immunity aloud without looking at notes.",
        "When reviewing your recall notes, mark whether the gap came from confusing a cell type, a pathogen, a route of transmission, or a type of immunity. That classification makes the next revision session targeted rather than repetitive.",
      ],
    },
  ],
  "endocrine-system-and-hormones": [
    {
      heading: "Endocrine control: map gland, hormone and target",
      paragraphs: [
        "Start this NEET chapter with a three-part map for every hormone: the gland or tissue that releases it, its major target, and its principal effect. Mixing up gland and effect is a frequent endocrine error, and this map gives you a quick way to catch it.",
        "Endocrine glands are ductless: they release hormones into the surrounding fluid and then into blood, allowing signals to reach distant target tissues. That route is different from an exocrine gland, which sends a secretion through a duct. The pancreas is a useful reminder that one organ can have both roles: digestive secretions travel through ducts, while insulin and glucagon enter blood.",
        "A hormone can travel widely without acting on every cell. A target cell responds because it has the appropriate receptor. When an option says a hormone affects every tissue equally, pause and check whether it has confused circulation with receptor-based response.",
      ],
      bullets: [
        "Hypothalamus: links neural control with endocrine regulation.",
        "Pituitary: coordinates several endocrine glands, while also releasing hormones with direct effects.",
        "Thyroid, adrenal glands, pancreas and gonads: high-yield sources of hormones with distinct roles.",
      ],
    },
    {
      heading: "Feedback regulation is the central pattern",
      paragraphs: [
        "Many endocrine questions are best solved through negative feedback. When the level or effect of a regulated variable rises sufficiently, the stimulus for further hormone release is reduced. This keeps internal conditions within a useful range rather than allowing a response to increase without limit.",
        "The word negative does not mean harmful. It means that the response counteracts the original change. Use the direction of the loop, not a memorised phrase: ask what changes first, what signal responds, and what result feeds back to the control centre. Positive feedback is an exception used in specific physiological situations, so do not label every hormone sequence as positive feedback.",
      ],
    },
    {
      heading: "Thyroid, pancreas and adrenal connections",
      paragraphs: [
        "Thyroid hormones help regulate basal metabolic activity and support normal development. Iodine availability is an important NCERT connection because the thyroid needs iodine to synthesise thyroid hormones. When calcitonin and thyroxine appear together, read the hormone name before matching an effect: sharing a thyroid location does not give them the same job.",
        "The endocrine pancreas regulates blood glucose. Insulin lowers blood glucose by supporting uptake and storage processes, whereas glucagon raises it by mobilising stored reserves. The adrenal medulla drives rapid emergency responses, while the adrenal cortex releases a different group of steroid hormones.",
      ],
      bullets: [
        "Insulin and glucagon act in opposing directions on blood glucose regulation.",
        "Adrenaline prepares the body for an acute emergency response; it is not a digestive hormone.",
        "A gland can release more than one hormone, so match the exact hormone before choosing an effect.",
      ],
    },
    {
      heading: "Growth, reproduction and water balance",
      paragraphs: [
        "Growth hormone supports normal growth and metabolism, but it should not be confused with thyroxine, insulin or sex hormones merely because each can influence growth-related outcomes. In a question, identify whether the wording points to skeletal growth, metabolic rate, blood glucose, or reproductive function.",
        "For water balance, antidiuretic hormone increases water reabsorption in the kidney when conservation is needed. Oxytocin is a separate high-yield hormone with roles in childbirth and milk ejection. Similar names or a shared pituitary connection do not mean identical targets or effects.",
      ],
    },
    {
      heading: "The hypothalamus and pituitary: read the control hierarchy",
      paragraphs: [
        "The hypothalamus connects nervous-system input with endocrine control. It releases regulatory signals that influence the anterior pituitary, while the posterior pituitary releases hormones made in the hypothalamus and transported to it. This is the key split to check whenever ADH or oxytocin appears under a pituitary heading: the posterior pituitary releases them, but does not synthesise them.",
        "The anterior pituitary releases several hormones that control growth, thyroid activity, adrenal cortex activity and gonadal function. The safer revision method is not to memorise a long isolated list. Instead, draw a control line from hypothalamus to pituitary to target gland, then draw the feedback arrow back. This explains why the same system coordinates several distant organs without every hormone acting on every tissue.",
      ],
      bullets: [
        "Control centre: receives information and sends a regulatory signal.",
        "Tropic hormone: influences another endocrine gland.",
        "Target gland: releases a hormone that produces a downstream physiological effect.",
        "Negative feedback: a sufficient downstream effect reduces further stimulation in the control pathway.",
      ],
    },
    {
      heading: "Calcium balance and reproductive hormones: separate the comparisons",
      paragraphs: [
        "Calcium regulation is a useful example of why the source, trigger and effect must be kept together. Calcitonin can lower blood calcium in the relevant physiological context. Parathyroid glands release parathyroid hormone to raise blood calcium. Similar gland names do not mean the hormones do the same job.",
        "Reproductive hormones also work through coordinated relationships rather than one hormone-one-event slogans. Gonadotropins influence gonadal activity, while gonadal hormones drive reproductive function and feed back to the pituitary. For revision, first decide whether a statement concerns a controlling hormone, a gonadal hormone, or a physical response. That keeps a pituitary hormone from being placed where a gonadal hormone belongs.",
      ],
    },
    {
      heading: "Three self-checks before you close the chapter",
      paragraphs: [
        "Use these as retrieval prompts, not as another list to reread. Cover the table and complete each answer from memory before checking the guide or NCERT.",
      ],
      bullets: [
        "Draw one negative-feedback loop from a control centre to a target gland and back. Label the direction of every arrow.",
        "Write one sentence that separates endocrine secretion from exocrine secretion, then use the pancreas as your example.",
        "Choose one hormone pair with opposing effects and explain what happens when the regulated variable moves in each direction.",
      ],
    },
    {
      heading: "A 15-minute revision method",
      paragraphs: [
        "Set a 15-minute timer. In the first five minutes, draw four columns labelled gland, hormone, target and effect, then fill the cells from memory. The blank cells are the first facts to revisit. In the next five minutes, check the NCERT chapter and rewrite only the cells that were missing or wrong.",
        "Use the final five minutes for two arrows: high blood glucose to insulin to uptake and storage, then low blood glucose to glucagon to liver mobilisation. Add one control line from hypothalamus to anterior pituitary to thyroid, then draw feedback toward the control centres. Label each error as a gland mismatch, hormone-effect mismatch, or feedback-direction error. Once you can name the pattern, the chapter becomes much easier to revise.",
      ],
    },
  ],
  "neuron-nerve-impulse-synapse": [
    {
      heading: "Read the chapter as a route, not a list of terms",
      paragraphs: [
        "A nerve impulse follows a physical route: a receptor detects a change, a neuron carries the signal, a synapse passes it to the next cell, and an effector produces a response. When a revision prompt feels crowded with terms such as dendrite, axon, synapse and receptor, first ask where in that route the event is taking place.",
        "The neuron is specialised for receiving, conducting and passing on information. Dendrites mainly receive signals toward the cell body, while the axon carries impulses away from it. This is a directional idea, so it is more useful than trying to memorise a diagram as a picture.",
      ],
    },
    {
      heading: "Resting potential and the travelling impulse",
      paragraphs: [
        "At rest, the neuronal membrane has an electrical difference across it because ions are distributed unequally. A stimulus strong enough to reach threshold changes membrane permeability and produces depolarisation. The important exam point is the sequence: resting state, depolarisation, recovery of the original state, then readiness for another impulse.",
        "An impulse does not travel because one end of the neuron is permanently charged. Each adjacent portion of membrane is stimulated in turn. In a myelinated fibre, conduction is faster because the impulse effectively jumps between nodes of Ranvier rather than being regenerated continuously along every small section of membrane.",
      ],
      bullets: [
        "Threshold: the minimum effective stimulus needed to initiate an action potential.",
        "Depolarisation: the membrane becomes less negative as ion movement changes the potential difference.",
        "Repolarisation: the membrane returns toward its resting state after the impulse.",
        "Myelin increases the speed of conduction; it does not create the impulse itself.",
      ],
    },
    {
      heading: "At the synapse, the signal changes form",
      paragraphs: [
        "Most NEET questions use the chemical synapse model. When an impulse reaches the presynaptic terminal, neurotransmitter is released into the synaptic cleft. It binds receptors on the postsynaptic membrane and can start a new electrical change in the next neuron or target cell.",
        "The synaptic cleft is not a direct electrical wire. This is why chemical synapses normally pass information in one direction: neurotransmitter is released from the presynaptic side and the relevant receptors are concentrated on the postsynaptic side. Keep the names of the two sides separate in close options.",
      ],
    },
    {
      heading: "Reflex action: fast does not mean unconscious at every stage",
      paragraphs: [
        "A reflex action is a quick, automatic response to a stimulus. In a simple reflex arc, sensory neurons carry information to the spinal cord, an interneuron may link the pathway, and motor neurons carry the response to an effector. The body can become aware of the event, but the rapid protective response does not wait for a deliberate decision from the cerebrum.",
        "Questions often confuse the receptor with the effector. The receptor detects the stimulus; the effector, such as a muscle or gland, carries out the response. Draw one arrow from stimulus to receptor and another from motor neuron to effector before choosing an answer.",
      ],
    },
    {
      heading: "A short revision routine before practice",
      paragraphs: [
        "Sketch a neuron and a synapse from memory, then add arrows showing information flow. On a second line, write only four steps for a reflex arc: receptor, sensory neuron, central connection, motor neuron and effector. Finally, explain why a myelinated axon is faster without using the word 'faster' as the explanation itself.",
        "When you miss a question, sort the error into one of three groups: direction of signal flow, ionic change at the membrane, or role of a structure. The pattern usually becomes obvious after a few questions and tells you exactly what to revise from NCERT.",
      ],
    },
  ],
  "dna-rna-replication-transcription-translation": [
    {
      heading: "Build the chapter around information flow",
      paragraphs: [
        "The most useful starting point is a simple direction map: DNA stores hereditary information, a gene is expressed through an RNA intermediate, and translation uses that RNA information to assemble a protein. This map is not a substitute for the details, but it prevents the common mistake of treating replication, transcription and translation as unrelated lists of terms.",
        "Before revising individual enzymes or molecules, identify the input, output, main location and purpose of each process. Replication makes a new DNA copy before cell division. Transcription produces RNA from a DNA template. Translation reads the information carried by messenger RNA to make a polypeptide. A close comparison is easier when these four anchors are clear.",
      ],
    },
    {
      heading: "DNA and RNA: compare structure before function",
      paragraphs: [
        "DNA and RNA are nucleic acids made from nucleotide units. A nucleotide contains a sugar, phosphate group and nitrogenous base. The sugar and base choices help distinguish DNA from RNA: DNA contains deoxyribose and thymine, whereas RNA contains ribose and usually uses uracil in place of thymine.",
        "Structure supports function. DNA is generally treated as the more stable long-term information store, while several RNA molecules take part in using that information. Messenger RNA carries a coded message, transfer RNA brings amino acids during protein assembly, and ribosomal RNA is part of the machinery where polypeptides are made. Avoid reducing all RNA to a single role.",
      ],
      bullets: [
        "A gene is a functional segment of DNA associated with a product or regulatory role.",
        "A chromosome is a larger DNA-protein structure that contains many genes.",
        "A base pair is a structural relationship in nucleic acid; a codon is an information unit read during translation.",
        "Complementary pairing explains copying and transcription, but the two processes do not have the same product.",
      ],
    },
    {
      heading: "Replication: copying information accurately",
      paragraphs: [
        "During DNA replication, the two existing strands separate and each can guide the formation of a complementary strand. This is why replication is described as semi-conservative: each resulting DNA molecule includes one original strand and one newly made strand. The key idea is template-directed copying, not the creation of a completely unrelated molecule.",
        "Revision questions often become confusing when the direction of copying, the need for a template, and the outcome are mixed together. Keep the outcome fixed in your mind: replication produces DNA from DNA. It is linked with preparation for cell division, whereas transcription is linked with using genetic information for expression.",
      ],
    },
    {
      heading: "Transcription and translation: two different stages",
      paragraphs: [
        "Transcription uses one DNA strand as a template to produce an RNA molecule. In eukaryotic cells, it is commonly associated with the nucleus. The RNA sequence is complementary to the template strand, with uracil used in RNA. The result is not a protein and not a second DNA molecule.",
        "Translation occurs at ribosomes. The ribosome reads messenger RNA in codons, and transfer RNA molecules match their anticodons to the codons while carrying the corresponding amino acids. Peptide bonds join amino acids into a polypeptide. The genetic code links a nucleotide triplet in mRNA with an amino acid instruction; it does not mean that a codon itself is an amino acid.",
      ],
      bullets: [
        "Replication: DNA template to DNA product.",
        "Transcription: DNA template to RNA product.",
        "Translation: mRNA information to polypeptide product.",
        "Codon: triplet on mRNA. Anticodon: complementary triplet on tRNA.",
      ],
    },
    {
      heading: "A 20-minute recall routine",
      paragraphs: [
        "Draw three arrows labelled replication, transcription and translation. Under each arrow, write template, product, location and one essential molecule. Then draw a tRNA beside an mRNA strand and label codon, anticodon and amino acid. Check the drawing against NCERT only after completing it from memory.",
        "For every gap, write a correction as a relationship rather than a lone fact. For example, write 'translation reads mRNA at ribosomes' rather than simply writing 'ribosome'. Relationship-based notes make similar terms easier to separate during a time-limited revision session.",
      ],
    },
  ],
  "cell-theory-and-cell-organelles": [
    {
      heading: "Start with the cell as an organised system",
      paragraphs: [
        "Cell biology becomes more manageable when structures are grouped by their contribution to one system: a cell has a boundary, stores and uses genetic information, makes molecules, processes and transports materials, releases energy, and removes or recycles selected material. This functional map is more reliable than memorising a disconnected list of organelle names.",
        "Cell theory provides the frame. Cells are the basic structural and functional units of living organisms, and new cells arise from pre-existing cells. Use the theory to distinguish a general principle about life from a description of one specialised organelle.",
      ],
    },
    {
      heading: "Prokaryotic and eukaryotic cells: make one clean comparison",
      paragraphs: [
        "A prokaryotic cell does not have a membrane-bound nucleus; its genetic material occupies a nucleoid region. Eukaryotic cells have a membrane-bound nucleus and contain several membrane-bound organelles. This difference is more informative than simply calling one type simple and the other complex.",
        "Both cell types still require a cell boundary, genetic material, cytoplasm and ribosomes. When comparing them, first identify which feature is shared and which feature is a defining difference. A shared feature cannot be used as evidence that a cell is eukaryotic.",
      ],
      bullets: [
        "Cell membrane: selectively separates the cell interior from the surroundings.",
        "Cytoplasm: site of many cellular activities and suspended structures.",
        "Ribosomes: associated with protein synthesis in both prokaryotic and eukaryotic cells.",
        "Nucleus: membrane-bound genetic control centre in eukaryotic cells.",
      ],
    },
    {
      heading: "Follow the protein-processing route",
      paragraphs: [
        "For many cell questions, trace a protein rather than recalling isolated organelles. Genetic information in the nucleus is used to make RNA. Ribosomes assemble polypeptides. Rough endoplasmic reticulum is associated with proteins that enter a processing and transport pathway. The Golgi apparatus modifies, sorts and packages material into vesicles for appropriate destinations.",
        "The important distinction is that ribosomes carry out protein synthesis, while the endoplasmic reticulum and Golgi apparatus support processing, transport and packaging roles. The nucleus directs cellular activities through genetic information, but it is not the site where ribosomes assemble every protein.",
      ],
    },
    {
      heading: "Energy, digestion and plant-specific structures",
      paragraphs: [
        "Mitochondria are linked with aerobic respiration and ATP production. Their role should be separated from chloroplasts, which are associated with photosynthesis in plant cells. Both are often discussed as organelles with their own genetic material, but their central energy-related functions are different.",
        "Lysosomes contain digestive enzymes and are associated with intracellular breakdown. Vacuoles can contribute to storage and, in many plant cells, turgor-related functions. The cell wall gives plant cells additional support outside the plasma membrane; it does not replace the selectively permeable cell membrane.",
      ],
    },
    {
      heading: "A practical organelle map",
      paragraphs: [
        "Make six headings on one page: boundary, information, protein route, energy, digestion and storage. Place every organelle under one primary heading, then add one secondary connection only where it genuinely helps. For example, mitochondria belong under energy, while the nucleus belongs under information.",
        "Test your map by explaining why a cell membrane and a cell wall are not interchangeable, why a ribosome and a Golgi apparatus are not interchangeable, and why a chloroplast and a mitochondrion are not interchangeable. Those paired explanations expose weak distinctions faster than a long vocabulary list.",
      ],
    },
  ],
  "mutation-and-gene-expression": [
    {
      heading: "Gene expression connects genotype with cell function",
      paragraphs: [
        "A genotype refers to genetic information, while phenotype refers to observable characteristics influenced by genes and environment. Gene expression is the process by which information in DNA is used to produce a functional product, often a protein. It is therefore a bridge between a DNA sequence and the behaviour or structure of a cell.",
        "Not every gene is active in every cell at the same time. Cells with the same DNA can differ because they use different sets of genes. Keep this idea separate from mutation: regulation changes when or where existing information is used, whereas a mutation is a change in genetic material.",
      ],
    },
    {
      heading: "What a mutation changes",
      paragraphs: [
        "A mutation is a heritable alteration in genetic material. It can involve a change in the nucleotide sequence of a gene or a larger change involving chromosome structure or chromosome number. The effect depends on where the change occurs and how it affects a gene product or chromosome behaviour; a mutation is not automatically harmful, beneficial or visible.",
        "When revising mutation types, separate the level at which the change occurs. Gene-level changes affect a DNA sequence within a gene. Chromosomal changes concern larger segments or number. Mixing these levels is a common source of confusion because both can influence inherited traits.",
      ],
      bullets: [
        "Substitution changes one base pair for another.",
        "Insertion or deletion can alter the reading frame when the number of added or removed bases is not a multiple of three.",
        "A mutation may change a protein sequence, have little apparent effect, or affect regulation depending on context.",
        "Mutagens are factors that can increase the chance of mutation; they are not the same as a mutation itself.",
      ],
    },
    {
      heading: "From DNA change to protein consequence",
      paragraphs: [
        "To reason through a gene mutation, follow a sequence: DNA information is transcribed into RNA, RNA codons are read during translation, and the resulting amino-acid sequence contributes to protein structure and function. A change in DNA does not guarantee a dramatic phenotype, because the genetic code has redundancy and because the position of the change matters.",
        "A frameshift is especially important as a concept because inserting or deleting bases can change how later codons are grouped. By contrast, a substitution changes one position without necessarily shifting the downstream grouping. Draw the codons in groups of three to make this distinction visible.",
      ],
    },
    {
      heading: "Regulation is not an on-off slogan",
      paragraphs: [
        "Gene regulation means that a cell can control the timing, location or amount of gene expression. For revision, do not treat it as a vague switch. Ask what is being regulated: formation of an RNA transcript, availability of a protein product, or a response to a cellular signal. The exact mechanisms can be detailed, but the core principle is selective use of genetic information.",
        "This principle helps explain cell differentiation. A nerve cell and a muscle cell can contain the same genome but perform different functions because their patterns of gene expression differ. The distinction is about expression pattern, not about one cell type having an entirely different set of chromosomes.",
      ],
    },
    {
      heading: "A 20-minute revision routine",
      paragraphs: [
        "Create two columns labelled 'change in DNA' and 'use of DNA'. Put mutation in the first column and regulation in the second. Then write a four-step path from DNA to protein and mark where a substitution, an insertion, and a deletion could affect the result. Keep the examples general rather than trying to memorise a large list of diseases.",
        "Finish by explaining three pairs aloud: mutation versus mutagen, genotype versus phenotype, and gene regulation versus gene mutation. If you can state the difference and one connection for each pair without notes, the chapter is ready for a more detailed NCERT review.",
      ],
    },
  ],
  "photosynthesis-in-higher-plants": [
    {
      heading: "Photosynthesis begins with a chloroplast map",
      paragraphs: [
        "Start by locating the two linked parts of the process. Light-dependent reactions are associated with thylakoid membranes, where pigments capture light energy and water is split. The Calvin cycle takes place in the stroma and uses carbon dioxide together with ATP and NADPH from the light reactions to build carbohydrate.",
        "This map explains why oxygen is linked with water splitting, why ATP and NADPH are intermediates rather than food, and why carbon dioxide fixation belongs in a different chloroplast space.",
      ],
      bullets: ["Thylakoid membrane: photosystems, electron transfer, ATP and NADPH formation.", "Stroma: carbon dioxide fixation and carbohydrate-forming reactions.", "Water supplies electrons in the light-dependent reactions; oxygen is released.", "Carbon dioxide supplies carbon during the Calvin cycle."],
    },
    {
      heading: "Photosystems: keep the numbering and sequence apart",
      paragraphs: [
        "In non-cyclic electron flow, photosystem II acts before photosystem I. The numbers reflect their order of discovery, not the order in which they act. Electrons lost by photosystem II are replaced through photolysis of water, while electrons reaching photosystem I can contribute to NADPH formation.",
        "Cyclic photophosphorylation should be kept separate: it involves photosystem I and produces ATP without the same NADPH formation or oxygen release associated with non-cyclic flow. Draw two short arrow paths rather than learning the difference as a paragraph.",
      ],
    },
    {
      heading: "C3, C4 and photorespiration: read the locations",
      paragraphs: [
        "In C4 plants, carbon dioxide is first fixed in mesophyll cells into a four-carbon compound and then delivered to bundle-sheath cells, where the Calvin cycle proceeds. This spatial separation helps reduce photorespiration under suitable conditions.",
        "The central comparison is enough for a first revision: initial fixation in mesophyll, then carbon dioxide concentration around the Calvin cycle in bundle-sheath cells. Avoid turning it into a claim that C4 plants never photorespire.",
      ],
    },
    {
      heading: "Factors affect a rate, not a single switch",
      paragraphs: [
        "Light, carbon dioxide concentration, temperature and water availability influence the rate of photosynthesis. A limiting factor is the factor closest to restricting the rate under the stated conditions; changing another factor may not increase the rate once a different condition becomes limiting.",
        "Severe water shortage can lead to stomatal closure and reduced carbon dioxide entry. That is more accurate than saying water simply acts as an on-off switch for a leaf.",
      ],
    },
    {
      heading: "A 15-minute recall routine",
      paragraphs: [
        "Draw a chloroplast with thylakoid and stroma. Put water and light on one side, carbon dioxide on the other, and place ATP plus NADPH between the two compartments. Then add a small C3-versus-C4 location sketch without looking at notes.",
        "Finish with three corrections aloud: PSII can act before PSI; the Calvin cycle is not a darkness-only process; and released oxygen is linked with water splitting.",
      ],
    },
  ],
  "plant-respiration": [
    {
      heading: "Plant respiration is cellular energy release",
      paragraphs: [
        "Plants exchange gases through surfaces such as stomata, lenticels and roots, but they do not use specialised respiratory organs in the way mammals use lungs. Respiration is a cellular process that releases usable energy from organic substrates, and it occurs in living plant cells in both light and dark conditions.",
        "Keep it separate from photosynthesis. Photosynthesis stores light-derived energy in organic molecules; respiration releases energy from those molecules through enzyme-controlled pathways. The processes are connected in a plant, but neither is simply the reverse label of the other.",
      ],
    },
    {
      heading: "Glycolysis is the shared starting route",
      paragraphs: [
        "Glycolysis occurs in the cytoplasm and converts glucose to pyruvate. It is the common starting stage before pyruvate follows an aerobic route when oxygen is available or an anaerobic route under limited oxygen conditions.",
        "Write glucose -> glycolysis -> pyruvate first, then branch the diagram. This prevents the error of placing the whole pathway inside mitochondria or treating fermentation as a step after complete aerobic oxidation.",
      ],
    },
    {
      heading: "Aerobic and anaerobic routes answer different conditions",
      paragraphs: [
        "With adequate oxygen, pyruvate enters mitochondria for later stages of aerobic respiration. Oxygen acts as the terminal electron acceptor in electron transport, and the route extracts more energy from glucose than fermentation does.",
        "Under anaerobic conditions, pyruvate can be converted through fermentation. In plant tissues and yeast, alcoholic fermentation produces ethanol and carbon dioxide. The useful comparison is incomplete breakdown with much less energy capture, not a memorised ATP total detached from the pathway.",
      ],
    },
    {
      heading: "Respiratory quotient is a ratio with a context",
      paragraphs: [
        "The respiratory quotient compares carbon dioxide released with oxygen consumed. Carbohydrate respiration commonly gives an RQ close to one, whereas fats tend to give a value below one because they require relatively more oxygen.",
        "An RQ is an observation about gas exchange, not a substitute for the pathway. Glycolysis, later aerobic stages and electron transport explain how a substrate is being processed.",
      ],
    },
    {
      heading: "A 15-minute recall routine",
      paragraphs: [
        "Make a three-part pathway: glucose in the cytoplasm, pyruvate as the branch point, and an aerobic or fermentation destination. Add the location and whether oxygen is required beside every arrow.",
        "Explain why a green leaf can photosynthesise in light and still respire. If the explanation contains both energy storage and energy release, the distinction is secure.",
      ],
    },
  ],
  "digestion-and-absorption": [
    {
      heading: "Where this supplementary guide fits",
      paragraphs: ["Digestion and Absorption appeared as a separate chapter in older Class 11 NCERT editions. It is not a separate chapter in the 2026-27 contents. Use this guide as background human physiology alongside the current textbook and examination syllabus, rather than as a claim that every detail is currently examinable."],
    },
    {
      heading: "Use one food route before learning enzymes",
      paragraphs: [
        "The alimentary canal is easiest to revise as a route: mouth, pharynx, oesophagus, stomach, small intestine, large intestine, rectum and anus. Accessory glands add secretions, but food does not pass through the liver or pancreas. That distinction removes a common diagram error.",
        "Mechanical handling and chemical digestion work together. Chewing increases surface area, muscular movements mix and move food, and enzymes help convert large food molecules into forms that can be absorbed. Digestion and absorption are not interchangeable words.",
      ],
    },
    {
      heading: "Match each nutrient to an absorbable outcome",
      paragraphs: [
        "Carbohydrate digestion produces simple sugars, proteins are broken into amino acids, and fats are handled as fatty acids and glycerol-related products before uptake. The names matter because an option may give a correct enzyme but pair it with the wrong substrate or product.",
        "Bile is a classic check. It helps emulsify fats, increasing the surface available for enzyme action, but it is not itself a digestive enzyme. A statement can be partly correct about fat digestion and still fail at that distinction.",
      ],
    },
    {
      heading: "The small intestine is built for absorption",
      paragraphs: [
        "Most absorption occurs in the small intestine. Its length, folds, villi and microscopic surface features increase contact area, while blood vessels and lacteals support transport away from the intestinal lining. Structure and function should be learnt together here.",
        "Glucose and amino acids enter intestinal blood capillaries and reach the liver through the hepatic portal circulation. Many products of long-chain fat digestion first enter absorptive cells, are reassembled into triglycerides and packaged into chylomicrons. These particles enter lacteals and travel in lymph before reaching the blood. Short-chain fatty acids can enter portal blood more directly, so 'all fats go into lymph' is too broad.",
      ],
    },
    {
      heading: "Follow starch and protein through a changing chemical environment",
      paragraphs: [
        "Starch breakdown begins with salivary amylase. As the swallowed material becomes acidified in the stomach, this enzyme loses activity; carbohydrate digestion is then continued by pancreatic amylase in the small intestine and enzymes at the intestinal surface. An enzyme's presence in a swallowed mouthful does not mean it remains active throughout the route.",
        "Protein takes a different sequence. Gastric acid helps denature proteins and supports conversion of pepsinogen to pepsin, which cuts proteins into smaller peptides. Pancreatic proteases and intestinal peptidases continue the breakdown. This is why 'protein becomes amino acids in the stomach' skips the later stages needed to complete the explanation.",
      ],
    },
    {
      heading: "Three short reasoning checks",
      paragraphs: ["If a food sample has been broken into small molecules but those molecules remain in the intestinal lumen, has absorption occurred? No: chemical breakdown and crossing the intestinal lining are separate events. If villus surface area falls, which step is directly impaired? Uptake capacity falls even if digestive enzymes are still present.", "Why do glucose and a chylomicron have different early transport routes? Glucose can enter villus blood capillaries, whereas the assembled lipid particle enters a lacteal. Name the transported form before choosing the vessel; the word nutrient alone is not specific enough."],
    },
    {
      heading: "A 15-minute recall routine",
      paragraphs: [
        "Draw the food route as a single line and add liver and pancreas as side branches only. Under the small intestine, write three pairs: carbohydrate to simple sugars, protein to amino acids, and lipids to absorbable products. Then mark blood capillary and lacteal as separate exit routes.",
        "Finish with three corrections: bile is not an enzyme, the liver is an accessory organ rather than a food passage, and absorption is not the same event as digestion.",
      ],
    },
  ],
  "blood-and-circulation": [
    {
      heading: "Start with the two loops of double circulation",
      paragraphs: [
        "Human double circulation is best recalled as two connected loops. In pulmonary circulation, blood travels from the right side of the heart to the lungs and returns to the left side. In systemic circulation, blood leaves the left side for body tissues and returns to the right side.",
        "An artery carries blood away from the heart, while a vein carries blood toward it. Oxygen content is often associated with the vessels but does not define them; pulmonary vessels are the useful exception that tests the rule.",
      ],
    },
    {
      heading: "Blood has a fluid part and formed elements",
      paragraphs: [
        "Plasma is the fluid component that carries dissolved substances. Red blood cells are closely linked with oxygen transport through haemoglobin, white blood cells participate in defence, and platelets support clotting. Learn the function beside the component rather than treating every cell in blood as a transport cell.",
        "Clotting is a protective sequence. At NEET level, platelets and clotting factors participate in forming a clot that helps limit blood loss after vessel damage.",
      ],
    },
    {
      heading: "Follow blood through the chambers and valves",
      paragraphs: [
        "A chamber route is more reliable than a labelled heart picture: venae cavae -> right atrium -> right ventricle -> pulmonary artery -> lungs -> pulmonary veins -> left atrium -> left ventricle -> aorta -> body tissues. Valves support one-way flow by preventing backward movement when pressure changes.",
        "Do not confuse the chamber with the vessel that follows it. The right ventricle sends blood toward the lungs, while the left ventricle supplies systemic circulation. That division follows the two-loop map.",
      ],
    },
    {
      heading: "Capillaries connect transport with exchange",
      paragraphs: [
        "Arteries branch into smaller vessels and capillary networks, where exchange with tissues can occur across thin walls. Veins collect blood for the return journey. This connects large-scale circulation with the local exchange of gases, nutrients and wastes described in neighbouring chapters.",
        "For blood groups, retain that red-cell surface antigens and plasma antibodies must be considered together in transfusion compatibility. Do not reduce the topic to a single letter without checking the antigen-antibody relationship in the question.",
      ],
    },
    {
      heading: "A 15-minute recall routine",
      paragraphs: [
        "Draw two loops around a four-chamber heart, using words rather than colour alone: pulmonary to lungs and systemic to body. On a second line, list plasma, red blood cell, white blood cell and platelet with one function each. Then redraw the chamber route from memory.",
        "Explain why a pulmonary artery can carry deoxygenated blood without ceasing to be an artery. If the answer is direction away from the heart, the definition is secure.",
      ],
    },
  ],
  "mitosis-and-meiosis": [
    {
      heading: "Cell cycle: copy the genome, then share it accurately",
      paragraphs: [
        "The cell cycle is the coordinated sequence in which a cell grows, duplicates its genome and other components, and divides into daughter cells. Interphase is not an empty pause: G1 supports growth and metabolism, S phase is when DNA replication occurs, and G2 prepares the cell for division.",
        "The useful first checkpoint is DNA content versus chromosome number. During S phase, DNA content doubles, but chromosome number does not double because each replicated chromosome still has one centromere and two sister chromatids. Counting the wrong thing is the fastest route into a close-option error.",
      ],
      bullets: ["G1: active growth before DNA replication.", "S: DNA replication; each chromosome gains a sister chromatid.", "G2: growth and protein synthesis before division.", "M phase: nuclear division followed by cytokinesis in the usual cell cycle."],
    },
    {
      heading: "Mitosis: one division that preserves chromosome number",
      paragraphs: [
        "Mitosis is an equational division: a replicated set of chromosomes is distributed so that the daughter cells retain the parental chromosome number. The nuclear events are described as prophase, metaphase, anaphase and telophase, followed by cytokinesis that separates the cytoplasm.",
        "Use one visual sequence. Chromosomes condense in prophase; they align at the metaphase plate; centromeres split and sister chromatids move to opposite poles in anaphase; nuclei reform in telophase. In animal cells cytokinesis occurs through a cleavage furrow, whereas plant cells form a cell plate from the centre outward.",
      ],
    },
    {
      heading: "Meiosis I: the reduction happens when homologues part",
      paragraphs: [
        "Meiosis begins after a single round of DNA replication but includes two sequential divisions. In prophase I, homologous chromosomes pair. Crossing over occurs between non-sister chromatids of homologous chromosomes during pachytene, producing recombined genetic material before the homologues separate.",
        "The key reduction event is anaphase I: homologous chromosomes move to opposite poles while sister chromatids remain joined at their centromeres. This is why meiosis I reduces chromosome number. A diagram that labels every X-shaped chromosome as a 'chromosome pair' without showing homologues can conceal the actual event.",
      ],
    },
    {
      heading: "Meiosis II: a second division without another replication",
      paragraphs: [
        "Meiosis II follows meiosis I without a fresh S phase. Its broad chromosome-separation pattern resembles mitosis because sister chromatids separate, but it starts from haploid cells. By the end, four haploid cells are formed from the original diploid cell.",
        "Do not say meiosis II reduces chromosome number again. The number was reduced in meiosis I. Meiosis II separates the duplicated chromatids so each final cell receives one chromatid from each replicated chromosome present at the start of that division.",
      ],
    },
    {
      heading: "A chromosome-accounting recall routine",
      paragraphs: [
        "Draw one diploid pair of homologous chromosomes in two colours. First duplicate each one during S phase. Next show what moves apart in anaphase of mitosis, anaphase I and anaphase II. Label every arrow with either 'sister chromatids' or 'homologous chromosomes'.",
        "Finish by answering three checks without notes: Why does DNA double in S phase without doubling chromosome number? Which stage gives crossing over its named location? Which division first produces haploid cells? These questions test the relations, not a list of stage names.",
      ],
    },
  ],
  "sexual-reproduction-in-flowering-plants": [
    {
      heading: "Begin at the flower, but follow the reproductive cells",
      paragraphs: [
        "A flowering-plant question becomes manageable when the parts of a flower are treated as a route rather than as a labelled diagram. The anther produces pollen grains, the stigma receives compatible pollen, and the ovary contains ovules. Each ovule contains the female gametophyte, the embryo sac.",
        "Keep the two gametophytes distinct. A pollen grain is the male gametophyte and forms a pollen tube after a suitable pollen-pistil interaction. The embryo sac is the female gametophyte within the ovule. Pollen is not the male gamete itself, and an ovule is not the same structure as an ovary.",
      ],
    },
    {
      heading: "Pollination starts a route; fertilisation completes it",
      paragraphs: [
        "Pollination is transfer of pollen from anther to stigma. It can occur within the same flower or between flowers, depending on the route. Fertilisation is later: it requires the male gametes delivered through a pollen tube to reach the embryo sac. A pollen grain on a stigma therefore tells you that pollination has occurred, not that a seed has already formed.",
        "After germination on a receptive stigma, the pollen tube grows through the style toward an ovule. It enters the embryo sac and releases two male gametes. In sequence questions, check whether an option has quietly placed the pollen tube after fertilisation or sent pollen directly into the ovary without the stigma-style route.",
      ],
    },
    {
      heading: "Double fertilisation has two fusion events and two products",
      paragraphs: [
        "Angiosperms show double fertilisation because the two male gametes take part in two separate fusions inside the embryo sac. One male gamete fuses with the egg cell to form the diploid zygote. The zygote later develops into the embryo.",
        "The other male gamete fuses with the two polar nuclei in the central cell to form the primary endosperm nucleus, which is typically triploid. Endosperm nourishes the developing embryo. The two events happen in the same embryo sac, but embryo and endosperm should never be treated as the same product.",
      ],
    },
    {
      heading: "After fertilisation, name the structure that changes",
      paragraphs: [
        "Following fertilisation, the ovule develops into a seed and the ovary develops into a fruit. The integuments of the ovule contribute to the seed coats. This structure-to-product map is more dependable than a loose list of post-fertilisation terms.",
        "For a quick recall task, draw a vertical route with five stops: anther, stigma, pollen tube, embryo sac, and seed. Add the two fusion arrows at the embryo sac, then state aloud which fusion produces embryo and which produces its nutritive tissue. Finish by writing ovule to seed and ovary to fruit without looking back.",
      ],
    },
  ],
  "mendelian-inheritance": [
    {
      heading: "Inheritance questions begin with alleles entering gametes",
      paragraphs: [
        "Mendelian crosses are not ratio-recitation exercises. Start with the genotype of each parent and ask what alleles can appear in its gametes. An individual with genotype Aa carries two alleles for the same gene, but a gamete receives only one of them after segregation.",
        "This is the practical meaning of the law of segregation: paired alleles separate during gamete formation, so each gamete carries one allele of a gene. Fertilisation then brings one allele from each parent together in an offspring. Build this route before drawing any Punnett square.",
      ],
    },
    {
      heading: "Genotype, phenotype, dominant and recessive answer different questions",
      paragraphs: [
        "A genotype is an allele combination, such as AA, Aa, or aa. A phenotype is the observable expression associated with that genotype in the stated inheritance pattern. With complete dominance, AA and Aa can share a phenotype even though their genotypes differ; aa expresses the recessive phenotype.",
        "Do not use dominant to mean common, stronger, healthier, or more important. In a standard Mendelian context, it describes which allele is expressed in a heterozygote. The allele frequency in a population is a separate question.",
      ],
    },
    {
      heading: "Use the Punnett square as a probability map, not a memory card",
      paragraphs: [
        "For Aa x Aa, each parent can produce A and a gametes. Combining the two gamete sets gives AA, Aa, Aa, and aa as the four equally likely genotype combinations in the usual simple model. This yields a 1:2:1 genotype ratio and, under complete dominance, a 3:1 phenotype ratio.",
        "The ratios are consequences of the gamete combinations. If a question changes the parental genotypes or the dominance relationship, the familiar 3:1 pattern may no longer apply. Rebuild the gametes instead of forcing a remembered ratio onto a different cross.",
      ],
    },
    {
      heading: "A two-minute cross check before choosing an answer",
      paragraphs: [
        "Write three lines: parent genotypes, possible gametes, and offspring combinations. Only after those lines are complete should you count genotypes or phenotypes. For a dihybrid context, keep the two gene pairs visibly separate until you have listed the allowed gametes.",
        "A useful final check is to ask whether the question wants a genotype, a phenotype, a carrier status, or a probability. Those four requests can produce different correct answers from the same cross, and confusing the requested output is more common than a drawing error.",
      ],
    },
  ],
  "recombinant-dna-technology": [
    {
      heading: "Recombinant DNA is a controlled sequence, not a single tool",
      paragraphs: [
        "The core idea is to join a chosen DNA fragment with a vector so that the combined DNA can enter a suitable host cell and be copied or expressed. Each tool has one job in the sequence: isolate or prepare DNA, cut at a recognised sequence, join compatible fragments, introduce the construct into a host, and identify cells carrying the desired construct.",
        "Calling every enzyme a restriction enzyme hides the workflow. Restriction endonucleases cut DNA at specific recognition sequences. DNA ligase joins DNA fragments by forming phosphodiester bonds. A vector carries the insert into a host; it is not the host cell itself.",
      ],
    },
    {
      heading: "Match the molecular tool to the change it makes",
      paragraphs: [
        "A plasmid is a commonly used vector because it can carry an inserted DNA fragment and replicate in an appropriate bacterial host. When both donor DNA and vector are cut to make compatible ends, the desired fragment can be inserted and ligated to produce recombinant DNA.",
        "An inserted fragment is not automatically present in every host cell. Transformation introduces DNA into host cells, while selection and screening help distinguish cells likely to carry the intended recombinant molecule. This distinction matters: introducing DNA, selecting a transformed cell, and checking the insert are separate stages.",
      ],
    },
    {
      heading: "From host cell to product: copy first, then consider expression",
      paragraphs: [
        "Once a suitable host has taken up the recombinant DNA, the host can multiply the construct along with its own cells. This cloning stage provides many copies of the DNA. If the goal is a gene product, expression depends on the construct and host being arranged so that the inserted gene can be used by the host machinery.",
        "Downstream processing refers to recovering and purifying a useful product after it has been produced. It is not the same as cutting and ligating DNA at the beginning of the workflow. Read whether the wording asks about construction, host introduction, selection, multiplication, or product recovery.",
      ],
    },
    {
      heading: "A workflow recall routine",
      paragraphs: [
        "Draw five boxes from left to right: donor DNA, vector, recombinant DNA, host cell, and selected clone or product. Between donor DNA and vector, add restriction endonuclease; between prepared pieces and recombinant DNA, add ligase. Do not add a tool unless you can state its action in one verb.",
        "For a final check, cover the labels and reconstruct the route. Then answer: What carries an insert? What joins DNA fragments? What step puts recombinant DNA into a cell? What happens after a cell carrying the right construct has been identified? This is a process map, not a list of buzzwords.",
      ],
    },
  ],
  "chromosomal-basis-of-inheritance": [
    {
      heading: "Chromosomes give inheritance its physical route",
      paragraphs: [
        "Chromosomal theory connects the patterns seen in crosses with events inside cells. Genes occupy particular positions on chromosomes, and homologous chromosomes carry the same genes in the same order while potentially carrying different alleles. In a diploid organism, one member of each homologous pair comes from each parent.",
        "During meiosis, homologous chromosomes pair and then separate into different cells. This provides the cellular basis for allele segregation: the two alleles of a gene are carried on homologues and are separated when those homologues move apart in meiosis I. The rule is easier to trust when you can draw the chromosomes that perform it.",
      ],
    },
    {
      heading: "Independent assortment depends on how pairs line up",
      paragraphs: [
        "At metaphase I, each homologous pair can orient independently of the other pairs. When pairs separate, different maternal and paternal chromosome combinations can enter gametes. This chromosome behaviour provides the physical basis for independent assortment when the genes being considered are on different chromosomes, or effectively behave as unlinked.",
        "Independent assortment does not mean every gene in the genome is physically independent. A chromosome contains many genes. Before applying an expected dihybrid ratio, ask whether the question gives a reason to treat the genes as unlinked or whether it is instead testing genes that lie on the same chromosome.",
      ],
    },
    {
      heading: "Linkage keeps nearby genes together more often",
      paragraphs: [
        "Genes on the same chromosome are linked. If two alleles are arranged as AB on one homologue and ab on the other, gametes AB and ab preserve the parental combinations. Linkage therefore makes parental combinations more frequent than would be expected if the two gene pairs assorted independently.",
        "Linked does not mean permanently inseparable. The likelihood of separation depends on whether a crossover occurs between the two gene positions during meiosis. Genes close together have a smaller interval in which a crossover can separate them, so they tend to show stronger linkage than genes farther apart on the same chromosome.",
      ],
    },
    {
      heading: "Crossing over creates recombinant combinations",
      paragraphs: [
        "During prophase I, homologous chromosomes pair. Crossing over is a reciprocal exchange of corresponding segments between non-sister chromatids of homologous chromosomes. In the AB/ab arrangement, a crossover between the two gene positions can produce recombinant chromatids carrying Ab and aB combinations.",
        "Keep the words separate: homologous chromosomes are the paired maternal and paternal chromosomes; sister chromatids are duplicated copies of one chromosome; non-sister chromatids belong to different homologues. The exchange relevant to recombination occurs between non-sister chromatids, not between sister chromatids.",
      ],
    },
    {
      heading: "A chromosome-map recall routine",
      paragraphs: [
        "Draw two homologues with AB on one and ab on the other. First draw the no-crossover outcome and list the parental gametes. Next draw one crossover between A and B on non-sister chromatids and list the recombinant gametes. Use colours or marks to show which segments changed origin.",
        "Finish with four checks: Which division separates homologues? Which chromatids exchange segments? Why can linked genes still yield recombinant types? Why does a recombination frequency of 50 percent not prove that two genes are on the same chromosome? The answers should follow from the drawing, not from a memorised phrase.",
      ],
    },
  ],
  "pedigree-analysis-and-inheritance-patterns": [
    {
      heading: "Read a pedigree as evidence across generations",
      paragraphs: [
        "A pedigree is a compact record of how a stated trait appears in a family. Begin with the key, then read generation by generation: a horizontal line joins partners, a vertical line leads to their offspring, and the symbols indicate the sex convention used in the diagram. A shaded symbol shows an individual described as having the trait; it does not, by itself, reveal the genotype.",
        "The useful task is not to name a pattern from one symbol. Look for repeated clues: whether unaffected parents have an affected child, whether the trait appears in successive generations, whether males and females occur in comparable ways, and whether a father-to-son route is present. Each clue narrows possibilities; a conclusion should fit the whole family, not one striking branch.",
      ],
    },
    {
      heading: "Start with parent-offspring combinations that rule patterns out",
      paragraphs: [
        "For a simple autosomal dominant model, an affected person usually has an affected parent. If two unaffected parents are shown with an affected child, that observation does not fit the usual fully penetrant dominant model, but it can fit a recessive model when both parents carry the allele. Treat this as a model check, not as a statement about every real family.",
        "For a simple autosomal recessive model, the phenotype can appear among siblings while both parents are unaffected carriers. The trait may therefore seem to skip generations. An affected person has two recessive alleles in the basic model, while an unaffected carrier has one dominant and one recessive allele. Keep phenotype and carrier status separate: a pedigree may establish the former before it can establish the latter for every person.",
      ],
    },
    {
      heading: "Sex-linked clues need a direction check",
      paragraphs: [
        "Autosomal traits are not tied to the sex chromosomes, so the basic model allows the trait in people of either sex with similar probability. X-linked patterns need a different question: which parent can pass an X chromosome to which child? A father passes his X chromosome to daughters and his Y chromosome to sons, so an X-linked trait does not travel directly from father to son.",
        "For an X-linked recessive pattern, a male with the allele on his single X chromosome expresses the stated trait in the simple model. A female generally needs the relevant recessive allele on both X chromosomes to express it. Do not use a count of males alone as proof. Use the inheritance route, then see whether the observed pattern agrees with it.",
      ],
    },
    {
      heading: "A pedigree-reading routine that shows your reasoning",
      paragraphs: [
        "Cover any label that names the pattern. On paper, mark every affected person first. Next write one observation under the diagram: for example, 'unaffected parents have an affected child' or 'there is no father-to-son transmission'. Then cross out the models that contradict the observation before assigning possible genotypes.",
        "For a two-minute recall check, draw a small three-generation family with two unaffected parents and one affected child. State one inheritance model that can explain it and one simple dominant model it does not support. Then draw an X-linked route from a father to a daughter and from a father to a son; the route itself should make the chromosome rule visible.",
      ],
      bullets: [
        "Read the legend before using the symbols.",
        "Use more than one clue before naming a model.",
        "Write possible genotypes only after the phenotype pattern has been checked.",
        "Keep classroom inheritance models separate from clinical prediction for a real family.",
      ],
    },
  ],
  "molecular-tools-and-dna-analysis": [
    {
      heading: "Molecular analysis asks a sequence of different questions",
      paragraphs: [
        "A DNA sample is not automatically ready to answer every laboratory question. A revision-friendly route is: obtain a DNA-containing sample, focus on a chosen sequence when needed, make enough copies for observation, and separate fragments when their sizes need to be compared. The method changes because the question changes.",
        "Restriction enzymes, PCR and gel electrophoresis often appear together, but they do not do the same job. A restriction endonuclease recognises particular DNA sequences and cuts DNA. PCR amplifies a selected region. Gel electrophoresis separates DNA fragments after an electric field moves them through a gel. Say the verb beside each tool before choosing an option.",
      ],
    },
    {
      heading: "PCR copies a target; it does not sort fragments",
      paragraphs: [
        "Polymerase chain reaction is designed to amplify a selected DNA region. In each cycle, double-stranded DNA is separated, primers bind to complementary target sequences, and a DNA polymerase extends from the primers. Repeating the cycle produces many copies of the region defined by the primers.",
        "The distinction matters because PCR is about increasing the amount of a chosen sequence, whereas a gel is about separating molecules already present in a sample. A primer is not the enzyme that copies DNA, and a thermal cycle is not a step of gel electrophoresis. Track the input and output: target DNA enters PCR; more copies of that target leave it.",
      ],
    },
    {
      heading: "A gel turns fragment size into a visible pattern",
      paragraphs: [
        "DNA carries a negative charge because of its phosphate backbone. In an agarose gel, DNA fragments move toward the positive electrode when an electric field is applied. The gel acts as a molecular sieve, so smaller fragments generally travel farther through it than larger fragments during the same run.",
        "A lane is one sample path; a band marks DNA fragments that have travelled a similar distance. The migration pattern can help compare fragment sizes, but it does not provide the DNA sequence merely by looking at a band. Before interpreting a gel, check the direction of travel, the sample wells, and whether the prompt asks about size, copying, cutting, or detection.",
      ],
    },
    {
      heading: "Build a tool-to-output map from memory",
      paragraphs: [
        "Draw three boxes labelled cut, copy and separate. Put a restriction endonuclease above the first box, PCR above the second, and agarose gel electrophoresis above the third. Under each, write one output: fragments, many target copies, and separated bands. This turns a vocabulary list into a usable decision map.",
        "Then add a fourth box labelled detect a specific sequence. This reminds you that a gel pattern alone and a sequence-specific identification are different levels of analysis. The point is not to memorise every laboratory technique beyond the chapter; it is to protect the role of each NCERT-linked tool.",
      ],
    },
  ],
  "biotechnology-applications": [
    {
      heading: "Applications begin after the biotechnology workflow",
      paragraphs: [
        "The principles-and-processes chapter explains how DNA can be handled; applications ask what a biological product or modified organism is intended to do. Keep the two chapters connected but distinct. An enzyme, vector or host cell is part of a method. A therapeutic protein, an insect-resistant crop or a diagnostic approach is an intended use of that method.",
        "For revision, sort each application by its target and purpose: a health-related product, a crop trait, a diagnostic use, or a broader biosafety and ownership question. This prevents a familiar word such as 'gene' or 'plasmid' from being treated as an application in itself.",
      ],
    },
    {
      heading: "Health-related applications: distinguish product from method",
      paragraphs: [
        "Recombinant DNA methods can enable cells to produce a selected protein. In the NCERT context, recombinant human insulin is a useful example of a biotechnology-derived product. The study point is the relationship: genetic information is introduced into a suitable production system, and the desired protein is recovered after appropriate processing. It is not a guide to treatment, dose, or personal health decisions.",
        "Gene therapy is discussed as an application of introducing a functional gene into cells to address a genetic condition. At NEET revision level, keep the idea separate from routine drug administration and avoid extending it into claims about individual medical outcomes. The question is usually about the category of intervention or the sequence of a biotechnology application.",
      ],
    },
    {
      heading: "Agricultural applications: name the trait and the biological reason",
      paragraphs: [
        "A genetically modified crop carries a deliberately introduced or altered genetic feature. In the familiar Bt-crop example, a gene associated with Bacillus thuringiensis is used so that the plant can produce an insecticidal protein active against specified insect pests. The useful distinction is between an organism engineered for a trait and a chemical pesticide applied from outside.",
        "A crop trait should always be read with its stated target. Resistance to one pest does not mean a plant is automatically resistant to every disease, drought condition or herbicide. Overbroad statements are a common source of error because they replace a named trait with a general claim that biotechnology makes every crop better.",
      ],
    },
    {
      heading: "Biosafety, biopiracy and patents are part of the chapter boundary",
      paragraphs: [
        "Biotechnology applications are not only about what can be made. NCERT also frames questions of evaluation, biosafety, biopiracy and patents. A useful study distinction is that biosafety considers possible effects and responsible use, while a patent concerns legal rights over an invention or process. Biopiracy refers to the unauthorised use of biological resources or traditional knowledge without fair recognition or benefit-sharing.",
        "For a final recall routine, make four cards: product, crop trait, diagnostic use and governance question. Place one chapter example under each card, then explain why it belongs there. Finish by linking back to the recombinant-DNA guide: the workflow supplies a method; an application supplies a purpose and a context for evaluation.",
      ],
    },
  ],
  "human-reproduction": [
    {
      heading: "Follow the reproductive cells, then locate each event",
      paragraphs: [
        "Human reproduction is easier to revise as a sequence of locations and cell events than as two disconnected anatomy lists. The broad route is gamete formation, transfer of sperm into the female reproductive tract, fertilisation, early development, implantation and placental connection. A structure matters because it enables one part of that route.",
        "Keep gamete formation distinct from fertilisation. Spermatogenesis produces sperm in the testes. Oogenesis begins in the ovaries, but the cell released at ovulation is a secondary oocyte, arrested in metaphase II. Sperm entry triggers completion of that division. Fertilisation normally occurs at the ampullary-isthmic junction of the oviduct; fusion of the haploid nuclei establishes the diploid zygote.",
      ],
    },
    {
      heading: "From zygote to implantation: sequence before terminology",
      paragraphs: [
        "After fertilisation, the zygote undergoes cleavage while moving toward the uterus. The early dividing cells form a morula, and a later blastocyst has an outer trophoblast layer and an inner cell mass. The terms are related by sequence, not interchangeable labels for the same stage.",
        "Implantation occurs when the blastocyst becomes embedded in the uterine endometrium. Do not place implantation in the oviduct merely because fertilisation happens there. A reliable location check is: fertilisation in the oviduct, then early divisions during transit, then implantation in the uterus.",
      ],
    },
    {
      heading: "Placenta links two circulations without mixing them directly",
      paragraphs: [
        "The placenta forms an exchange interface between the developing foetus and the pregnant person's body. It supports transfer of materials such as nutrients and gases and is associated with hormone production during pregnancy. The revision point is the interface: maternal and foetal blood do not simply become one circulating pool.",
        "The umbilical cord connects the developing foetus with the placenta. In a route question, distinguish the cord as the connection from the placenta as the exchange surface. The amnion and amniotic fluid provide a protective environment around the developing foetus; they are not substitutes for the placenta's transport role.",
      ],
    },
    {
      heading: "Count the products of meiosis, not just the divisions",
      paragraphs: [
        "One primary spermatocyte completes meiosis I to give two secondary spermatocytes; meiosis II produces four haploid spermatids. Their transformation into sperm is spermiogenesis. Release from Sertoli cells into the tubule lumen is spermiation. These last two events describe different actions and neither is another chromosome-reduction division.",
        "Oogenesis distributes the cytoplasm unequally. A primary oocyte begins meiosis before birth and arrests in prophase I. Completion of meiosis I produces a large secondary oocyte and a much smaller polar body. Keeping most of the cytoplasm in one cell supports early development. The parallel with four equally sized spermatids therefore breaks down even though both pathways involve meiosis.",
        "As an original counting exercise, start with three primary spermatocytes. Assuming every meiotic product survives, they yield twelve spermatids, each haploid. Three primary oocytes do not yield twelve functional ova. Explain the unequal cytoplasmic division before trying to count the polar bodies.",
      ],
    },
    {
      heading: "Read the ovarian cycle alongside the uterine cycle",
      paragraphs: [
        "FSH and LH come from the anterior pituitary, whereas developing ovarian follicles produce oestrogens. During the follicular phase, follicle development is accompanied by rebuilding of the endometrium. Sustained high oestrogen near mid-cycle contributes to positive feedback and the LH surge that triggers ovulation. An ovulation arrow belongs at the follicle, not at the uterine lining.",
        "After ovulation the ruptured follicle forms the corpus luteum, which secretes progesterone and supports a secretory endometrium. In a cycle without pregnancy, corpus-luteum regression lowers ovarian hormone levels and the lining is shed. During early pregnancy, hCG supports the corpus luteum. A textbook 28-day diagram is a model for understanding the sequence, not a universal timetable or a way to predict an individual's fertility.",
      ],
    },
    {
      heading: "Cleavage increases cell number before it increases embryo size",
      paragraphs: [
        "During early cleavage, repeated mitotic divisions partition the zygote into smaller blastomeres. The total structure does not double in size each time a cell divides. A 16-cell morula is not sixteen full-sized zygotes joined together. Later, fluid accumulation helps establish the blastocyst cavity and separates the outer trophoblast from the inner cell mass.",
        "Test the route with three statements: a secondary oocyte is ovulated; a blastocyst implants; the placenta provides an exchange interface. Replacing any of those stages with 'egg' hides a different biological event. At birth, uterine contractions involve positive feedback with oxytocin. After birth, prolactin supports milk production while oxytocin supports milk ejection: production and movement are separate functions.",
      ],
    },
    {
      heading: "A location-and-stage recall map",
      paragraphs: [
        "Draw three place labels in a row: gonad, oviduct and uterus. Under them, place gamete formation, fertilisation and implantation respectively. Add one final side box for placenta and join it to the developing foetus with a cord. This four-place map is enough to check most sequence errors without copying a detailed anatomical diagram.",
        "Finish with three verbal checks: Which cells fuse at fertilisation? Which stage implants? What is the difference between a placenta and an umbilical cord? The answer should name both the event and its location.",
      ],
    },
  ],
  "reproductive-health": [
    {
      heading: "Start with the biological event a method changes",
      paragraphs: [
        "Use the normal sequence as an organising line: gamete formation, gamete transfer, fertilisation, then implantation. Contraceptive methods interrupt parts of this sequence; assisted reproductive technologies help accomplish particular steps. Reproductive health also includes wellbeing, reliable education and prevention of infection, so it cannot be reduced to whether pregnancy occurs.",
        "This guide compares syllabus-level mechanisms. It does not select a contraceptive method, interpret symptoms or recommend a procedure for an individual. The study task is to identify what is transferred, which event is affected and where that event takes place.",
      ],
    },
    {
      heading: "Pregnancy prevention and infection prevention are different outcomes",
      paragraphs: [
        "A method can prevent fertilisation without preventing transmission of an infectious agent. For example, blocking the vas deferens interrupts sperm transport but is not a barrier to infection. Condoms have a physical-barrier role and can reduce the risk of many sexually transmitted infections when correctly used, although they do not eliminate every infection risk.",
        "Keep pathogen categories separate: gonorrhoea and syphilis are bacterial examples, while HIV infection and hepatitis B involve viruses. Absence of obvious symptoms does not establish absence of infection. These distinctions explain why awareness and professional testing belong in the chapter; they do not support diagnosis from a revision checklist.",
      ],
    },
    {
      heading: "Compare contraception by mechanism rather than brand name",
      paragraphs: [
        "A barrier method physically limits sperm passage. Hormonal methods act through reproductive physiology, including suppression of ovulation; describing them as a wall between sperm and oocyte misses their mechanism. Copper-releasing intrauterine devices affect sperm motility and fertilising capacity. Different IUD categories need not share every mechanism.",
        "In vasectomy, the vas deferens is interrupted; in tubectomy, the oviduct is interrupted. Neither description means removal of the gonads. This distinction connects anatomy to mechanism: preventing gamete transport is different from removing the tissue that makes gametes and secretes hormones. Learn these as anatomical comparisons, not as recommendations about suitability.",
      ],
    },
    {
      heading: "Decode IVF, ZIFT, IUT and GIFT using material and destination",
      paragraphs: [
        "IVF describes fertilisation outside the body; it does not describe the entire pregnancy occurring outside the body. Embryo transfer is a subsequent event. In NCERT terminology, ZIFT transfers a zygote or early embryo with up to eight blastomeres into the fallopian tube, while IUT transfers an embryo with more than eight blastomeres into the uterus. These are syllabus distinctions, not instructions for clinical practice.",
        "GIFT involves transfer of gametes rather than an already formed embryo; the NCERT example describes transferring an ovum from a donor into the fallopian tube. ICSI identifies the introduction of a sperm into an ovum, not the site of embryo transfer. To decode an unfamiliar description, underline the material first and circle the destination second.",
        "Try two original classification prompts. An embryo has already formed before transfer: this is not a transfer of unfertilised gametes. A description names the uterus as the destination: distinguish it from a tubal transfer before considering the abbreviation. The location-and-stage map in Human reproduction supplies the prerequisite for both decisions.",
      ],
    },
    {
      heading: "Distinguish contraception from terminating an established pregnancy",
      paragraphs: [
        "Contraception aims to prevent pregnancy; medical termination of pregnancy concerns a pregnancy that already exists. The timing and purpose are therefore different. An amniocentesis example belongs to prenatal investigation, not to either category of contraception or assisted fertilisation. It involves sampling amniotic fluid for diagnostic assessment under medical supervision.",
        "The NCERT discussion of misuse of prenatal testing concerns sex selection. Learning the biological basis of a test does not justify its misuse. For revision, keep three separate labels on your page: diagnostic purpose, possible misuse and ethical or legal restriction. A textbook summary is not a substitute for current law or individual clinical guidance.",
      ],
    },
    {
      heading: "Check the claim, the mechanism and the limit",
      paragraphs: [
        "Make three columns on blank paper. In the first write the claim 'interrupts gamete transport'; in the second name the relevant duct; in the third explain why this is not removal of a gonad. Repeat with 'fertilisation occurs outside the body', then explain why the statement says nothing by itself about the later transfer site.",
        "Finally compare two purposes: reducing an infection risk and preventing a pregnancy. List why success at one does not automatically establish the other. A useful answer names the biological route involved. Describing every intervention as simply 'prevention' loses the distinction the chapter is asking you to understand.",
      ],
    },
  ],
  "molecular-basis-of-inheritance": [
    {
      heading: "Inheritance needs DNA to be stored, copied and used",
      paragraphs: [
        "The molecular basis of inheritance is a chapter about information management in cells. DNA must store a sequence, fit into the cell, be copied before division and provide information for RNA and protein production. Treat these as linked jobs rather than one long list of molecules and enzymes.",
        "A nucleotide contains a sugar, phosphate group and nitrogenous base. In DNA, complementary base pairing gives each strand information about the other: adenine pairs with thymine and guanine pairs with cytosine. The sequence carries information; the sugar-phosphate backbone provides the repeating structural framework.",
      ],
    },
    {
      heading: "Packaging changes the scale, not the identity of DNA",
      paragraphs: [
        "In eukaryotic cells, long DNA molecules associate with histone proteins to form nucleosomes. Further levels of coiling and organisation allow DNA to fit within the nucleus. Packaging should not be confused with replication: packaging arranges existing DNA, whereas replication makes DNA copies before cell division.",
        "A chromosome is a highly organised DNA-protein structure, while a gene is a DNA segment associated with a functional product or RNA. A chromosome can contain many genes. When an option swaps chromosome and gene, return to scale: one is a large organised carrier, the other is a defined information segment within the DNA.",
      ],
    },
    {
      heading: "Semiconservative replication preserves a template relationship",
      paragraphs: [
        "DNA replication uses each parental strand as a template for a new complementary strand. Each resulting double helix therefore contains one old strand and one newly synthesised strand; this is the semiconservative model. The base-pairing rule explains why a template sequence can guide the sequence of a new strand.",
        "DNA polymerase adds nucleotides in a defined direction, and the two template strands are antiparallel. This creates a leading strand that is synthesised continuously and a lagging strand that is assembled in segments. The essential revision distinction is not a long enzyme list: both strands are copied, but their synthesis is organised differently because of strand orientation.",
      ],
    },
    {
      heading: "What would distinguish DNA from protein as hereditary material?",
      paragraphs: [
        "A convincing experiment must distinguish competing explanations. Transformation alone showed that a heritable property could pass from one bacterial preparation to another; it did not by itself identify the molecule. In the Avery, MacLeod and McCarty work, removing DNA with DNase prevented transformation, whereas the corresponding protein- and RNA-digesting treatments did not. The comparison makes DNA necessary for that transforming activity.",
        "Hershey and Chase used different radioactive labels for phage DNA and protein. Phosphorus-32 traced DNA, while sulfur-35 traced protein. Following infection, separation of bacterial cells from the external phage coats showed which labelled material entered the cells. The inference comes from the label's location after separation, not simply from detecting radioactivity somewhere in the tube.",
      ],
    },
    {
      heading: "Predict the bands before naming semiconservative replication",
      paragraphs: [
        "In the Meselson-Stahl experiment, bacteria first incorporated heavy nitrogen into DNA and were then grown with light nitrogen. After one replication, semiconservative copying predicts double helices with one heavy parental strand and one light new strand: an intermediate-density band. A conservative model would instead predict separate heavy and light DNA populations at that stage.",
        "One intermediate band alone does not distinguish semiconservative copying from every alternative: a dispersive model could also give intermediate material. After the second replication, semiconservative copying predicts both light DNA and hybrid DNA, whereas dispersive copying predicts DNA that remains mixed within its strands. Comparing successive generations is what makes the reasoning stronger.",
        "Use a simple original strand count: label two parental strands H and supply only L for new strands. One round gives two HL molecules. Copy each again and obtain two HL and two LL molecules. There is no HH molecule after the first round, and the parental H strands have not changed into L strands.",
      ],
    },
    {
      heading: "Use base composition as a check on the double-stranded model",
      paragraphs: [
        "For a double-stranded DNA sample, A equals T and G equals C. If an original worked example gives 18 percent adenine, thymine is also 18 percent. The remaining 64 percent is divided equally between guanine and cytosine, so each is 32 percent. The total must be 100 percent, not 200 percent; the proportions refer to the whole sample.",
        "Do not impose these equalities on the composition of a single isolated strand. Its complementary partner supplies the balancing bases. Likewise, a complementary strand must be written with the opposite polarity. Writing the correct letters without the 5-prime and 3-prime ends can conceal a direction error. Transcription and translation are developed in the separate DNA-to-protein guide; here the goal is to establish why DNA can store and copy a sequence.",
      ],
    },
    {
      heading: "A storage-to-copy recall routine",
      paragraphs: [
        "Draw one central DNA molecule and make three outward arrows: package, replicate and express. Under package, write histones and nucleosome; under replicate, write template plus complementary pairing; under express, write RNA then protein. This map shows where the molecular-basis chapter connects to the separate gene-expression guide without repeating it.",
        "Close the page and answer four checks: What is the difference between a gene and a chromosome? What changes during packaging? What makes replication semiconservative? Why is the lagging strand made in segments? Each answer should name a relationship, not just a term.",
      ],
    },
  ],
  "evolution-and-natural-selection": [
    {
      heading: "Evolution is a population change across generations",
      paragraphs: [
        "Evolution is not a change that one individual organism chooses during its lifetime. In population genetics, evolution is described as a change in allele frequencies in a population over generations. The unit that changes is therefore the population, while natural selection acts through differences among individuals.",
        "Start with variation. Individuals in a population can differ in traits, and some of those differences can be inherited. If an environment makes one heritable variant more likely to contribute offspring than another, the representation of that variant can increase in later generations. That change in representation is the evolutionary outcome to track.",
      ],
    },
    {
      heading: "Natural selection has a cause-and-consequence route",
      paragraphs: [
        "The route can be written as variation, heritability, environmental context and unequal reproductive success. A trait is not selected because it is morally better, more complex or more advanced. Its effect depends on the conditions in which organisms live, survive and reproduce.",
        "Selection pressure is a feature of the environment that changes the relative success of variants. It can involve resources, predators, climate or another ecological condition. The important comparison is between reproductive contribution, not merely which individual survives for a short time. A variant becomes more common only when it is inherited and contributes disproportionately to later generations.",
      ],
    },
    {
      heading: "Selection, drift and migration change populations in different ways",
      paragraphs: [
        "Natural selection is one mechanism of evolutionary change, but it is not the only one. Genetic drift is a change in allele frequency caused by chance, especially noticeable in small populations. Gene flow occurs when individuals or gametes move between populations and introduce or remove alleles. Mutation supplies new genetic variation by changing DNA sequence.",
        "A useful question is whether the explanation requires an advantage. If an allele becomes common because carriers leave more offspring under stated conditions, selection is relevant. If a small group happened to carry a different sample of alleles, chance and drift may be the better explanation. Do not use 'adaptation' as a substitute word for every population change.",
      ],
    },
    {
      heading: "A change in frequency is not the same as a larger population",
      paragraphs: [
        "Consider a hypothetical diploid population of 100 individuals: 36 are AA, 48 are Aa and 16 are aa. There are 200 copies of this autosomal locus. The number of A copies is twice 36 plus 48, or 120, giving an A frequency of 0.60. Counting the 84 individuals with at least one A allele would answer a different question.",
        "If a later generation of 100 has 49 AA, 42 Aa and 9 aa, the A frequency is 0.70. Population size stayed fixed while allele frequency changed. The counts alone do not prove natural selection: evidence about reproductive differences, migration and chance is needed to identify the mechanism. This is why an evolutionary explanation needs more than the observation that one colour has become common.",
      ],
    },
    {
      heading: "Hardy-Weinberg equilibrium supplies a comparison baseline",
      paragraphs: [
        "For two alleles, write p + q = 1. Under the idealised equilibrium assumptions, the genotype frequencies are p squared, 2pq and q squared. Using p = 0.60 and q = 0.40 gives 0.36, 0.48 and 0.16. Random mating, a very large population and absence of selection, mutation and migration are part of the model; the equation is not a claim that all real populations satisfy those conditions.",
        "For a fully recessive phenotype in a population assumed to be at equilibrium, a frequency of 0.09 corresponds to q squared, not q. Thus q = 0.30, p = 0.70 and the expected heterozygote frequency is 0.42. State the equilibrium assumption before using this shortcut. The formula cannot identify which evolutionary force acted merely because observed frequencies differ.",
      ],
    },
    {
      heading: "Separate the origin of variation from the environment selecting it",
      paragraphs: [
        "A mutation is not generated because a population needs a useful trait. Selection can increase an existing heritable variant when its carriers contribute more descendants in a particular environment. A bottleneck, by contrast, can alter frequencies because the survivors happen to be an unrepresentative sample. The same final proportion could therefore result from different histories.",
        "Evidence also needs a precise comparison. Homologous structures share an evolutionary origin even when their present functions differ; analogous features can perform similar functions despite different origins. Neither resemblance nor complexity alone proves that one living species is the ancestor of another. Close the guide by explaining what evidence would distinguish advantage-driven reproduction from chance sampling in the hypothetical population above.",
      ],
    },
    {
      heading: "Draw one generation boundary before you reason",
      paragraphs: [
        "Draw two rows of simple organisms, labelled generation one and generation two. In the first row, use two heritable colour variants. Add one environmental condition between the rows, then draw more descendants from the variant that has higher reproductive success in that condition. The second row should show a changed proportion, not a transformed individual.",
        "For a final recall check, answer four questions without notes: What is the population-level measure that changes? What makes a trait relevant to natural selection? How does drift differ from selection? Why is evolution not a ladder of progress? The answers should rely on population and generation language.",
      ],
    },
  ],
  "organisms-and-populations": [
    {
      heading: "Begin with an organism in its environment",
      paragraphs: [
        "Ecology begins by asking how an organism responds to its surroundings. Abiotic factors such as temperature, water and light influence where organisms can survive and reproduce. Biotic factors include other organisms, whether they are competitors, predators, prey, parasites or mutualistic partners.",
        "An organism's habitat is the place where it lives; its niche describes its functional role and relationship with resources and other organisms. These terms are connected but not identical. A habitat gives the physical setting, while a niche asks how the organism uses that setting.",
      ],
    },
    {
      heading: "A population has attributes that one organism cannot have",
      paragraphs: [
        "A population consists of individuals of the same species living in a defined area at a given time. Population density, birth rate, death rate, age structure and sex ratio describe the group rather than a single individual. When a prompt gives a number, first ask whether it is measuring an organism, a population or a community.",
        "Population size can change when births and immigration add individuals, while deaths and emigration remove them. This four-arrow accounting step is more useful than learning growth curves in isolation because it tells you why the number might rise or fall.",
      ],
    },
    {
      heading: "J-shaped and S-shaped curves answer different resource questions",
      paragraphs: [
        "Exponential growth produces a J-shaped curve in a simplified situation with abundant resources and no effective limit on growth. It describes what a population could do under favourable conditions; it is not a promise that a real population will rise indefinitely.",
        "Logistic growth includes environmental resistance and a carrying capacity, often represented by K. As population size approaches the supportable level for that environment, growth slows and the curve becomes S-shaped. Carrying capacity is tied to a particular habitat and its available resources, so it can change when environmental conditions change.",
      ],
    },
    {
      heading: "Work a population balance with an explicit time interval",
      paragraphs: [
        "Suppose a defined study area starts a month with 120 individuals. During that month there are 18 births, 7 deaths, 5 immigrants and 11 emigrants. The end count is 120 + 18 - 7 + 5 - 11 = 125. The increase is five individuals, even though births alone were eighteen. This is a hypothetical bookkeeping example; each count must refer to the same area and interval.",
        "If the area is 5 square kilometres, the starting density is 24 individuals per square kilometre and the ending density is 25. Population size and density are interchangeable only if the area is fixed. Counts are not always the most useful measure: percentage cover can describe a spreading plant population better than attempting to separate every connected shoot.",
      ],
    },
    {
      heading: "Read the axes and slope before deciding which curve you see",
      paragraphs: [
        "On the growth sketch, the horizontal axis is time and the vertical axis is population size N. For the simple exponential model, dN/dt = rN: the per-capita rate r is fixed, but the absolute increase grows as N increases. For logistic growth, dN/dt = rN(1 - N/K); the additional factor reduces growth as the population approaches K.",
        "For an original comparison, set r to 0.2 per year and K to 200. At N = 50 the logistic instantaneous growth rate is 7.5 individuals per year. At N = 100 it is 10, and at N = 150 it returns to 7.5. The largest total growth rate in this model occurs halfway to K, not at K. These are model rates at particular population sizes, not exact one-year census predictions.",
        "At N = K the model gives zero net growth, which does not imply that every birth and death stops. Births and losses can balance. A real population may fluctuate around its resource limit, and a change in the habitat can shift that limit. The smooth S curve is a simplified explanation of regulation rather than a tracing of every natural population.",
      ],
    },
    {
      heading: "Use two signs to keep species interactions distinct",
      paragraphs: [
        "Assign one sign to each species: a benefit is positive, a cost is negative and no appreciable effect is zero. Mutualism is positive for both; competition is negative for both; predation and parasitism benefit one participant while harming the other. Commensalism benefits one without an appreciable effect on the other. Always keep the species order fixed when interpreting the signs.",
        "A lichen combines fungal and photosynthetic partners, while an orchid growing as an epiphyte uses a tree for support without taking its nutrients as a parasite would. Both examples involve close association, but that observation alone does not identify the interaction. State what each partner gains or loses. Population interactions connect this chapter to natural selection when differences in survival and reproduction affect inherited variants over generations.",
        "As a final check, explain why a population with many prereproductive individuals may have growth potential without its current count already being high. Age composition describes who can contribute to future reproduction; a census total gives only how many individuals are present now.",
      ],
    },
    {
      heading: "A population-accounting recall routine",
      paragraphs: [
        "Make a two-part sketch. On the left, write births and immigration with arrows into a population circle, then deaths and emigration with arrows out. On the right, draw a J curve and an S curve, adding a dashed horizontal line only to the S curve for carrying capacity. State what resource assumption distinguishes the curves.",
        "Finish with three checks: Is density a property of one organism or a population? What does K describe? Why can carrying capacity change? These questions force the model back into an actual environmental context.",
      ],
    },
  ],
  "ecosystem-energy-flow-and-ecological-pyramids": [
    {
      heading: "An ecosystem has two linked accounting systems",
      paragraphs: [
        "A useful way to enter this chapter is to keep two questions on the page at once. Where does energy enter, and where do chemical nutrients go? Energy reaches most ecosystems as sunlight, is captured by producers, passes through feeding relationships and is eventually lost as heat. Elements such as carbon, nitrogen and minerals can return to the environment and be used again.",
        "This is why a curved arrow from decomposers to plants must be labelled as nutrients, not energy. Decomposition can make inorganic nutrients available in soil or water; it cannot send the heat released by respiration back into a leaf. One pathway is a flow, the other is a cycle.",
      ],
    },
    {
      heading: "Start at producers: production is a rate, not a pile of biomass",
      paragraphs: [
        "Producers convert a fraction of incoming light energy into chemical energy through photosynthesis. Gross primary productivity, or GPP, is the total rate at which a producer community fixes organic material. Producers also respire, so not all of that captured material remains available to the next trophic level.",
        "Net primary productivity is the remainder after producer respiration: NPP = GPP - R. It is the part that can support herbivores, decomposers and later trophic levels. The word productivity matters here: it describes a rate over area and time, whereas standing biomass is the amount of living material present at one moment.",
      ],
      bullets: [
        "GPP: total organic material fixed by producers per unit area per unit time.",
        "R: energy used by producers for their own respiration.",
        "NPP: organic material left after producer respiration and available to heterotrophs.",
      ],
    },
    {
      heading: "A food chain is one route through a web, not the whole ecosystem",
      paragraphs: [
        "A grazing food chain begins with living producers and moves to herbivores and their consumers. A detritus food chain begins with dead organic material and involves decomposers and detritus-feeding organisms. These routes overlap in real communities, so a food web is usually the better picture of how many species are connected.",
        "Trophic level means feeding position, not a permanent label attached to a species. An organism feeding in different chains can occupy different trophic positions. In a NEET question, identify what the organism is eating in the stated relationship before assigning its level.",
      ],
    },
    {
      heading: "Why an energy pyramid cannot turn upside down",
      paragraphs: [
        "At each trophic transfer, much of the energy in food is used in life processes and dissipated as heat. The NCERT ten-percent law is a useful approximate revision rule: only a small fraction, often expressed as about ten percent, becomes available to the next level. It is not a fixed universal conversion for every ecosystem.",
        "An energy pyramid therefore narrows from producers upward and is always upright. It represents the energy flow or productivity at successive trophic levels, so an upper level cannot receive more usable energy than the level below it supplied. The reason is the one-way loss at every transfer, not the relative body size of organisms.",
      ],
    },
    {
      heading: "Work a productivity budget before applying ten percent",
      paragraphs: ["For an invented annual budget, suppose producers fix 20,000 kJ per square metre and use 12,000 kJ per square metre in respiration. NPP is 8,000 kJ per square metre per year. All three values must cover the same area and interval. Subtracting a monthly respiration figure from annual GPP would not give a meaningful NPP.", "If a simplified exercise assumes ten-percent transfer from this producer NPP, primary-consumer production would be 800 kJ per square metre per year and secondary-consumer production 80. The assumption is part of the exercise, not a measured efficiency. Applying ten percent directly to GPP would skip the stated producer respiration loss.", "The remainder is not all immediately released as heat at a single transfer. Some material is uneaten or egested and can enter the detritus pathway; respiratory activity dissipates energy as heat. Distinguishing these destinations helps connect the budget to an actual food web."],
    },
    {
      heading: "Read the pyramid name before deciding its shape",
      paragraphs: [
        "Pyramids of number and biomass answer different questions from a pyramid of energy. A terrestrial biomass pyramid is commonly upright because producer standing biomass is large. In an aquatic ecosystem, a biomass pyramid may be inverted at a particular time because phytoplankton have a small standing crop but can reproduce and turn over quickly enough to support a larger consumer biomass.",
        "Do not use an inverted biomass example to argue that energy moves upward. The examples differ because biomass is a snapshot, while an energy pyramid tracks a rate of transfer. Name the measured quantity first; only then judge the shape.",
      ],
    },
    {
      heading: "Decomposers close nutrient loops without reversing energy flow",
      paragraphs: [
        "Dead organic material enters the detritus pathway. Decomposers and detritus-feeding organisms break it down, and mineralisation returns inorganic nutrients to the environmental pool. Producers can then take up those nutrients again. This link makes decomposers central to ecosystem functioning rather than an optional final box in a food chain.",
        "For a fast recall sketch, draw sunlight above a producer, then three arrows to a primary consumer, a secondary consumer and decomposers. Add a separate curved arrow labelled mineral nutrients from decomposers toward the producer. Finally write GPP - R = NPP beside the producer. If every arrow has a named meaning, the common confusions are much harder to make.",
      ],
    },
  ],
};

const defaultReferences: NoteReference[] = [
  { label: "NCERT Biology textbooks and official learning resources", href: "https://ncert.nic.in/textbook.php" },
  { label: "Khan Academy Biology library", href: "https://www.khanacademy.org/science/biology" },
];

const noteReferences: Record<string, NoteReference[]> = {
  "chromosomal-basis-of-inheritance": [
    { label: "NCERT Class 12 Biology, Chapter 4: Principles of Inheritance and Variation (2026-27)", href: "https://ncert.nic.in/textbook/pdf/lebo104.pdf" },
    { label: "OpenStax Biology 2e: Chromosomal theory and genetic linkage", href: "https://openstax.org/books/biology-2e/pages/13-1-chromosomal-theory-and-genetic-linkage" },
  ],
  "sexual-reproduction-in-flowering-plants": [
    { label: "NCERT Class 12 Biology, Chapter 1: Sexual Reproduction in Flowering Plants (2026-27)", href: "https://ncert.nic.in/textbook/pdf/lebo101.pdf" },
    { label: "OpenStax Biology 2e: Sexual reproduction", href: "https://openstax.org/books/biology-2e/pages/11-2-sexual-reproduction" },
  ],
  "mendelian-inheritance": [
    { label: "NCERT Class 12 Biology, Chapter 4: Principles of Inheritance and Variation (2026-27)", href: "https://ncert.nic.in/textbook/pdf/lebo104.pdf" },
    { label: "OpenStax Biology 2e: Laws of inheritance", href: "https://openstax.org/books/biology-2e/pages/12-3-laws-of-inheritance" },
  ],
  "recombinant-dna-technology": [
    { label: "NCERT Class 12 Biology, Chapter 9: Biotechnology: Principles and Processes (2026-27)", href: "https://ncert.nic.in/textbook/pdf/lebo109.pdf" },
    { label: "OpenStax Biology 2e: Biotechnology", href: "https://openstax.org/books/biology-2e/pages/17-1-biotechnology" },
  ],
  "pedigree-analysis-and-inheritance-patterns": [
    { label: "NCERT Class 12 Biology, Chapter 4: Principles of Inheritance and Variation", href: "https://ncert.nic.in/textbook/pdf/lebo104.pdf" },
    { label: "MedlinePlus Genetics: Understanding genetic conditions and inheritance", href: "https://medlineplus.gov/genetics/understanding/inheritance/" },
  ],
  "molecular-tools-and-dna-analysis": [
    { label: "NCERT Class 12 Biology, Chapter 9: Biotechnology: Principles and Processes", href: "https://ncert.nic.in/textbook/pdf/lebo109.pdf" },
    { label: "OpenStax Biology 2e: Biotechnology", href: "https://openstax.org/books/biology-2e/pages/17-1-biotechnology" },
  ],
  "biotechnology-applications": [
    { label: "NCERT Class 12 Biology, Chapter 10: Biotechnology and its Applications", href: "https://ncert.nic.in/textbook/pdf/lebo110.pdf" },
    { label: "NCERT Biology syllabus: Biotechnology and its applications", href: "https://www.ncert.nic.in/pdf/syllabus/desm_s_Biology.pdf" },
  ],
  "human-reproduction": [
    { label: "NCERT Class 12 Biology, Chapter 2: Human Reproduction", href: "https://ncert.nic.in/textbook/pdf/lebo102.pdf" },
    { label: "OpenStax Concepts of Biology: Human reproduction", href: "https://openstax.org/books/concepts-biology/pages/18-3-human-reproduction" },
    { label: "OpenStax Biology 2e: Hormonal control of human reproduction", href: "https://openstax.org/books/biology-2e/pages/43-4-hormonal-control-of-human-reproduction" },
  ],
  "reproductive-health": [
    { label: "NCERT Class 12 Biology, Chapter 3: Reproductive Health", href: "https://ncert.nic.in/textbook/pdf/lebo103.pdf" },
    { label: "WHO: Sexually transmitted infections, transmission and prevention", href: "https://www.who.int/news-room/fact-sheets/detail/sexually-transmitted-infections-(stis)" },
  ],
  "molecular-basis-of-inheritance": [
    { label: "NCERT Class 12 Biology, Chapter 5: Molecular Basis of Inheritance", href: "https://ncert.nic.in/textbook/pdf/lebo105.pdf" },
    { label: "OpenStax Concepts of Biology: DNA replication", href: "https://openstax.org/books/concepts-biology/pages/9-2-dna-replication" },
    { label: "OpenStax Biology 2e: Experimental evidence for DNA replication", href: "https://openstax.org/books/biology-2e/pages/14-3-basics-of-dna-replication" },
  ],
  "evolution-and-natural-selection": [
    { label: "NCERT Class 12 Biology, Chapter 6: Evolution", href: "https://ncert.nic.in/textbook/pdf/lebo106.pdf" },
    { label: "OpenStax Biology 2e: Population evolution and Hardy-Weinberg equilibrium", href: "https://openstax.org/books/biology-2e/pages/19-1-population-evolution" },
  ],
  "organisms-and-populations": [
    { label: "NCERT Class 12 Biology, Chapter 11: Organisms and Populations", href: "https://ncert.nic.in/textbook/pdf/lebo111.pdf" },
    { label: "OpenStax Biology 2e: Environmental limits to population growth", href: "https://openstax.org/books/biology-2e/pages/45-3-environmental-limits-to-population-growth" },
  ],
  "ecosystem-energy-flow-and-ecological-pyramids": [
    { label: "NCERT Class 12 Biology, Chapter 12: Ecosystem (2026-27)", href: "https://ncert.nic.in/textbook/pdf/lebo112.pdf" },
    { label: "OpenStax Biology 2e: Energy flow through ecosystems", href: "https://openstax.org/books/biology-2e/pages/46-2-energy-flow-through-ecosystems" },
  ],
  "mitosis-and-meiosis": [
    { label: "NCERT Class 11 Biology, Chapter 10: Cell Cycle and Cell Division", href: "https://ncert.nic.in/textbook/pdf/kebo110.pdf" },
    { label: "OpenStax Biology 2e: The cell cycle", href: "https://openstax.org/books/biology-2e/pages/10-2-the-cell-cycle" },
  ],
  "photosynthesis-in-higher-plants": [
    { label: "NCERT Class 11 Biology, Chapter 11: Photosynthesis in Higher Plants", href: "https://ncert.nic.in/textbook/pdf/kebo111.pdf" },
    { label: "OpenStax Biology 2e: Overview of photosynthesis", href: "https://openstax.org/books/biology-2e/pages/8-1-overview-of-photosynthesis" },
  ],
  "plant-respiration": [
    { label: "NCERT Class 11 Biology, Chapter 12: Respiration in Plants", href: "https://ncert.nic.in/textbook/pdf/kebo112.pdf" },
    { label: "OpenStax Biology 2e: Glycolysis", href: "https://openstax.org/books/biology-2e/pages/7-2-glycolysis" },
  ],
  "digestion-and-absorption": [
    { label: "NCERT Class 11 Biology: current contents (digestion is supplementary reading)", href: "https://ncert.nic.in/textbook/pdf/kebo1ps.pdf" },
    { label: "OpenStax Anatomy and Physiology: Digestive system processes", href: "https://openstax.org/books/anatomy-and-physiology-2e/pages/23-2-digestive-system-processes-and-regulation" },
    { label: "OpenStax Anatomy and Physiology: Chemical digestion and absorption", href: "https://openstax.org/books/anatomy-and-physiology-2e/pages/23-7-chemical-digestion-and-absorption-a-closer-look" },
  ],
  "blood-and-circulation": [
    { label: "NCERT Class 11 Biology, Chapter 15: Body Fluids and Circulation (2026-27)", href: "https://ncert.nic.in/textbook/pdf/kebo115.pdf" },
    { label: "OpenStax Anatomy and Physiology: Blood flow and blood pressure", href: "https://openstax.org/books/anatomy-and-physiology-2e/pages/20-2-blood-flow-blood-pressure-and-resistance" },
  ],
  "human-respiration": [
    { label: "NCERT Class 11 Biology, Chapter 14: Breathing and Exchange of Gases", href: "https://ncert.nic.in/textbook/pdf/kebo114.pdf" },
    { label: "Khan Academy: The respiratory system", href: "https://www.khanacademy.org/science/health-and-medicine/respiratory-system" },
    { label: "NCBI Bookshelf: Respiratory physiology overview", href: "https://www.ncbi.nlm.nih.gov/books/" },
  ],
  "excretion-and-kidney-function": [
    { label: "NCERT Class 11 Biology, Chapter 16: Excretory Products and their Elimination", href: "https://ncert.nic.in/textbook/pdf/kebo116.pdf" },
    { label: "Khan Academy: Renal system physiology", href: "https://www.khanacademy.org/science/health-and-medicine/renal-system" },
    { label: "NCBI Bookshelf: Kidney physiology references", href: "https://www.ncbi.nlm.nih.gov/books/" },
  ],
  "immunity-pathogens-vaccines": [
    { label: "NCERT Class 12 Biology, Chapter 7: Human Health and Disease", href: "https://ncert.nic.in/textbook/pdf/lebo107.pdf" },
    { label: "WHO: Vaccines and immunization", href: "https://www.who.int/health-topics/vaccines-and-immunization" },
    { label: "CDC: Immune system and vaccines", href: "https://www.cdc.gov/vaccines/" },
  ],
  "endocrine-system-and-hormones": [
    { label: "NCERT Class 11 Biology, Chapter 19: Chemical Coordination and Integration", href: "https://ncert.nic.in/textbook/pdf/kebo119.pdf" },
    { label: "OpenStax Anatomy and Physiology: Overview of endocrine signalling", href: "https://openstax.org/books/anatomy-and-physiology/pages/17-1-an-overview-of-the-endocrine-system" },
    { label: "OpenStax Anatomy and Physiology: Hormones and feedback loops", href: "https://openstax.org/books/anatomy-and-physiology-2e/pages/17-2-hormones" },
    { label: "National Institute of General Medical Sciences: What is a hormone?", href: "https://nigms.nih.gov/biobeat/2024/07/what-is-a-hormone" },
  ],
  "neuron-nerve-impulse-synapse": [
    { label: "NCERT Class 11 Biology, Chapter 18: Neural Control and Coordination", href: "https://ncert.nic.in/textbook/pdf/kebo118.pdf" },
    { label: "Khan Academy: Nervous system physiology", href: "https://www.khanacademy.org/science/health-and-medicine/nervous-system-and-sensory-infor" },
    { label: "NCBI Bookshelf: Neuroscience and synapse references", href: "https://www.ncbi.nlm.nih.gov/books/" },
  ],
  "dna-rna-replication-transcription-translation": [
    { label: "NCERT Class 12 Biology, Chapter 5: Molecular Basis of Inheritance", href: "https://ncert.nic.in/textbook/pdf/lebo105.pdf" },
    { label: "NCBI Bookshelf: Molecular Biology of the Cell", href: "https://www.ncbi.nlm.nih.gov/books/NBK21054/" },
    { label: "Khan Academy: Central dogma", href: "https://www.khanacademy.org/science/biology/gene-expression-central-dogma" },
  ],
  "cell-theory-and-cell-organelles": [
    { label: "NCERT Class 11 Biology, Chapter 8: Cell: The Unit of Life", href: "https://ncert.nic.in/textbook/pdf/kebo108.pdf" },
    { label: "NCBI Bookshelf: Molecular Biology of the Cell", href: "https://www.ncbi.nlm.nih.gov/books/NBK21054/" },
    { label: "Khan Academy: Cell structures", href: "https://www.khanacademy.org/science/biology/structure-of-a-cell" },
  ],
  "mutation-and-gene-expression": [
    { label: "NCERT Class 12 Biology, Chapter 5: Molecular Basis of Inheritance", href: "https://ncert.nic.in/textbook/pdf/lebo105.pdf" },
    { label: "NCBI Bookshelf: Genes and disease references", href: "https://www.ncbi.nlm.nih.gov/books/" },
    { label: "Khan Academy: Gene regulation", href: "https://www.khanacademy.org/science/biology/gene-regulation" },
  ],
};

const noteTables: Record<string, NoteComparisonTable> = {
  "chromosomal-basis-of-inheritance": {
    heading: "Chromosome behaviour: which event explains which pattern?",
    intro: "Use the physical event first. It keeps segregation, independent assortment, linkage, and recombination from becoming interchangeable labels.",
    columns: ["Pattern or term", "Chromosome event", "Gamete consequence", "Common confusion"],
    rows: [["Segregation", "Homologous chromosomes separate in meiosis I", "One allele of a gene enters each gamete", "Sister chromatids separating in meiosis II"], ["Independent assortment", "Different homologous pairs orient independently at metaphase I", "Different chromosome combinations can enter gametes", "Assuming every pair of genes is unlinked"], ["Linkage", "Genes occupy the same chromosome", "Parental allele combinations are common", "Saying linked genes can never separate"], ["Crossing over", "Non-sister chromatids exchange corresponding segments in prophase I", "Recombinant combinations may appear", "Exchange between sister chromatids"]],
  },
  "sexual-reproduction-in-flowering-plants": {
    heading: "Flowering-plant reproduction: location to outcome",
    intro: "Read down the route. Each row identifies one location, its event, and the product that follows.",
    columns: ["Location or structure", "Event", "Direct result", "Do not swap with"],
    rows: [["Anther", "Produces pollen grains", "Male gametophyte available for transfer", "Stigma"], ["Stigma and style", "Receives pollen and supports tube growth", "Pollen tube travels toward an ovule", "Fertilisation site"], ["Embryo sac", "One male gamete fuses with egg", "Diploid zygote, then embryo", "Primary endosperm nucleus"], ["Central cell of embryo sac", "Other male gamete fuses with polar nuclei", "Typically triploid primary endosperm nucleus", "Zygote"]],
  },
  "mendelian-inheritance": {
    heading: "One cross, four different things a question may ask",
    intro: "For Aa x Aa under complete dominance, do not stop after one familiar ratio. Identify the requested output first.",
    columns: ["Requested output", "Result from Aa x Aa", "How it is obtained", "Common error"],
    rows: [["Possible gametes", "A and a from each parent", "Segregation of paired alleles", "Putting Aa itself into a gamete"], ["Genotype ratio", "1 AA : 2 Aa : 1 aa", "Four combinations in the square", "Writing the phenotype ratio"], ["Phenotype ratio", "3 dominant : 1 recessive", "Complete dominance only", "Using it for every inheritance pattern"], ["Probability of aa", "1 in 4", "One aa outcome among four equal combinations", "Calling every recessive-phenotype individual a carrier"]],
  },
  "recombinant-dna-technology": {
    heading: "Recombinant DNA workflow: tool, action, checkpoint",
    intro: "The terms are most useful when attached to an action in the workflow rather than learned as a flat list.",
    columns: ["Step", "Main tool or component", "What happens", "Common wrong substitution"],
    rows: [["Prepare DNA", "Restriction endonuclease", "Cuts DNA at recognised sequences", "DNA ligase"], ["Build construct", "Vector plus insert and ligase", "Insert is joined into carrier DNA", "Host cell acting as vector"], ["Introduce DNA", "Host cell", "Recombinant DNA enters a suitable cell", "Selection treated as introduction"], ["Identify useful cells", "Selectable marker or screening step", "Desired transformants are distinguished", "Assuming every host contains the insert"], ["Recover output", "Downstream processing", "Useful product is separated and purified", "Initial DNA cutting"]],
  },
  "pedigree-analysis-and-inheritance-patterns": {
    heading: "Pedigree clues: what each observation can and cannot tell you",
    intro: "Use a family observation to test a model. A single clue is rarely the whole answer, so read the next row before deciding.",
    columns: ["Pedigree observation", "Model it can support", "Reasoning move", "Do not conclude"],
    rows: [["Unaffected parents with an affected child", "Simple autosomal recessive model", "Both parents can be unaffected carriers", "That every unaffected relative is definitely a carrier"], ["Trait in successive generations", "Simple dominant model can fit", "An affected person may have an affected parent", "That it proves dominance without checking all branches"], ["No direct father-to-son route", "An X-linked model remains possible", "Fathers pass Y, not X, to sons", "That absence alone proves X linkage"], ["Affected people of more than one sex", "Autosomal model remains possible", "Autosomal genes are not tied to sex chromosomes", "That sex counts alone identify the pattern"]],
  },
  "molecular-tools-and-dna-analysis": {
    heading: "DNA analysis: match the question to the tool",
    intro: "A method is easier to identify when you name the change it makes to the sample or the observation it produces.",
    columns: ["Question about the sample", "Useful tool or step", "What the output shows", "Nearby but different tool"],
    rows: [["Where can DNA be cut?", "Restriction endonuclease", "Fragments formed at recognised sequences", "DNA ligase, which joins fragments"], ["How can one target region be made plentiful?", "PCR", "Many copies of a primer-defined DNA region", "Gel electrophoresis, which separates fragments"], ["How can fragment sizes be compared?", "Gel electrophoresis", "Band positions after migration through a gel", "PCR, which amplifies rather than sorts"], ["Which way does DNA move in an agarose gel?", "Electric field", "Toward the positive electrode", "Movement toward the negative electrode"]],
  },
  "biotechnology-applications": {
    heading: "Applications: purpose, example and boundary",
    intro: "Place an example in its purpose category before adding the method that made it possible. This keeps products, traits and policy terms from becoming interchangeable.",
    columns: ["Application area", "NCERT-linked example", "What is being used or changed", "Boundary to remember"],
    rows: [["Health-related product", "Recombinant human insulin", "A selected protein is produced using recombinant-DNA methods", "Not personal treatment advice"], ["Agricultural trait", "Bt crop", "Plant carries a trait associated with insect-pest control", "Not resistance to every pest or condition"], ["Gene-based intervention", "Gene therapy concept", "Functional genetic information is introduced into cells", "Not the same as ordinary drug administration"], ["Governance question", "Biopiracy and patents", "Use, ownership and benefit-sharing are considered", "Not a laboratory tool or crop trait"]],
  },
  "human-reproduction": {
    heading: "Human reproduction: event, location and direct outcome",
    intro: "Follow the cell event through its location. This prevents fertilisation, implantation and placental exchange from being placed in the same structure.",
    columns: ["Biological event", "Main location", "Direct outcome", "Do not swap with"],
    rows: [["Gamete formation", "Testes or ovaries", "Sperm or ova are produced", "Fertilisation"], ["Fertilisation", "Ampullary-isthmic region of oviduct", "Zygote forms after gamete fusion", "Implantation in uterus"], ["Implantation", "Uterine endometrium", "Blastocyst becomes embedded", "Early cleavage during transit"], ["Placental exchange", "Placenta", "Maternal and foetal exchange interface", "Umbilical cord, which connects foetus and placenta"]],
  },
  "reproductive-health": {
    heading: "Assisted reproduction: what is transferred, and where?",
    intro: "Read the material and destination together. These are NCERT terminology distinctions, not a comparison of treatment suitability.",
    columns: ["Term", "Material or event", "Location named", "Decisive distinction"],
    rows: [["IVF", "Fertilisation of gametes", "Outside the body", "Names the fertilisation step, not the eventual transfer destination"], ["ZIFT", "Zygote or early embryo up to eight blastomeres", "Fallopian tube", "Transfers an already fertilised stage"], ["IUT", "Embryo with more than eight blastomeres", "Uterus", "Uterine destination in the NCERT comparison"], ["GIFT", "Gametes; an ovum in the NCERT example", "Fallopian tube", "Does not transfer an already formed embryo"], ["ICSI", "A sperm introduced into an ovum", "Laboratory procedure", "Describes sperm introduction, not embryo transfer"]],
  },
  "molecular-basis-of-inheritance": {
    heading: "DNA information: object, action and result",
    intro: "Use the action to distinguish a DNA structure question from a copying or expression question.",
    columns: ["Object or action", "What changes", "What remains the key idea", "Common mix-up"],
    rows: [["Nucleotide", "Bases occur in a sequence on a sugar-phosphate backbone", "Base sequence carries information", "Calling a base alone a nucleotide"], ["Packaging", "DNA associates with histones and folds into higher organisation", "DNA is organised to fit in the nucleus", "Saying new DNA copies are produced"], ["Replication", "Each template strand guides a complementary new strand", "Each product has one parental and one new strand", "Calling both product strands newly made"], ["Gene expression", "DNA information is used through RNA and protein synthesis", "Information is read for a product", "Treating it as another name for replication"]],
  },
  "evolution-and-natural-selection": {
    heading: "Population change: mechanism, evidence and wrong shortcut",
    intro: "Use the cause of the allele-frequency change to separate selection from chance and movement between populations.",
    columns: ["Mechanism", "What shifts", "Key condition", "Wrong shortcut"],
    rows: [["Natural selection", "Frequency of heritable variants", "Variants differ in reproductive success in a stated environment", "Calling every surviving individual an adaptation"], ["Genetic drift", "Allele frequencies by chance", "Sampling effects, often stronger in small populations", "Assuming an advantage is required"], ["Gene flow", "Alleles enter or leave a population", "Individuals or gametes move between populations", "Calling it a mutation"], ["Mutation", "DNA sequence can create a new allele", "A sequence change occurs", "Treating every mutation as automatically advantageous"]],
  },
  "organisms-and-populations": {
    heading: "Population growth: start with the resource assumption",
    intro: "The curve is an output of assumptions about resources and environmental limits, not merely a shape to memorise.",
    columns: ["Model or measure", "Main assumption", "What the pattern shows", "Do not confuse with"],
    rows: [["Population density", "Individuals are counted in a stated area or volume", "How crowded a population is in its habitat", "The size of one organism"], ["Exponential growth", "Resources are effectively unlimited in the model", "J-shaped increase", "A permanent real-world outcome"], ["Logistic growth", "Resources become limiting as population rises", "S-shaped growth toward carrying capacity", "A fixed number unrelated to environment"], ["Carrying capacity (K)", "Habitat resources set a supportable population level", "Environmental limit in the logistic model", "A universal constant for a species"]],
  },
  "ecosystem-energy-flow-and-ecological-pyramids": {
    heading: "Ecological pyramids: choose the quantity before judging the shape",
    intro: "A pyramid's name tells you what is measured. That is the first fact needed to reason about its form.",
    columns: ["Pyramid", "What it represents", "Can it be inverted?", "Decisive check"],
    rows: [["Number", "Number of individuals at trophic levels", "It can vary with the organisms involved", "Count organisms, not their mass or energy"], ["Biomass", "Standing living material at a stated time", "Yes, including some aquatic systems", "A snapshot of phytoplankton can be small despite rapid turnover"], ["Energy", "Rate of usable energy transfer through trophic levels", "No", "Energy is lost at every transfer, so the next level receives less"], ["Productivity", "Organic material formed per unit area per unit time", "Not a standing crop", "Look for a time unit before calling it biomass"]],
  },
  "mitosis-and-meiosis": {
    heading: "Mitosis and meiosis: identify what separates",
    intro: "The dependable comparison is not just the number of cells at the end. Follow which chromosome partners separate at each division.",
    columns: ["Checkpoint", "Mitosis", "Meiosis I", "Meiosis II"],
    rows: [["Main separating units", "Sister chromatids", "Homologous chromosomes", "Sister chromatids"], ["Chromosome-number effect", "Maintained in daughter cells", "Reduced by half", "Remains haploid"], ["DNA replication before it", "One S phase before mitosis", "One S phase before meiosis I", "No new S phase before meiosis II"], ["High-yield purpose", "Growth, repair and replacement", "Reduction and genetic recombination context", "Completes formation of four haploid cells"]],
  },
  "photosynthesis-in-higher-plants": {
    heading: "Photosynthesis: location and output check",
    intro: "Use the compartment first. It is the quickest way to reject a true fact placed in the wrong part of the chloroplast.",
    columns: ["Process", "Main location", "What it provides", "Common mix-up"],
    rows: [["Light reactions", "Thylakoid membranes", "ATP, NADPH and released oxygen", "Placed in the stroma"], ["Calvin cycle", "Stroma", "Carbon fixation and carbohydrate formation", "Called a darkness-only process"], ["C3 pathway", "Mesophyll cells", "Initial carbon fixation and Calvin cycle", "Confused with the C4 location split"], ["C4 pathway", "Mesophyll then bundle-sheath cells", "Initial four-carbon fixation then Calvin cycle", "Said to remove all photorespiration"]],
  },
  "plant-respiration": {
    heading: "Respiration route: locate the stage before naming it",
    intro: "The most reliable distinction is glucose to pyruvate first, followed by a branch that depends on oxygen availability.",
    columns: ["Stage", "Location", "Main outcome", "Common mix-up"],
    rows: [["Glycolysis", "Cytoplasm", "Glucose to pyruvate", "Placed entirely in mitochondria"], ["Aerobic route", "Mitochondria after glycolysis", "More complete oxidation and greater energy capture", "Treated as fermentation"], ["Alcoholic fermentation", "Cytoplasm", "Ethanol and carbon dioxide from pyruvate", "Called complete oxidation"], ["Respiratory quotient", "Gas-exchange measurement", "CO2 released divided by O2 consumed", "Used as the pathway itself"]],
  },
  "digestion-and-absorption": {
    heading: "Digestion and absorption: keep the action separate",
    intro: "A nutrient can be chemically digested without yet being absorbed. This table keeps the route and outcome visible.",
    columns: ["Material or stage", "Main action", "Result", "Common mix-up"],
    rows: [["Carbohydrate", "Enzymatic digestion", "Simple sugars", "Named as amino acids"], ["Protein", "Enzymatic digestion", "Amino acids", "Said to enter a lacteal as the main route"], ["Fat and bile", "Emulsification then enzyme action", "Absorbable lipid products", "Bile called an enzyme"], ["Small intestine", "Absorption across villi", "Nutrients enter blood or lacteal routes", "Confused with the stomach"]],
  },
  "blood-and-circulation": {
    heading: "Circulation: follow the direction, then the oxygen state",
    intro: "Vessel names are defined by their direction relative to the heart. Add oxygen content only after that first check.",
    columns: ["Part", "Direction or role", "High-yield fact", "Common mix-up"],
    rows: [["Artery", "Away from the heart", "Pulmonary artery carries deoxygenated blood", "Defined as always oxygenated"], ["Vein", "Toward the heart", "Pulmonary veins carry oxygenated blood", "Defined as always deoxygenated"], ["Right ventricle", "To pulmonary artery and lungs", "Begins the pulmonary outflow", "Paired with the aorta"], ["Left ventricle", "To aorta and body", "Begins systemic outflow", "Confused with right-side circulation"]],
  },
  "dna-rna-replication-transcription-translation": {
    heading: "DNA, RNA, transcription and translation: keep the jobs separate",
    intro: "Most mistakes in this chapter come from choosing a correct word for the wrong job. Use this table before a recall check.",
    columns: ["Term", "Main job", "Place to watch", "Common wrong swap"],
    rows: [
      ["DNA", "Stores genetic information", "Nucleus in eukaryotes", "Treated as the molecule being translated directly"],
      ["RNA", "Carries or helps use genetic information", "Nucleus and cytoplasm", "Confused with DNA because both are nucleic acids"],
      ["Transcription", "Makes RNA from a DNA template", "Mostly nucleus in eukaryotes", "Mixed with translation"],
      ["Translation", "Makes a polypeptide from mRNA information", "Ribosomes", "Placed in the nucleus without checking the process"],
    ],
  },
  "immunity-pathogens-vaccines": {
    heading: "Innate, acquired, active and passive immunity in one view",
    intro: "The words sound familiar, which is exactly why they become dangerous in close options.",
    columns: ["Type", "Speed", "Specificity", "Memory"],
    rows: [
      ["Innate immunity", "Fast", "Broad, non-specific", "No antigen-specific memory"],
      ["Acquired immunity", "Slower first response", "Antigen-specific", "Memory develops"],
      ["Active immunity", "Develops after antigen exposure", "Specific", "Usually long-lasting"],
      ["Passive immunity", "Immediate", "Depends on received antibodies", "No strong long-term memory"],
    ],
  },
  "cell-theory-and-cell-organelles": {
    heading: "Organelle trap table",
    intro: "Do not memorise organelles as a parade of names. Pair each one with the job NEET usually tests.",
    columns: ["Structure", "High-yield function", "Do not confuse with", "Quick check"],
    rows: [
      ["Ribosome", "Protein synthesis", "Golgi apparatus", "Makes polypeptide, does not package it"],
      ["Mitochondrion", "ATP production in aerobic respiration", "Chloroplast", "Energy release, not photosynthesis"],
      ["Golgi apparatus", "Modification and packaging", "Ribosome", "Handles products after synthesis"],
      ["Lysosome", "Intracellular digestion", "Vacuole", "Breakdown, not general storage"],
    ],
  },
  "endocrine-system-and-hormones": {
    heading: "Endocrine quick-reference table: source, action and mix-up",
    intro: "Read each row across. Most close endocrine options keep three facts correct and swap the remaining source, action, or control relationship.",
    columns: ["Source", "Hormone or signal", "NEET-level action", "Quick distinction"],
    rows: [
      ["Hypothalamus", "Regulatory hormones; synthesises ADH and oxytocin", "Links neural input with endocrine control", "The posterior pituitary releases ADH and oxytocin but does not synthesise them"],
      ["Anterior pituitary", "TSH", "Stimulates thyroid activity", "TSH is a tropic signal; it is not thyroid hormone"],
      ["Posterior pituitary", "ADH", "Increases water reabsorption when conservation is needed", "ADH is not a blood-glucose hormone and is distinct from oxytocin"],
      ["Thyroid", "Thyroxine", "Supports metabolic regulation and normal development", "Do not give thyroxine the calcium-regulation role of calcitonin"],
      ["Parathyroid glands", "Parathyroid hormone", "Raises blood calcium in the relevant physiological context", "Parathyroid glands are not the thyroid; PTH and calcitonin act in opposing directions"],
      ["Pancreatic beta cells", "Insulin", "Helps lower blood glucose through uptake and storage", "The direction is opposite to glucagon"],
      ["Pancreatic alpha cells", "Glucagon", "Raises blood glucose by mobilising stored reserves", "Glucagon is not released to lower blood glucose"],
      ["Adrenal medulla", "Adrenaline", "Supports a rapid emergency response", "Do not confuse medullary adrenaline with steroid hormones of the adrenal cortex"],
      ["Gonads", "Sex hormones", "Support reproductive functions and participate in feedback relationships", "Separate a gonadal hormone from pituitary gonadotropins such as FSH and LH"],
    ],
  },
  "human-respiration": {
    heading: "Respiration stages that should not be mixed",
    intro: "A respiration option may be true but still belong to the wrong stage. That is the trap.",
    columns: ["Stage", "What happens", "Direction clue", "Common mix-up"],
    rows: [
      ["Ventilation", "Air moves in and out", "Atmosphere to alveoli and back", "Called gas exchange"],
      ["External respiration", "Gas exchange at alveoli", "Oxygen into blood, CO2 out", "Mixed with tissue exchange"],
      ["Transport", "Blood carries gases", "Haemoglobin and bicarbonate matter", "Confused with diffusion itself"],
      ["Internal respiration", "Exchange at tissues", "Oxygen leaves blood", "Mixed with cellular respiration wording"],
    ],
  },
  "excretion-and-kidney-function": {
    heading: "Nephron direction table",
    intro: "Kidney questions become easier when every word has a direction.",
    columns: ["Process", "Direction", "Main site or idea", "Wrong turn"],
    rows: [
      ["Filtration", "Blood to Bowman's capsule", "Glomerulus", "Confused with reabsorption"],
      ["Reabsorption", "Tubule to blood", "Useful substances return", "Read as removal from body"],
      ["Secretion", "Blood to tubule", "Selected substances added to filtrate", "Treated as filtration"],
      ["Excretion", "Final urine leaves body", "End result", "Used for every earlier step"],
    ],
  },
  "neuron-nerve-impulse-synapse": {
    heading: "Nerve signal route table",
    intro: "This chapter is a route map. If the route is clear, the vocabulary becomes much less scary.",
    columns: ["Part", "Role", "Direction", "Common mistake"],
    rows: [
      ["Dendrite", "Receives signal", "Toward cell body", "Swapped with axon"],
      ["Axon", "Conducts impulse", "Away from cell body", "Treated as receptor"],
      ["Synapse", "Passes signal to next cell", "Presynaptic to postsynaptic", "Called a direct wire"],
      ["Effector", "Produces response", "After motor neuron", "Confused with receptor"],
    ],
  },
  "mutation-and-gene-expression": {
    heading: "Mutation versus regulation",
    intro: "The cleanest split: mutation changes information; regulation changes how information is used.",
    columns: ["Idea", "What changes", "Possible result", "Exam trap"],
    rows: [
      ["Mutation", "DNA sequence or chromosome structure/number", "Protein, regulation, or no visible effect", "Assumed always harmful"],
      ["Gene expression", "Use of DNA information", "RNA or functional product", "Confused with mutation"],
      ["Substitution", "One base pair", "May or may not alter amino acid", "Treated as frameshift every time"],
      ["Insertion/deletion", "Added or removed bases", "Can shift reading frame", "Ignored after the first codon"],
    ],
  },
};

const noteEditorialBlocks: Record<string, NoteEditorialBlock> = {
  "chromosomal-basis-of-inheritance": {
    heading: "The chromosome drawing should answer the ratio question",
    paragraphs: ["When a genetics ratio feels mysterious, move one level down from letters to chromosomes. If the genes are on different chromosome pairs, independent orientation makes the combinations easier to justify. If they occupy the same chromosome, start from parental arrangements and then ask whether a crossover can intervene.", "This avoids a tempting shortcut: treating every two-gene problem as an automatic 9:3:3:1 problem. A familiar ratio is not evidence that the chromosome arrangement supports it."],
  },
  "sexual-reproduction-in-flowering-plants": {
    heading: "Two sperm does not mean two embryos",
    paragraphs: ["The two male gametes enter the same embryo sac, which can make the outcomes look symmetrical. They are not. One fusion initiates the embryo through the zygote; the other produces the endosperm-forming nucleus that supports development.", "When a label looks familiar, make it earn its place by naming both the fusion partners and the product. That simple check prevents zygote and endosperm from being swapped."],
  },
  "mendelian-inheritance": {
    heading: "Ratios are outputs, not starting facts",
    paragraphs: ["A 3:1 phenotype ratio is useful only after the parent genotypes and dominance condition have been stated. Starting with the ratio makes it easy to carry it into incomplete dominance, codominance, or a different parental cross where it does not belong.", "The steadier habit is to write gametes first. The rest of the cross then has a visible reason instead of relying on a remembered pattern."],
  },
  "recombinant-dna-technology": {
    heading: "One verb per tool keeps the workflow honest",
    paragraphs: ["Restriction endonuclease cuts. Ligase joins. A vector carries. A host cell receives and copies. Selection identifies useful cells. When an option gives one of these components a neighbour's action, the error is easier to see than if the tools are memorised as a list.", "The workflow also protects against a common overstatement: a cell that has received DNA has not necessarily been shown to carry the intended construct. That is why selection and screening have their own place."],
  },
  "pedigree-analysis-and-inheritance-patterns": {
    heading: "A pedigree is a hypothesis test, not a symbol-matching game",
    paragraphs: ["A family diagram can look decisive before it has been read carefully. The steadier approach is to write down an observation, ask which simple models conflict with it, and only then attach letters for possible genotypes.", "That order matters because the same shaded symbol can occur in more than one inheritance model. A conclusion becomes stronger when it accounts for partners, siblings and generations together rather than relying on one person in the diagram."],
  },
  "molecular-tools-and-dna-analysis": {
    heading: "Do not let three laboratory verbs collapse into one",
    paragraphs: ["Cutting, copying and separating can happen in the same broader investigation, but each answers a different question. A restriction enzyme changes a DNA molecule at a recognition sequence; PCR raises the number of copies of a selected region; an electric field separates fragments in a gel.", "When an option combines a correct tool with the wrong outcome, return to the sample. Did it become fragments, many copies, or visible bands? That single check usually restores the method."],
  },
  "biotechnology-applications": {
    heading: "A useful application includes a purpose and a responsibility question",
    paragraphs: ["It is tempting to learn biotechnology applications as a celebratory list of products. The chapter is stronger than that: it also asks what trait or product is intended, what biological system is involved, and why evaluation or ownership questions may arise.", "Keeping those parts together prevents two opposite mistakes: treating every application as risk-free, or treating a responsible-use question as proof that the biological method has not been defined. In revision, name the application first, then its boundary."],
  },
  "human-reproduction": {
    heading: "A route is more useful than a crowded anatomical drawing",
    paragraphs: ["The most common sequence error is to group fertilisation, cleavage and implantation under the uterus because the later stages occur there. Keeping the oviduct-to-uterus transition visible makes the stages easier to place.", "Use the route to test every unfamiliar word: does it name a cell, a developmental stage, a place or an exchange structure? Those categories cannot occupy the same position in the sequence."],
  },
  "reproductive-health": {
    heading: "Accuracy includes knowing when a revision note stops",
    paragraphs: ["This chapter contains terms that overlap with real healthcare, but the NEET task is to understand concepts and prevention principles, not to turn a textbook page into clinical guidance. That distinction protects both factual precision and the reader.", "When a statement sounds like it wants a personal decision, it has left the scope of a revision guide. In the chapter, focus on the biology category and the public-health purpose described by NCERT."],
  },
  "molecular-basis-of-inheritance": {
    heading: "A DNA copy is not just another chromosome label",
    paragraphs: ["DNA, gene, chromosome, chromatin and nucleosome belong to the same information system but name different scales or states. The words become manageable when each one answers a different question: what is the molecule, what is the segment, and how is it organised?", "Replication adds a second question: how can sequence information be copied accurately? Complementary pairing and the semiconservative model provide the connection, while packaging explains where the long molecule fits."],
  },
  "evolution-and-natural-selection": {
    heading: "Do not make an individual evolve inside the diagram",
    paragraphs: ["Natural selection can look like a story about one organism changing to meet a challenge. The crucial scientific step is different: heritable variation already exists, and the relative contribution of variants to the next generation differs.", "A clear answer always includes the generation boundary. It explains why a trait can become more common in a population without claiming that every individual changes in the same direction."],
  },
  "organisms-and-populations": {
    heading: "A curve without a habitat is only half an explanation",
    paragraphs: ["A J curve or S curve becomes useful only after its resource assumption is stated. The models are tools for relating a changing population to the conditions in its habitat, not labels that replace ecological reasoning.", "The most important boundary is that K belongs to an environment at a time. A shift in water, food, space, disease pressure or another ecological factor can change the supportable population level."],
  },
  "ecosystem-energy-flow-and-ecological-pyramids": {
    heading: "What the simplified drawing leaves out",
    paragraphs: ["Decomposers receive dead material and wastes from producers and consumers at every trophic level. The bird-to-decomposer arrow in this drawing represents just one possible input; decomposers are not a single final trophic level above all predators.", "To extend the drawing, add arrows from grass and herbivores into the detritus pool. A fallen leaf can enter that pool without first being eaten. The grazing and detritus pathways are therefore connected routes, not a compulsory sequence through every box."],
  },
  "mitosis-and-meiosis": {
    heading: "Count chromosomes by centromeres, not by DNA copies",
    paragraphs: ["After S phase, DNA content has doubled, but chromosome number has not doubled because each replicated chromosome still has one centromere. This is why a 2n cell remains 2n after replication even though each chromosome has two sister chromatids.", "When a question feels crowded, first ask whether it is counting chromosomes, chromatids, DNA content, or cells. Those are related measurements, not interchangeable ones."],
  },
  "photosynthesis-in-higher-plants": {
    heading: "The PSII-before-PSI trap",
    paragraphs: ["The numbering is the trap. Photosystem II acts first in non-cyclic flow even though II looks as though it should come after I. Write the route once and the question loses its shortcut.", "A second check is to ask where oxygen comes from. In this chapter it is linked with water splitting, not with carbon dioxide entering the leaf."],
  },
  "plant-respiration": {
    heading: "Do not let a green leaf hide respiration",
    paragraphs: ["A leaf in daylight can photosynthesise and respire at the same time. One process stores energy in organic molecules; the other releases usable energy from them.", "When an option says respiration happens only in darkness, return to the word cellular. Living cells need energy in light as well as dark."],
  },
  "digestion-and-absorption": {
    heading: "Emulsification changes droplets; hydrolysis changes molecules",
    paragraphs: ["Imagine dividing one large fat droplet into many smaller droplets while keeping the total amount of fat the same. More surface becomes accessible to lipase, but the triglyceride molecules have not yet been chemically cleaved. Bile salts help make that surface available.", "Lipase then catalyses hydrolysis of chemical bonds. Naming the physical change and the chemical change separately explains how bile assists an enzyme without being an enzyme itself."],
  },
  "blood-and-circulation": {
    heading: "Name the direction before the colour",
    paragraphs: ["The shortcut 'artery means oxygenated' fails as soon as pulmonary circulation appears. An artery takes blood away from the heart; a vein returns it.", "Once the direction is secure, oxygenation becomes a second fact to add, not the definition that can mislead the whole route."],
  },
  "dna-rna-replication-transcription-translation": {
    heading: "The recipe-book shortcut",
    paragraphs: [
      "Think of DNA as a thick recipe book kept in a protected place. Transcription is not cooking the dish; it is copying one recipe onto a working note. Translation is where that working note is read to build the protein.",
      "That small story helps because the exam likes to blur the stages. If the option says protein is made directly from DNA, slow down. Something has been skipped.",
    ],
    bullets: ["Copying the recipe: transcription.", "Cooking from the copied note: translation.", "Copying the whole book before division: replication."],
  },
  "immunity-pathogens-vaccines": {
    heading: "The mistake hidden in fast responses",
    paragraphs: [
      "Fast does not automatically mean acquired. This is a very common student-style slip: a response acts quickly, so it gets labelled as specific immunity. In reality, innate immunity is fast precisely because it is already broadly available.",
      "When a question mentions memory cells, vaccination, antibodies after exposure, or a second response, then acquired immunity becomes more likely.",
    ],
  },
  "cell-theory-and-cell-organelles": {
    heading: "Do not learn organelles as flashcards only",
    paragraphs: [
      "A flashcard that says 'Golgi apparatus: packaging' is useful for ten seconds. A better note asks what happened before packaging and where the product might go after it.",
      "That is why the protein route matters: nucleus gives information, ribosome builds, rough ER and Golgi handle processing and movement. The route is easier to remember than four isolated labels.",
    ],
  },
  "endocrine-system-and-hormones": {
    heading: "The three-column rule for hormone questions",
    paragraphs: [
      "In close endocrine options, a real hormone is often paired with the wrong gland or the wrong effect. That is why the three-column rule matters.",
      "For every hormone, force yourself to fill three columns: source, target, effect. If one column is missing, the answer looks right but is wrong. This is especially useful for pituitary questions because the pituitary sits inside several control lines.",
      "A neat example is ADH and oxytocin. Both are released from the posterior pituitary, but they do completely different jobs. The posterior pituitary stores and releases them; it does not make them. They are synthesised in the hypothalamus.",
    ],
  },
  "human-respiration": {
    heading: "Air movement is not the same as gas exchange",
    paragraphs: [
      "A neat way to catch respiration errors is to ask: are we moving air, moving gases across a membrane, or moving gases in blood? Those are three different jobs.",
      "The option may use a beautiful word like haemoglobin or bicarbonate. That does not make it right if the question was only about inspiration and pressure change.",
    ],
  },
  "excretion-and-kidney-function": {
    heading: "Put arrows on every kidney fact",
    paragraphs: [
      "Kidney revision gets much cleaner when every process has an arrow. Filtration points from blood to capsule. Reabsorption points back to blood. Secretion points from blood into the tubule.",
      "If you cannot draw the arrow, you probably do not own the concept yet. That is the moment to return to the nephron diagram instead of memorising another list blindly.",
    ],
  },
  "neuron-nerve-impulse-synapse": {
    heading: "The route is the memory aid",
    paragraphs: [
      "Neuron vocabulary looks heavy until you treat it as a journey. Signal arrives, moves along the neuron, crosses a synapse, and produces a response.",
      "Once the journey is fixed, dendrite and axon stop being random names. One receives; the other carries away.",
    ],
  },
  "mutation-and-gene-expression": {
    heading: "Mutation is not a synonym for disease",
    paragraphs: [
      "A mutation can be harmful, neutral, or occasionally useful. The exam may quietly test this by offering a dramatic option that says every mutation causes disease.",
      "The safer habit is to ask what level changed: a base, a reading frame, a chromosome segment, or chromosome number. The effect depends on that level and context.",
    ],
  },
};

export function buildFallbackNoteContent(topicName: string, ncertRef: string, focus: string[], traps: string[]): NoteSection[] {
  const primaryFocus = focus[0] || `Core NCERT ideas in ${topicName}.`;
  const mainTrap = traps[0] || "Choosing a familiar keyword before checking the full statement.";
  return [
    {
      heading: `${topicName}: what to revise first`,
      paragraphs: [
        `Start this ${topicName} revision from the NCERT line of thought rather than from isolated answer keys. The useful exam pattern is usually a relationship: a term is connected to a process, a structure is connected to a function, or an example is connected to a category. ${ncertRef} should be the anchor before any extra coaching notes are added.`,
        `For NEET-UG Biology, ${primaryFocus.toLowerCase()} Treat this as the first filter while reading options. If an option sounds correct but belongs to a different chapter, process, or example set, it is likely a distractor rather than the answer.`,
      ],
    },
    {
      heading: "Build the chapter as a small map",
      paragraphs: [
        `Write ${topicName} in the centre of a page and branch it into definitions, examples, mechanisms, and exceptions. Then add one NCERT phrase beside each branch. This makes the revision active and prevents the chapter from becoming a long list of disconnected words.`,
        "When the page is ready, cover the textbook and rebuild the map from memory. The aim is not artistic neatness. The aim is to notice which links disappear when you stop looking at the printed paragraph.",
      ],
      bullets: [
        "Definition: the exact NCERT meaning or boundary of the term.",
        "Example: the named organism, structure, hormone, molecule, or condition attached to the concept.",
        "Process: the sequence of events or cause-effect relationship.",
        "Exception: the fact that is easy to overgeneralise during MCQ practice.",
      ],
    },
    {
      heading: "How NEET options usually try to confuse this topic",
      paragraphs: [
        `The most common mistake is ${mainTrap.toLowerCase()} A strong revision note should therefore include the wrong option logic, not only the final correct answer.`,
        `While practising ${topicName} MCQs, pause after each wrong answer and ask what made it attractive. Was it a similar term, a reversed sequence, a wrong example, or an NCERT fact from a neighbouring chapter? That label is more useful than simply writing the answer letter again.`,
      ],
    },
    {
      heading: "A 20-minute revision routine",
      paragraphs: [
        `Use the first five minutes to read the NCERT subsection linked with ${topicName}. Use the next seven minutes to recreate the map from memory. Use the next five minutes for three to five MCQs, and spend the final three minutes rewriting every mistake as a one-line correction.`,
        "Repeat the same routine after a day, then after a week. The second attempt should be faster because the map is already familiar; the value comes from checking whether the same confusion returns.",
      ],
    },
  ];
}

export function getNoteContent(slug: string, topicName?: string, ncertRef?: string, focus: string[] = [], traps: string[] = []) {
  if (noteContent[slug]) return noteContent[slug];
  if (!topicName || !ncertRef) return null;
  return buildFallbackNoteContent(topicName, ncertRef, focus, traps);
}

export function getNoteReferences(slug: string) {
  return noteReferences[slug] || defaultReferences;
}

export function getNoteComparisonTable(slug: string, topicName: string): NoteComparisonTable {
  return noteTables[slug] || {
    heading: `${topicName}: quick comparison table`,
    intro: "Use this table to separate the concept from nearby distractors before starting MCQs.",
    columns: ["Checkpoint", "What to remember", "Common distractor", "Revision action"],
    rows: [
      ["Definition", "Use the NCERT boundary of the term", "A nearby term with similar wording", "Write the definition in one line"],
      ["Example", "Attach the correct example to the concept", "Correct example from another chapter", "List one NCERT example"],
      ["Process", "Keep the sequence in order", "Reversed cause and effect", "Draw arrows before answering"],
      ["Exception", "Watch for overgeneralised statements", "A statement that sounds broad and confident", "Mark exact wording"],
    ],
  };
}

export function getNoteEditorialBlock(slug: string, topicName: string): NoteEditorialBlock {
  return noteEditorialBlocks[slug] || {
    heading: "A small exam-room trap",
    paragraphs: [
      `${topicName} questions often look easier than they are because the options reuse familiar words. Familiar is not the same as correct.`,
      "Before choosing an answer, match the option back to the exact NCERT idea being tested. That extra pause is usually where careless errors disappear.",
    ],
  };
}
