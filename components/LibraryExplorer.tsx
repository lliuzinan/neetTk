'use client';
import { useState } from 'react';
import Link from 'next/link';
import { librarySections, librarySection } from '@/lib/librarySections';
type Guide = { slug: string; name: string; ncertRef: string; description: string };
export function LibraryExplorer({ guides }: { guides: Guide[] }) {
 const [query, setQuery] = useState(''); const [area, setArea] = useState('all');
 const visible = guides.filter(g => (area === 'all' || librarySection(g.ncertRef) === area) && `${g.name} ${g.description} ${g.ncertRef}`.toLowerCase().includes(query.trim().toLowerCase()));
 return <section className="libraryExplorer" aria-label="Find a revision guide">
  <div className="libraryControls"><label>Search the library<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Try meiosis, hormones or testcross…" /></label><label>Knowledge area<select value={area} onChange={e=>setArea(e.target.value)}><option value="all">All areas</option>{librarySections.map(s=><option key={s.id} value={s.id}>{s.title}</option>)}</select></label></div>
  <p role="status" aria-live="polite">{visible.length} {visible.length === 1 ? 'guide' : 'guides'} found</p>
  {!visible.length && <div className="libraryEmpty"><h2>No matching guides</h2><p>Try a broader concept or choose another area.</p><button onClick={()=>{setQuery('');setArea('all')}}>Clear search and filters</button></div>}
  {librarySections.map(s=>{const items=visible.filter(g=>librarySection(g.ncertRef)===s.id);return items.length ? <section className="libraryArea" id={s.id} key={s.id}><header><p className="eyebrow">{s.chapters}</p><h2>{s.title}</h2><p>{s.subtitle}</p></header><div className="libraryGuideGrid">{items.map(g=><Link href={`/neet-ug/biology/${g.slug}`} key={g.slug} className="libraryGuide"><span>{g.ncertRef}</span><h3>{g.name}</h3><p>{g.description}</p><b>Read guide ↗</b></Link>)}</div></section>:null})}
 </section>;
}
