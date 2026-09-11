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
  "photosynthesis-in-higher-plants",
  "plant-respiration",
  "digestion-and-absorption",
  "blood-and-circulation",
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
        "Many water-soluble nutrients enter blood capillaries after absorption. Lipid products follow a different early route through lacteals before reaching the wider circulation. This is a transport distinction, not a claim that every nutrient follows one identical path.",
      ],
    },
    {
      heading: "Secretion and control: keep the job with the organ",
      paragraphs: [
        "The stomach provides an acidic environment and receives gastric secretions; the liver produces bile; the pancreas contributes digestive secretions to the small intestine. The small intestine is where digestion is completed for many nutrients and where absorption is especially important.",
        "When revising a gland, say its product, destination and immediate role. This prevents the shortcut that every digestive secretion comes from the stomach, or that the liver is part of the food passage because it produces bile.",
      ],
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
};

const defaultReferences: NoteReference[] = [
  { label: "NCERT Biology textbooks and official learning resources", href: "https://ncert.nic.in/textbook.php" },
  { label: "Khan Academy Biology library", href: "https://www.khanacademy.org/science/biology" },
];

const noteReferences: Record<string, NoteReference[]> = {
  "photosynthesis-in-higher-plants": [
    { label: "NCERT Class 11 Biology, Chapter 11: Photosynthesis in Higher Plants", href: "https://ncert.nic.in/textbook/pdf/kebo111.pdf" },
    { label: "OpenStax Biology 2e: Overview of photosynthesis", href: "https://openstax.org/books/biology-2e/pages/8-1-overview-of-photosynthesis" },
  ],
  "plant-respiration": [
    { label: "NCERT Class 11 Biology, Chapter 12: Respiration in Plants", href: "https://ncert.nic.in/textbook/pdf/kebo112.pdf" },
    { label: "OpenStax Biology 2e: Glycolysis", href: "https://openstax.org/books/biology-2e/pages/7-2-glycolysis" },
  ],
  "digestion-and-absorption": [
    { label: "NCERT Class 11 Biology, Chapter 16: Digestion and Absorption", href: "https://ncert.nic.in/textbook/pdf/kebo116.pdf" },
    { label: "OpenStax Anatomy and Physiology: Digestive system processes", href: "https://openstax.org/books/anatomy-and-physiology-2e/pages/23-2-digestive-system-processes-and-regulation" },
  ],
  "blood-and-circulation": [
    { label: "NCERT Class 11 Biology, Chapter 18: Body Fluids and Circulation", href: "https://ncert.nic.in/textbook/pdf/kebo118.pdf" },
    { label: "OpenStax Anatomy and Physiology: Blood flow and blood pressure", href: "https://openstax.org/books/anatomy-and-physiology-2e/pages/20-2-blood-flow-blood-pressure-and-resistance" },
  ],
  "human-respiration": [
    { label: "NCERT Biology textbooks and official learning resources", href: "https://ncert.nic.in/textbook.php" },
    { label: "Khan Academy: The respiratory system", href: "https://www.khanacademy.org/science/health-and-medicine/respiratory-system" },
    { label: "NCBI Bookshelf: Respiratory physiology overview", href: "https://www.ncbi.nlm.nih.gov/books/" },
  ],
  "excretion-and-kidney-function": [
    { label: "NCERT Biology textbooks and official learning resources", href: "https://ncert.nic.in/textbook.php" },
    { label: "Khan Academy: Renal system physiology", href: "https://www.khanacademy.org/science/health-and-medicine/renal-system" },
    { label: "NCBI Bookshelf: Kidney physiology references", href: "https://www.ncbi.nlm.nih.gov/books/" },
  ],
  "immunity-pathogens-vaccines": [
    { label: "NCERT Biology textbooks and official learning resources", href: "https://ncert.nic.in/textbook.php" },
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
    { label: "NCERT Biology textbooks and official learning resources", href: "https://ncert.nic.in/textbook.php" },
    { label: "Khan Academy: Nervous system physiology", href: "https://www.khanacademy.org/science/health-and-medicine/nervous-system-and-sensory-infor" },
    { label: "NCBI Bookshelf: Neuroscience and synapse references", href: "https://www.ncbi.nlm.nih.gov/books/" },
  ],
  "dna-rna-replication-transcription-translation": [
    { label: "NCERT Biology textbooks and official learning resources", href: "https://ncert.nic.in/textbook.php" },
    { label: "NCBI Bookshelf: Molecular Biology of the Cell", href: "https://www.ncbi.nlm.nih.gov/books/NBK21054/" },
    { label: "Khan Academy: Central dogma", href: "https://www.khanacademy.org/science/biology/gene-expression-central-dogma" },
  ],
  "cell-theory-and-cell-organelles": [
    { label: "NCERT Biology textbooks and official learning resources", href: "https://ncert.nic.in/textbook.php" },
    { label: "NCBI Bookshelf: Molecular Biology of the Cell", href: "https://www.ncbi.nlm.nih.gov/books/NBK21054/" },
    { label: "Khan Academy: Cell structures", href: "https://www.khanacademy.org/science/biology/structure-of-a-cell" },
  ],
  "mutation-and-gene-expression": [
    { label: "NCERT Biology textbooks and official learning resources", href: "https://ncert.nic.in/textbook.php" },
    { label: "NCBI Bookshelf: Genes and disease references", href: "https://www.ncbi.nlm.nih.gov/books/" },
    { label: "Khan Academy: Gene regulation", href: "https://www.khanacademy.org/science/biology/gene-regulation" },
  ],
};

const noteTables: Record<string, NoteComparisonTable> = {
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
  "photosynthesis-in-higher-plants": {
    heading: "The PSII-before-PSI trap",
    paragraphs: ["The numbering is the trap. Photosystem II acts first in non-cyclic flow even though II looks as though it should come after I. Write the route once and the question loses its shortcut.", "A second check is to ask where oxygen comes from. In this chapter it is linked with water splitting, not with carbon dioxide entering the leaf."],
  },
  "plant-respiration": {
    heading: "Do not let a green leaf hide respiration",
    paragraphs: ["A leaf in daylight can photosynthesise and respire at the same time. One process stores energy in organic molecules; the other releases usable energy from them.", "When an option says respiration happens only in darkness, return to the word cellular. Living cells need energy in light as well as dark."],
  },
  "digestion-and-absorption": {
    heading: "The liver is beside the route, not on it",
    paragraphs: ["Students often draw food moving through the liver because the liver is central to digestion. It is an accessory organ: it contributes bile, while food stays in the alimentary canal.", "That spatial picture also protects the bile distinction. Bile helps emulsify fats; it is not a digestive enzyme."],
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
