import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EditorialByline } from "@/components/EditorialByline";
import { editorialReviewer, hasNamedAuthor } from "@/lib/editorialReviewer";
import { PdfCta } from "@/components/PdfCta";
import { absoluteUrl, findTopic, getSeoNotes, getTopics } from "@/lib/content";
import { AUTHORED_NOTE_SLUGS, getNoteComparisonTable, getNoteContent, getNoteEditorialBlock, getNoteReferences } from "@/lib/noteContent";
import { ogImage, topicDates, topicMetadata } from "@/lib/seo";
import { getTopicSeoContent } from "@/lib/topicSeo";

interface Props { params: Promise<{ topicSlug: string }>; }

const articleIllustrations: Record<string, { src: string; alt: string; caption: string }> = {
  "photosynthesis-in-higher-plants": {
    src: "/images/biology/photosynthesis-chloroplast-route-v1.png",
    alt: "Chloroplast route showing light and water at thylakoids, ATP and NADPH transfer to the stroma, and carbon dioxide fixation",
    caption: "An original chloroplast route map: light reactions at thylakoid membranes provide ATP and NADPH for carbon-fixation reactions in the stroma.",
  },
  "plant-respiration": {
    src: "/images/biology/plant-respiration-route-v1.png",
    alt: "Glucose moving through cytoplasmic glycolysis to pyruvate, then branching to aerobic mitochondrial respiration or fermentation",
    caption: "An original pathway map: glycolysis makes pyruvate in the cytoplasm before aerobic and anaerobic routes diverge.",
  },
  "digestion-and-absorption": {
    src: "/images/biology/digestion-absorption-route-v1.png",
    alt: "Food route from mouth through stomach to small intestine with liver and pancreas side secretions and a villus containing a blood capillary and lacteal",
    caption: "An original route map: food stays in the alimentary canal, while liver and pancreas contribute secretions to the small intestine where most absorption occurs.",
  },
  "blood-and-circulation": {
    src: "/images/biology/blood-double-circulation-v1.png",
    alt: "Double circulation route from right heart to lungs to left heart to body and back to right heart",
    caption: "An original double-circulation map. Read the arrows as two connected loops: pulmonary circulation through lungs and systemic circulation through body tissues.",
  },
  "human-respiration": {
    src: "/images/biology/human-respiration-gas-route-v1.png",
    alt: "Four-stage route showing ventilation, alveolar gas exchange, blood transport, and tissue exchange",
    caption: "An original route map: air enters alveoli, oxygen and carbon dioxide cross the respiratory surface in opposite directions, blood transports the gases, and exchange continues at tissues.",
  },
  "excretion-and-kidney-function": {
    src: "/images/biology/excretion-nephron-arrows-v1.png",
    alt: "Simplified nephron showing filtration, selective reabsorption, secretion, and urine flow directions",
    caption: "An original nephron direction map. The key is not the shape alone: name the two spaces and follow each transport arrow.",
  },
  "immunity-pathogens-vaccines": {
    src: "/images/biology/immunity-barrier-memory-v1.png",
    alt: "Progression from physical barriers through innate and acquired immunity to vaccination-associated memory cells",
    caption: "An original overview of the learning sequence from barriers to antigen-specific responses and immunological memory. It is a revision map, not a clinical treatment guide.",
  },
  "neuron-nerve-impulse-synapse": {
    src: "/images/biology/neuron-signal-direction-v1.png",
    alt: "Simplified direction of nerve impulse from dendrite through axon and synapse to the next cell",
    caption: "An original simplified signal-direction map. It highlights the one-way route through a chemical synapse rather than every detail of action-potential initiation.",
  },
  "dna-rna-replication-transcription-translation": {
    src: "/images/biology/dna-rna-information-flow-v1.png",
    alt: "DNA replication branch and DNA to RNA to protein information flow through a ribosome",
    caption: "An original information-flow map: replication makes DNA from DNA, while gene expression follows DNA to RNA to protein.",
  },
  "cell-theory-and-cell-organelles": {
    src: "/images/biology/cell-organelles-protein-route-v1.png",
    alt: "Simplified eukaryotic cell showing nucleus, ribosome, rough endoplasmic reticulum, Golgi apparatus, vesicle, mitochondrion, and lysosome",
    caption: "An original structure-function map. Follow the protein-related route to separate synthesis, later handling, transport, energy release, and intracellular digestion.",
  },
  "mutation-and-gene-expression": {
    src: "/images/biology/mutation-expression-change-use-v2.png",
    alt: "Comparison showing a DNA sequence change as mutation and DNA to RNA to protein as gene expression",
    caption: "An original comparison: mutation changes genetic information, while gene expression uses information through RNA to make a product. The outcome of a DNA change depends on context.",
  },
  "endocrine-system-and-hormones": {
    src: "/images/biology/endocrine-blood-glucose-feedback-v1.png",
    alt: "Negative-feedback regulation of blood glucose through insulin and glucagon",
    caption: "Insulin and glucagon act in opposing directions to help maintain blood glucose within a useful range.",
  },
};

