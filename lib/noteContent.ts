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
};

export function getNoteContent(slug: string) {
  return noteContent[slug] || null;
}
