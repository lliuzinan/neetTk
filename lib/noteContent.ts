export type NoteSection = {
  heading: string;
  paragraphs?: string[];
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
        "The quickest way to organise this NEET chapter is to make a three-part map for every hormone: the gland or tissue that releases it, its major target, and its principal effect. This prevents a common error in which a correct hormone is paired with the wrong gland or an effect belonging to another regulatory system.",
        "Endocrine glands release hormones into blood, so their effects may reach distant target tissues. A target cell responds only when it has the appropriate receptor. Do not treat every circulating hormone as if it acts equally on every cell in the body.",
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
        "Use the direction of the loop, not a memorised phrase. Ask what increases first, what hormone responds, and what change feeds back to the control centre. Positive feedback is an exception used in specific physiological situations, so do not label every hormone sequence as positive feedback.",
      ],
    },
    {
      heading: "Thyroid, pancreas and adrenal connections",
      paragraphs: [
        "Thyroid hormones are associated with basal metabolic activity and normal development. Iodine availability is an important NCERT connection because it is required for thyroid hormone synthesis. In close options, separate thyroid hormones from calcitonin: both are linked with the thyroid gland but do not have the same main role.",
        "The endocrine pancreas helps regulate blood glucose. Insulin lowers blood glucose by supporting uptake and storage processes, whereas glucagon raises it by mobilising stored reserves. The adrenal glands provide another frequent comparison: the medulla is associated with rapid emergency responses, while the cortex releases a different group of steroid hormones.",
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
        "The hypothalamus connects nervous-system input with endocrine control. It releases regulatory signals that influence the anterior pituitary, while the posterior pituitary releases hormones that are made in the hypothalamus and transported to it. This division matters because a hormone may be associated with the pituitary in a diagram without being synthesised there.",
        "The anterior pituitary is linked with several hormones that influence growth, thyroid activity, adrenal cortex activity and gonadal function. The safer revision method is not to memorise a long isolated list. Instead, draw a control line from hypothalamus to pituitary to target gland, then draw the feedback arrow back. This explains why the same system can coordinate several distant organs without every hormone acting on every tissue.",
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
        "Calcium regulation is a useful example of why the source, trigger and effect must be kept together. Calcitonin is associated with the thyroid gland and is linked with reducing blood calcium in the relevant physiological context. Parathyroid hormone is associated with the parathyroid glands and has the opposing regulatory direction. Similar gland names do not mean the hormones do the same job.",
        "Reproductive hormones also work through coordinated relationships rather than one hormone-one-event slogans. Gonadotropins influence gonadal activity, while gonadal hormones contribute to reproductive function and feedback regulation. For revision, first decide whether a statement concerns a controlling hormone, a gonadal hormone, or a physical response. This prevents a correct term from being placed at the wrong level of the system.",
      ],
    },
    {
      heading: "A 15-minute revision method",
      paragraphs: [
        "Draw a table with four columns: gland, hormone, target and one effect. Fill it from memory, then compare it with NCERT and correct only the mismatched cells. Next, draw arrows for insulin versus glucagon and for a simple negative-feedback loop involving the hypothalamus, pituitary and target gland.",
        "While checking recall, label each error as a gland mismatch, hormone-effect mismatch, or feedback-direction error. This turns a long list of hormone names into a small set of clear relationships.",
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
};

export function getNoteContent(slug: string) {
  return noteContent[slug] || null;
}
