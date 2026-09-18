type StudyLink = { slug: string; reason: string };

export const studyLinks: Record<string, StudyLink[]> = {
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
    { slug: "human-reproduction", reason: "Compare gamete formation and fertilisation while keeping double fertilisation specific to flowering plants." },
    { slug: "mitosis-and-meiosis", reason: "Track chromosome reduction and subsequent mitotic divisions." },
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
  ],
};
