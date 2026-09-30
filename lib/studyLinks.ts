type StudyLink = { slug: string; reason: string };

export const studyLinks: Record<string, StudyLink[]> = {
  "c3-c4-pathways-and-photorespiration": [
    { slug: "photosynthesis-in-higher-plants", reason: "Review light reactions and the Calvin-cycle net account before adding a carbon-concentrating route." },
    { slug: "anatomy-of-flowering-plants", reason: "Locate mesophyll and vascular bundle tissues before comparing their specialised roles." },
    { slug: "plant-respiration", reason: "Separate Rubisco oxygenation from mitochondrial energy release and respiratory quotient." },
  ],
  "plant-respiration": [
    { slug: "photosynthesis-in-higher-plants", reason: "Separate carbon fixation from respiratory gas exchange before interpreting a leaf measurement." },
    { slug: "enzymes-and-enzyme-action", reason: "Explain why respiration consists of controlled enzyme reactions rather than direct combustion." },
    { slug: "ecosystem-energy-flow-and-ecological-pyramids", reason: "Connect respiratory energy use with the difference between gross and net primary production." },
  ],
  "photosynthesis-in-higher-plants": [
    { slug: "c3-c4-pathways-and-photorespiration", reason: "Trace the four-carbon shuttle and distinguish carrier recycling from net carbon fixation." },
    { slug: "plant-respiration", reason: "Compare carbon storage with oxidation and distinguish simultaneous gas fluxes in a leaf." },
    { slug: "anatomy-of-flowering-plants", reason: "Locate mesophyll, stomata and vascular tissues around the photosynthetic cells." },
    { slug: "ecosystem-energy-flow-and-ecological-pyramids", reason: "Follow primary production into the ecosystem energy account." },
  ],
  "blood-and-circulation": [
    { slug: "human-respiration", reason: "Place lung gas exchange between the pulmonary artery and pulmonary veins." },
    { slug: "excretion-and-kidney-function", reason: "Follow blood to the kidney and distinguish renal circulation from tubular flow." },
    { slug: "immunity-pathogens-vaccines", reason: "Separate red-cell transport from the immune roles of white cells and antibodies." },
  ],
  "human-respiration": [
    { slug: "blood-and-circulation", reason: "Trace oxygen transport after diffusion across the respiratory membrane." },
    { slug: "plant-respiration", reason: "Distinguish ventilation and gas exchange from cellular substrate oxidation." },
  ],
  "excretion-and-kidney-function": [
    { slug: "blood-and-circulation", reason: "Trace the vascular side of filtration, reabsorption and secretion." },
    { slug: "endocrine-system-and-hormones", reason: "Review ADH signalling before predicting a change in water reabsorption." },
  ],
  "mitosis-and-meiosis": [
    { slug: "chromosomal-basis-of-inheritance", reason: "Connect homologue separation to allele segregation." },
    { slug: "linkage-and-recombination-frequency", reason: "Relate meiotic crossing over to recombinant offspring counts." },
    { slug: "human-reproduction", reason: "Apply chromosome reduction to gamete formation rather than embryonic cleavage." },
  ],
  "dna-rna-replication-transcription-translation": [
    { slug: "genetic-code-and-reading-frames", reason: "Practise codon grouping after checking the RNA sequence and its polarity." },
    { slug: "protein-structure-and-peptide-bonds", reason: "Move from translated residues to peptide bonds and folding." },
    { slug: "molecular-basis-of-inheritance", reason: "Review the experimental evidence for DNA copying and information storage." },
  ],
  "mutation-and-gene-expression": [
    { slug: "genetic-code-and-reading-frames", reason: "Check the specific coding consequence of a substitution or insertion." },
    { slug: "dna-rna-replication-transcription-translation", reason: "Separate changes to a template from the steps that read it." },
    { slug: "evolution-and-natural-selection", reason: "Distinguish the origin of variation from changes in its frequency." },
  ],
  "cell-theory-and-cell-organelles": [
    { slug: "protein-structure-and-peptide-bonds", reason: "Connect ribosomal synthesis with polypeptide structure and folding." },
    { slug: "dna-rna-replication-transcription-translation", reason: "Follow information from a nuclear DNA template to a translated product." },
    { slug: "five-kingdom-classification", reason: "Apply the prokaryotic-eukaryotic distinction to classification." },
  ],
  "endocrine-system-and-hormones": [
    { slug: "excretion-and-kidney-function", reason: "Apply ADH signalling to water movement in the distal nephron." },
    { slug: "human-reproduction", reason: "Trace pituitary and gonadal signals through the reproductive cycle." },
    { slug: "neuron-nerve-impulse-synapse", reason: "Compare endocrine delivery through blood with signalling across a synapse." },
  ],
  "immunity-pathogens-vaccines": [
    { slug: "blood-and-circulation", reason: "Place immune cells and soluble antibodies within the transport system." },
    { slug: "reproductive-health", reason: "Distinguish infection prevention from an immune response after exposure." },
    { slug: "microbes-in-human-welfare", reason: "Contrast pathogenic examples with beneficial microbial roles." },
  ],
  "neuron-nerve-impulse-synapse": [
    { slug: "locomotion-and-movement", reason: "Follow a neural signal into the neuromuscular junction and muscle contraction." },
    { slug: "endocrine-system-and-hormones", reason: "Compare a local synaptic message with a blood-borne hormone signal." },
  ],
  "carbohydrates-proteins-lipids-nucleic-acids": [
    { slug: "protein-structure-and-peptide-bonds", reason: "Continue from amino-acid building blocks to peptide-bond counts and folded protein levels." },
    { slug: "enzymes-and-enzyme-action", reason: "Apply protein folding and active-site ideas to catalysed reaction rates." },
    { slug: "genetic-code-and-reading-frames", reason: "Move from nucleotide building blocks to codons and reading-frame consequences." },
  ],
  "basic-genetic-diseases-as-inheritance-examples": [
    { slug: "mendelian-inheritance", reason: "Rebuild the allele and carrier-cross logic before naming disorder examples." },
    { slug: "pedigree-analysis-and-inheritance-patterns", reason: "Use family evidence to test autosomal and sex-linked inheritance routes." },
    { slug: "sex-determination-systems", reason: "Review X and Y chromosome contribution before reasoning about X-linked examples." },
  ],
  "linkage-and-recombination-frequency": [
    { slug: "chromosomal-basis-of-inheritance", reason: "Locate the homologues and non-sister chromatids behind the testcross counts." },
    { slug: "mendelian-inheritance", reason: "Revisit gamete formation and why the double-recessive tester makes contributions readable." },
    { slug: "mitosis-and-meiosis", reason: "Place crossing over and chromosome separation at their distinct meiotic stages." }
  ],
  "sex-determination-systems": [
    { slug: "pedigree-analysis-and-inheritance-patterns", reason: "Apply the chromosome routes to a separate task: tracking a trait through a family." },
    { slug: "human-reproduction", reason: "Connect the usual human chromosome model with the formation of gametes." },
    { slug: "chromosomal-basis-of-inheritance", reason: "Review how homologous chromosomes separate before reasoning about gamete classes." }
  ],
  "genetic-code-and-reading-frames": [
    { slug: "dna-rna-replication-transcription-translation", reason: "Recover the transcription context before converting template DNA into an RNA sequence." },
    { slug: "mutation-and-gene-expression", reason: "Place sequence edits alongside other changes that affect gene expression." },
    { slug: "protein-structure-and-peptide-bonds", reason: "Continue from residue counting to backbone bonds, folding and subunit organisation." }
  ],
  "living-world-taxonomy-and-hierarchy": [
    { slug: "five-kingdom-classification", reason: "Use diagnostic cell and nutrition characters after learning what a taxonomic category means." },
    { slug: "plant-kingdom", reason: "Apply the hierarchy to plant groups and separate their structural and life-cycle traits." },
    { slug: "biodiversity-and-conservation", reason: "Distinguish species counts from within-species variation when interpreting biodiversity." },
  ],
  "protein-structure-and-peptide-bonds": [
    { slug: "carbohydrates-proteins-lipids-nucleic-acids", reason: "Start with the broader biomolecule classes before counting bonds in one protein chain." },
    { slug: "enzymes-and-enzyme-action", reason: "Connect protein folding with catalytic activity without confusing structure with reaction rate." },
    { slug: "dna-rna-replication-transcription-translation", reason: "Study how a polypeptide sequence is assembled from genetic information." },
    { slug: "cell-theory-and-cell-organelles", reason: "Locate protein synthesis and processing within the cell's compartments." },
  ],
  "decomposition-and-mineralisation": [
    { slug: "ecosystem-energy-flow-and-ecological-pyramids", reason: "Separate material recycling from the one-way energy account of an ecosystem." },
    { slug: "microbes-in-human-welfare", reason: "Compare oxygen-dependent breakdown in litter with microbial activity in treatment systems." },
    { slug: "organisms-and-populations", reason: "Review environmental factors before attributing a decomposition result to one condition." },
  ],
  "animal-kingdom": [
    { slug: "five-kingdom-classification", reason: "Place Animalia within the broader five-kingdom framework before comparing phyla." },
    { slug: "structural-organisation-in-animals", reason: "Move from phylum-level body plans to the tissues and organs that divide work within an animal." },
    { slug: "locomotion-and-movement", reason: "Connect chordate and animal-body organisation with a focused mechanism for skeletal movement." },
  ],
  "structural-organisation-in-animals": [
    { slug: "animal-kingdom", reason: "Use the phylum overview to place tissue-level and organ-system-level organisation in a broader animal comparison." },
    { slug: "cell-theory-and-cell-organelles", reason: "Revisit the boundary between an individual cell and a tissue built from many cells." },
    { slug: "locomotion-and-movement", reason: "Apply muscle-tissue classification to the sliding-filament mechanism and joint movement." },
  ],
  "biotechnology-principles-and-processes": [
    { slug: "molecular-basis-of-inheritance", reason: "Review DNA structure and replication before tracing a recombinant construct." },
    { slug: "molecular-tools-and-dna-analysis", reason: "Match PCR and gel electrophoresis to the individual analysis tasks they perform." },
    { slug: "recombinant-dna-technology", reason: "Follow the concept route through a focused workflow and selection logic." },
    { slug: "biotechnology-applications", reason: "Separate the engineering method from a particular application and its evaluation." },
  ],
"enzymes-and-enzyme-action": [{"slug":"molecular-tools-and-dna-analysis","reason":"Apply catalytic specificity to enzymes used in DNA workflows."},{"slug":"plant-respiration","reason":"Place catalysed reactions within energy-releasing pathways."},{"slug":"digestion-and-absorption","reason":"Compare reaction conditions in a physiological setting."}],
"plant-growth-and-development": [{"slug":"anatomy-of-flowering-plants","reason":"Identify the meristems and tissues whose activity underlies growth."},{"slug":"photosynthesis-in-higher-plants","reason":"Connect resource supply with the limits on sustained growth."},{"slug":"sexual-reproduction-in-flowering-plants","reason":"Follow development into reproductive structures and seeds."}],
"locomotion-and-movement": [{"slug":"neuron-nerve-impulse-synapse","reason":"Review how a neural signal reaches the neuromuscular junction."},{"slug":"blood-and-circulation","reason":"Contrast cardiac muscle with skeletal muscle without treating striation as voluntary control."},{"slug":"cell-theory-and-cell-organelles","reason":"Locate the membrane, cytoplasm and specialised calcium-storage compartment."}],
  "biodiversity-and-conservation": [
    { slug: "organisms-and-populations", reason: "Use population interactions to explain why losing a dependent partner can threaten reproduction." },
    { slug: "ecosystem-energy-flow-and-ecological-pyramids", reason: "Distinguish ecosystem processes from a simple inventory of species." },
    { slug: "evolution-and-natural-selection", reason: "Connect within-species variation with evolutionary change rather than treating it as a species count." },
  ],
  "microbes-in-human-welfare": [
    { slug: "five-kingdom-classification", reason: "Separate bacteria, fungi and the classification boundary for methanogens before memorising useful examples." },
    { slug: "plant-respiration", reason: "Revisit fermentation and distinguish carbon dioxide release from methane production." },
    { slug: "biotechnology-applications", reason: "Compare using microbial activity with deliberately transferring a microbial gene into another organism." },
  ],
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
    { slug: "enzymes-and-enzyme-action", reason: "Distinguish enzyme rate, saturation and environmental effects before comparing digestion reactions." },
    { slug: "blood-and-circulation", reason: "Follow absorbed nutrients from intestinal vessels into the circulation." },
    { slug: "cell-theory-and-cell-organelles", reason: "Connect an absorptive cell's membrane and internal machinery with nutrient transport." },
  ],
  "mendelian-inheritance": [
    { slug: "chromosomal-basis-of-inheritance", reason: "Connect segregation of alleles with the movement of homologous chromosomes." },
    { slug: "pedigree-analysis-and-inheritance-patterns", reason: "Apply inheritance rules when the evidence is a family tree." },
  ],
  "chromosomal-basis-of-inheritance": [
    { slug: "linkage-and-recombination-frequency", reason: "Turn the chromosome arrangement into a numerical testcross analysis." },
    { slug: "mendelian-inheritance", reason: "Revisit the probability rules before explaining their chromosome basis." },
    { slug: "pedigree-analysis-and-inheritance-patterns", reason: "Distinguish autosomal and sex-linked patterns in families." },
    { slug: "mitosis-and-meiosis", reason: "Locate the cell divisions that separate homologues and chromatids." },
  ],
  "pedigree-analysis-and-inheritance-patterns": [
    { slug: "basic-genetic-diseases-as-inheritance-examples", reason: "Apply pedigree logic to named NCERT inheritance examples without turning them into medical advice." },
    { slug: "sex-determination-systems", reason: "Check which parent supplies alternative sex chromosomes before assigning a transmission route." },
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
    { slug: "microbes-in-human-welfare", reason: "Compare engineered applications with the use of microbial communities in food, wastewater and soil." },
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
    { slug: "c3-c4-pathways-and-photorespiration", reason: "Apply mesophyll and bundle-sheath organisation to the C4 concentrating mechanism." },
    { slug: "plant-growth-and-development", reason: "Follow meristem activity into measurable growth and changing cell roles." },
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
    { slug: "genetic-code-and-reading-frames", reason: "Practise decoding a short RNA sequence and tracing changed codon boundaries." },
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
    { slug: "biodiversity-and-conservation", reason: "Ask which species interactions and habitats conservation measures can retain." },
    { slug: "photosynthesis-in-higher-plants", reason: "Start with how producers capture light energy before tracing transfers through trophic levels." },
    { slug: "plant-respiration", reason: "Compare energy captured by producers with the cellular release of stored chemical energy." },
    { slug: "organisms-and-populations", reason: "Use habitat and population ideas to place trophic roles in an ecological setting." },
  ],
};