const articleStudyNotes: Record<string, { heading: string; intro: string; points: string[] }> = {
  "human-respiration": {
    heading: "Gas movement: trace the route before naming a molecule",
    intro: "Respiration becomes much clearer when each event is placed on the same route instead of treated as a loose fact.",
    points: [
      "Ventilation moves air between the atmosphere and alveoli; it is not itself diffusion across a membrane.",
      "At the alveoli, oxygen moves into pulmonary blood while carbon dioxide moves into alveolar air along their partial-pressure gradients.",
      "In systemic tissues, the direction reverses: oxygen leaves blood for tissues and carbon dioxide enters blood from tissues.",
      "For transport, attach oxygen mainly to haemoglobin and carbon dioxide mainly to bicarbonate before adding smaller transport fractions.",
    ],
  },
  "excretion-and-kidney-function": {
    heading: "The nephron arrow test",
    intro: "Most kidney mix-ups disappear when you name the two spaces first, then draw the direction of movement.",
    points: [
      "Filtration: blood in the glomerulus -> fluid in Bowman's capsule.",
      "Reabsorption: tubular fluid -> nearby blood, returning useful substances and water.",
      "Secretion: nearby blood -> tubular fluid, adding selected substances to the forming urine.",
      "Excretion is the final removal of urine from the body; it is not a substitute word for every nephron step.",
    ],
  },
  "immunity-pathogens-vaccines": {
    heading: "Immunity: identify the kind of protection first",
    intro: "Before matching a cell or molecule to a statement, decide whether the prompt is about a barrier, a rapid broad response, or an antigen-specific response with memory.",
    points: [
      "Physical barriers and innate responses are available without a previous encounter with one particular antigen.",
      "Acquired immunity is antigen-specific and can form immunological memory.",
      "Vaccination supports active acquired immunity because the body develops its own response after antigenic stimulation.",
      "Ready-made antibodies give passive immunity: the protection can be immediate, but the receiver does not build the same long-term memory from it.",
    ],
  },
  "endocrine-system-and-hormones": {
    heading: "Feedback direction: use the arrow test",
    intro: "A hormone name can look familiar while the direction is wrong. Before accepting an option, say the full sequence aloud and check which change comes next.",
    points: [
      "High blood glucose -> insulin release -> uptake and storage of glucose -> blood glucose falls toward its usual range.",
      "Low blood glucose -> glucagon release -> liver mobilises stored glucose -> blood glucose rises toward its usual range.",
      "ADH and oxytocin are synthesised in the hypothalamus and stored and released from the posterior pituitary. A shared release site does not mean a shared function.",
      "Peptide hormones such as insulin act through cell-surface receptors, whereas steroid hormones can enter target cells and act through intracellular receptors.",
    ],
  },
  "neuron-nerve-impulse-synapse": {
    heading: "Signal direction: use one continuous route",
    intro: "A diagram becomes easier to remember when every part answers one question: where did the signal come from, where does it go next, and what changes form at the synapse?",
    points: [
      "Dendrites receive inputs toward the cell body; the axon carries an impulse away from it.",
      "Depolarisation and recovery are successive changes of membrane state, not two names for the same instant.",
      "At a chemical synapse, the presynaptic side releases neurotransmitter and the postsynaptic side carries the corresponding receptors.",
      "In a reflex arc, the receptor detects the stimulus and the effector carries out the response; neither role belongs to the other.",
    ],
  },
  "dna-rna-replication-transcription-translation": {
    heading: "The four-box information check",
    intro: "Write four labels from memory: input, output, location, and purpose. If two processes share a word but differ in one of these boxes, they are not interchangeable.",
    points: [
      "Replication uses DNA as a template to make DNA before cell division.",
      "Transcription uses a DNA template to make RNA; in eukaryotes it is mainly associated with the nucleus.",
      "Translation reads mRNA information at ribosomes to assemble a polypeptide.",
      "A codon is read on mRNA, while a tRNA anticodon pairs with it during translation.",
    ],
  },
  "cell-theory-and-cell-organelles": {
    heading: "Follow a protein instead of memorising a list",
    intro: "A structure is easier to retain when it is placed in a route. Use a protein-related pathway to separate synthesis, processing, transport, and breakdown functions.",
    points: [
      "The nucleus holds genetic information that can be used to make RNA; ribosomes assemble polypeptides.",
      "Rough endoplasmic reticulum and Golgi apparatus are associated with later handling of many proteins, but they do not replace ribosomes as the synthesis site.",
      "Mitochondria support aerobic energy release; chloroplasts are associated with photosynthesis in plant cells.",
      "A lysosome is linked with intracellular digestion, while a vacuole is primarily discussed as a storage compartment in this comparison.",
    ],
  },
  "mutation-and-gene-expression": {
    heading: "Separate a change in information from a change in use",
    intro: "The shortest reliable distinction is this: mutation changes genetic information or its arrangement; gene regulation changes when, where, or how much information is used.",
    points: [
      "A substitution changes one base-pair position and may or may not change the resulting amino-acid sequence.",
      "An insertion or deletion can alter downstream codon grouping when it changes the reading frame.",
      "Gene expression follows the route from DNA information to RNA and, for protein-coding genes, to a polypeptide product.",
      "A visible trait depends on context; a DNA change is not automatically a disease statement.",
    ],
  },
};

