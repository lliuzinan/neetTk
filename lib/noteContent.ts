export type NoteSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

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
        "When reviewing MCQs, mark whether the mistake came from confusing a cell type, a pathogen, a route of transmission, or a type of immunity. That classification makes the next practice set targeted rather than repetitive.",
      ],
    },
  ],
};

export function getNoteContent(slug: string) {
  return noteContent[slug] || null;
}
