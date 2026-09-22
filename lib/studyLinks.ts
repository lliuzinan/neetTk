type StudyLink = { slug: string; reason: string };

export const studyLinks: Record<string, StudyLink[]> = {
  "five-kingdom-classification": [
    { slug: "plant-kingdom", reason: "Apply kingdom-level criteria before comparing the major plant groups in more detail." },
    { slug: "cell-theory-and-cell-organelles", reason: "Review the structural boundary between prokaryotic and eukaryotic cells." },
    { slug: "morphology-of-flowering-plants", reason: "Continue from Plantae as a kingdom to the external organisation of flowering plants." },
  ],
  "plant-kingdom": [
    { slug: "five-kingdom-classification", reason: "Revisit why Plantae is separated from fungi, protists and photosynthetic prokaryotes." },
    { slug: "morphology-of-flowering-plants", reason: "Move from plant-group boundaries to the diagnostic organs of flowering plants." },
    { slug: "sexual-reproduction-in-flowering-plants", reason: "Continue from enclosed ovules and double fertilisation to the complete reproductive sequence." },
  ],
  "digestion-and-absorption": [
    { slug: "blood-and-circulation", reason: "Follow absorbed nutrients from intestinal vessels into the circulation." },
    { slug: "cell-theory-and-cell-organelles", reason: "Connect an absorptive cell's membrane and internal machinery with nutrient transport." },
  ],
  "mendelian-inheritance": [
    { slug: "chromosomal-basis-of-inheritance", reason: "Connect segregation of alleles with the movement of homologous chromosomes." },
    { slug: "pedigree-analysis-and-inheritance-patterns", reason: "Apply inheritance rules when the evidence is a family tree." },
  ],
  "chromosomal-basis-of-inheritance": [
    { slug: "mendelian-inheritance", reason: "Revisit the probability rules before explaining their chromosome basis." },
    { slug: "pedigree-analysis-and-inheritance-patterns", reason: "Distinguish autosomal and sex-linked patterns in families." },
    { slug: "mitosis-and-meiosis", reason: "Locate the cell divisions that separate homologues and chromatids." },
  ],
  "pedigree-analysis-and-inheritance-patterns": [
    { slug: "mendelian-inheritance", reason: "Use allele notation to test possible parental genotypes." },
    { slug: "chromosomal-basis-of-inheritance", reason: "Explain why sex chromosomes change transmission patterns." },
  ],
  "recombinant-dna-technology": [
    { slug: "molecular-tools-and-dna-analysis", reason: "Match restriction enzymes, ligase and PCR to specific steps in the workflow." },
    { slug: "biotechnology-applications", reason: "Follow a laboratory method through to its biological purpose." },
  ],
  "molecular-tools-and-dna-analysis": [
    { slug: "recombinant-dna-technology", reason: "Place each tool in the sequence from DNA isolation to expression." },
    { slug: "biotechnology-applications", reason: "See how amplification and gene transfer support different applications." },
    { slug: "molecular-basis-of-inheritance", reason: "Review complementary strands and template copying before studying PCR." },
  ],
  "biotechnology-applications": [
    { slug: "recombinant-dna-technology", reason: "Trace how a desired gene can be introduced into a host." },
    { slug: "molecular-tools-and-dna-analysis", reason: "Separate DNA detection, amplification and joining tools." },
  ],
  "sexual-reproduction-in-flowering-plants": [
    { slug: "morphology-of-flowering-plants", reason: "Review floral whorls, ovary position, fruit and seed landmarks before tracing reproductive events." },
    { slug: "human-reproduction", reason: "Compare gamete formation and fertilisation while keeping double fertilisation specific to flowering plants." },
    { slug: "mitosis-and-meiosis", reason: "Track chromosome reduction and subsequent mitotic divisions." },
  ],
  "morphology-of-flowering-plants": [
    { slug: "plant-kingdom", reason: "Place flowering-plant organs within the broader transition from spore-bearing groups to seed plants." },
    { slug: "anatomy-of-flowering-plants", reason: "Move from external organ landmarks to the tissue arrangements visible in transverse sections." },
    { slug: "sexual-reproduction-in-flowering-plants", reason: "Continue from floral whorls and ovules to pollination, double fertilisation and seed formation." },
    { slug: "photosynthesis-in-higher-plants", reason: "Connect leaf form and venation with the physiology carried out inside the leaf." },
  ],
  "anatomy-of-flowering-plants": [
    { slug: "morphology-of-flowering-plants", reason: "Use nodes, buds, roots and leaves to identify the organ before reading its internal section." },
    { slug: "photosynthesis-in-higher-plants", reason: "Connect mesophyll and vascular orientation with chloroplast function and carbon fixation." },
    { slug: "sexual-reproduction-in-flowering-plants", reason: "Shift from vegetative tissue organisation to the specialised structures of the flower." },
  ],
  "human-reproduction": [
    { slug: "endocrine-system-and-hormones", reason: "Review pituitary signals before tracing FSH, LH and ovarian hormones." },
    { slug: "mitosis-and-meiosis", reason: "Distinguish meiotic gamete formation from mitotic cleavage." },
    { slug: "reproductive-health", reason: "Use the normal reproductive sequence to understand contraception and assisted reproduction terminology." },
  ],
  "reproductive-health": [
    { slug: "human-reproduction", reason: "Locate fertilisation and implantation before comparing reproductive technologies." },
    { slug: "immunity-pathogens-vaccines", reason: "Separate infection, transmission and immune protection." },
  ],
  "molecular-basis-of-inheritance": [
    { slug: "dna-rna-replication-transcription-translation", reason: "Continue from DNA evidence and copying to transcription and translation." },
    { slug: "mutation-and-gene-expression", reason: "Follow what can happen when a DNA sequence or its regulation changes." },
    { slug: "molecular-tools-and-dna-analysis", reason: "Apply strand complementarity to laboratory amplification and analysis." },
  ],
  "evolution-and-natural-selection": [
    { slug: "mendelian-inheritance", reason: "Review how alleles are passed on before counting them across generations." },
    { slug: "mutation-and-gene-expression", reason: "Separate the origin of a new variant from its later selection." },
    { slug: "organisms-and-populations", reason: "Connect environmental interactions with survival and reproductive success." },
  ],
  "organisms-and-populations": [
    { slug: "evolution-and-natural-selection", reason: "Distinguish a change in population size from a change in allele frequency." },
    { slug: "photosynthesis-in-higher-plants", reason: "Connect light availability with the physiology of primary producers." },
    { slug: "ecosystem-energy-flow-and-ecological-pyramids", reason: "Move from population counts to trophic roles and resource transfer in an ecosystem." },
  ],
  "ecosystem-energy-flow-and-ecological-pyramids": [
    { slug: "photosynthesis-in-higher-plants", reason: "Start with how producers capture light energy before tracing transfers through trophic levels." },
    { slug: "plant-respiration", reason: "Compare energy captured by producers with the cellular release of stored chemical energy." },
    { slug: "organisms-and-populations", reason: "Use habitat and population ideas to place trophic roles in an ecological setting." },
  ],
};
