import {useState} from 'react';import {Award,ZoomIn} from 'lucide-react';import {certificates} from '../data/content';import {Section,Reveal,Img,Modal} from './ui';
export function CertCard({c,onOpen,i}){return(<Reveal delay={i*.08}><button className="card glass cert" onClick={()=>onOpen(c)} aria-label={'Preview '+c.title+' certificate'}>
<div className="thumb short"><Img src={c.image} alt={c.title+' certificate'} fallback="Preview coming soon"/><span className="zoom"><ZoomIn size={18}/></span></div>
<div className="card-body"><h3>{c.title}</h3><p className="sub">{c.issuer}</p></div></button></Reveal>);}
export default function Certifications(){const[sel,setSel]=useState(null);
return(<Section id="certifications" eyebrow="Learning" title="Certifications"><div className="grid four">{certificates.map((c,i)=><CertCard key={c.title} c={c} i={i} onOpen={setSel}/>)}</div>
<Modal open={!!sel} onClose={()=>setSel(null)} label={sel?.title||'Certificate'} wide>{sel&&<div className="modal-body"><Img className="full" src={sel.image} alt={sel.title+' certificate'} fallback="Certificate image not available yet"/><h3><Award size={18}/> {sel.title}</h3><p className="sub">{sel.issuer}</p></div>}</Modal></Section>);}
