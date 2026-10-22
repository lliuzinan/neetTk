export const librarySections = [
 { id: 'foundations', title: 'Cells & diversity', subtitle: 'Classification, structure and the machinery of life', chapters: 'Class 11 · Chapters 1–10' },
 { id: 'plants', title: 'Plant physiology', subtitle: 'Connect photosynthesis, respiration and growth', chapters: 'Class 11 · Chapters 11–13' },
 { id: 'human', title: 'Human physiology', subtitle: 'Follow transport, regulation and communication', chapters: 'Class 11 · Physiology + supplementary guides' },
 { id: 'reproduction', title: 'Reproduction', subtitle: 'Trace gametes, fertilisation and development', chapters: 'Class 12 · Chapters 1–3' },
 { id: 'genetics', title: 'Genetics & evolution', subtitle: 'From inheritance patterns to molecular mechanisms', chapters: 'Class 12 · Chapters 4–6' },
 { id: 'applied', title: 'Health & biotechnology', subtitle: 'Understand immunity, microbes and genetic tools', chapters: 'Class 12 · Chapters 7–10' },
 { id: 'ecology', title: 'Ecology', subtitle: 'Connect organisms, ecosystems and conservation', chapters: 'Class 12 · Chapters 11–13' },
];
export function librarySection(reference: string) {
 const match = reference.match(/Class (11|12), Chapter (\d+)/);
 if (!match) return 'human';
 const chapter = Number(match[2]);
 if (match[1] === '11') return chapter <= 10 ? 'foundations' : chapter <= 13 ? 'plants' : 'human';
 return chapter <= 3 ? 'reproduction' : chapter <= 6 ? 'genetics' : chapter <= 10 ? 'applied' : 'ecology';
}