const articleSupplementalFigures: Record<string, { afterHeading: string; src: string; alt: string; caption: string }> = {
  "endocrine-system-and-hormones": {
    afterHeading: "The hypothalamus and pituitary: read the control hierarchy",
    src: "/images/biology/endocrine-hypothalamus-pituitary-thyroid-axis-v1.png",
    alt: "Simplified hypothalamus-pituitary-thyroid axis with negative feedback from thyroid hormones",
    caption: "A simplified control-axis overview: the hypothalamus and anterior pituitary influence thyroid activity, while thyroid hormones provide negative feedback.",
  },
};

function isPublishedNote(slug: string) {
  return AUTHORED_NOTE_SLUGS.includes(slug as (typeof AUTHORED_NOTE_SLUGS)[number]);
}

export async function generateStaticParams() {
  const [notes, topics] = await Promise.all([getSeoNotes(), getTopics()]);
  return topics.filter((topic) => notes.some((note) => note.topicSlug === topic.slug && isPublishedNote(note.slug))).map((topic) => ({ topicSlug: topic.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topicSlug } = await params;
  const [topic, notes] = await Promise.all([findTopic(topicSlug), getSeoNotes()]);
  if (!topic || !notes.some((note) => note.topicSlug === topic.slug && isPublishedNote(note.slug))) return {};
  return topicMetadata(topic);
}

export default async function TopicPage({ params }: Props) {
  const { topicSlug } = await params;
  const [topic, notes, allTopics] = await Promise.all([findTopic(topicSlug), getSeoNotes(), getTopics()]);
  const note = topic && notes.find((item) => item.topicSlug === topic.slug && isPublishedNote(item.slug));
  if (!topic || !note) notFound();

  const seoContent = getTopicSeoContent(topic.slug);
  const dates = topicDates(topic.slug);
  const sections = getNoteContent(note.slug, topic.name, topic.ncertRef, seoContent.focus, seoContent.traps);
  if (!sections) notFound();
  const references = getNoteReferences(note.slug);
  const heroImage = ogImage(`${topic.name} revision guide`, "NCERT-aligned NEET Biology notes");
  const comparisonTable = getNoteComparisonTable(note.slug, topic.name);
  const editorialBlock = getNoteEditorialBlock(note.slug, topic.name);
  const articleIllustration = articleIllustrations[note.slug];
  const articleStudyNote = articleStudyNotes[note.slug];
  const articleSupplementalFigure = articleSupplementalFigures[note.slug];
  const noteTopicSlugs = new Set(notes.filter((item) => isPublishedNote(item.slug)).map((item) => item.topicSlug));
  const relatedTopics = allTopics
    .filter((item) => item.slug !== topic.slug && noteTopicSlugs.has(item.slug))
    .map((item) => ({ topic: item, distance: Math.abs(item.sortOrder - topic.sortOrder), sameClass: item.ncertRef.slice(0, 24) === topic.ncertRef.slice(0, 24) }))
    .sort((a, b) => Number(b.sameClass) - Number(a.sameClass) || a.distance - b.distance)
    .slice(0, 4)
    .map((item) => item.topic);
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "NEET-UG Biology", item: absoluteUrl("/neet-ug/biology") }, { "@type": "ListItem", position: 3, name: topic.name, item: absoluteUrl(`/neet-ug/biology/${topic.slug}`) }] };
  const articleAuthor = hasNamedAuthor()
    ? { "@type": "Person", name: editorialReviewer.authorName, url: absoluteUrl("/authors/dongfeng"), ...(editorialReviewer.authorRole ? { jobTitle: editorialReviewer.authorRole } : {}) }
    : { "@type": "Organization", name: "MedQGo Editorial Team" };
  const articleLd = { "@context": "https://schema.org", "@type": "Article", headline: `${topic.name} revision guide`, description: note.description, datePublished: dates.publishedIso, dateModified: dates.modifiedIso, image: heroImage, about: topic.name, author: articleAuthor, publisher: { "@type": "Organization", name: "MedQGo", url: absoluteUrl("/") } };

  return (
    <main className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbLd, articleLd]) }} />
      <header className="pageHeader">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/neet-ug/biology", label: "NEET Biology" }, { href: `/neet-ug/biology/${topic.slug}`, label: topic.name }]} />
        <Link href="/neet-ug/biology" className="backLink">All Biology topics</Link>
        <p className="eyebrow">{topic.ncertRef}</p>
        <h1>{topic.name} revision guide</h1>
        <p>{note.description}</p>
        <p className="updatedStamp">Published: {dates.publishedDisplay} | Last updated: {dates.modifiedDisplay}</p>
        <EditorialByline lastUpdated={dates.modifiedDisplay} />
      </header>
      <figure className="articleHeroImage">
        <img src={heroImage} alt={`${topic.name} NEET Biology revision visual`} />
        <figcaption>Independent revision visual for {topic.name}, prepared for NEET-UG Biology study.</figcaption>
      </figure>
      <section className="contentBand"><h2>Concept focus</h2><ul className="seoList">{seoContent.focus.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <article className="articleBody">
        {sections.slice(0, 2).map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul className="seoList">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}
        {articleIllustration && (
          <figure className="articleIllustration">
            <img src={articleIllustration.src} alt={articleIllustration.alt} width={1600} height={1000} />
            <figcaption>{articleIllustration.caption}</figcaption>
          </figure>
        )}
        {articleStudyNote && (
          <section className="articleStudyNote">
            <h2>{articleStudyNote.heading}</h2>
            <p>{articleStudyNote.intro}</p>
            <ul className="seoList">{articleStudyNote.points.map((point) => <li key={point}>{point}</li>)}</ul>
          </section>
        )}
        <section className="editorialAside">
          <h2>{editorialBlock.heading}</h2>
          {editorialBlock.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {editorialBlock.bullets && <ul className="seoList">{editorialBlock.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
        </section>
        <section>
          <h2>{comparisonTable.heading}</h2>
          <p>{comparisonTable.intro}</p>
          <div className="comparisonTableWrap">
            <table className="comparisonTable">
              <thead>
                <tr>{comparisonTable.columns.map((column) => <th key={column}>{column}</th>)}</tr>
              </thead>
              <tbody>
                {comparisonTable.rows.map((row) => (
                  <tr key={row.join("|")}>{row.map((cell, index) => <td data-label={comparisonTable.columns[index]} key={cell}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        {sections.slice(2).map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.bullets && <ul className="seoList">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
            {articleSupplementalFigure?.afterHeading === section.heading && (
              <figure className="articleIllustration">
                <img src={articleSupplementalFigure.src} alt={articleSupplementalFigure.alt} width={1600} height={1000} />
                <figcaption>{articleSupplementalFigure.caption}</figcaption>
              </figure>
            )}
          </section>
        ))}
        <section><h2>Common confusions to check</h2><ul className="seoList">{seoContent.traps.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section>
          <h2>Exam-style checkpoints</h2>
          <p>Before leaving this page, check whether you can explain {topic.name} without opening your textbook. A good checkpoint is to define the main term, give one NCERT-linked example, and state one nearby idea that students commonly confuse with it.</p>
          <p>For a second pass, mix this guide with a neighbouring Biology topic instead of revising it alone. NEET-UG Biology often tests whether students can keep similar processes, structures, molecules, or examples separate under time pressure.</p>
        </section>
        <section className="articleMetaBox">
          <h2>Editorial note and disclaimer</h2>
          <p><strong>Written by:</strong> <Link href="/authors/dongfeng">DongFeng</Link>. <strong>Editorial review:</strong> MedQGo. <strong>Last updated:</strong> {dates.modifiedDisplay}.</p>
          <p><strong>Disclaimer:</strong> This guide is a revision aid for NEET-UG aspirants and does not constitute medical advice. For clinical or health-related queries, consult a qualified medical professional.</p>
        </section>
        <section>
          <h2>References</h2>
          <ul className="seoList referenceList">
            {references.map((reference) => (
              <li key={reference.href}>
                <a href={reference.href} rel="noopener noreferrer" target="_blank">{reference.label}</a>
              </li>
            ))}
          </ul>
        </section>
        {relatedTopics.length > 0 && (
          <section>
            <h2>Related revision guides</h2>
            <div className="relatedGuideGrid">
              {relatedTopics.map((related) => (
                <Link href={`/neet-ug/biology/${related.slug}`} className="relatedGuide" key={related.id}>
                  <strong>{related.name}</strong>
                  <span>{related.ncertRef}</span>
                </Link>
              ))}
            </div>
          </section>
        )}
        <section><h2>How to use this guide</h2><p>Read the relevant NCERT chapter first. Then redraw the relationships or process described here from memory, compare your version with the textbook, and correct only the gaps. This is an independent revision aid, not official NCERT, NTA, or NEET material.</p></section>
      </article>
      <PdfCta source="topic_page" topicSlug={topic.slug} />
    </main>
  );
}
