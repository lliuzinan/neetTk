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
};

export function getNoteContent(slug: string) {
  return noteContent[slug] || null;
}
