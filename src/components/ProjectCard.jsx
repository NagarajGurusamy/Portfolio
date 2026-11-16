import {useState} from 'react';import {motion} from 'framer-motion';import {ArrowUpRight,ExternalLink,Calendar} from 'lucide-react';import {Img,Modal,GitHubIcon} from './ui';
const Tags=({list})=>(<div className="tags">{list.map(t=><span key={t} className="tag">{t}</span>)}</div>);
export default function ProjectCard({p,index}){const[open,setOpen]=useState(false);
return(<><motion.article className="card glass project" initial={{opacity:0,y:36}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:.6,delay:(index%2)*.12}} whileHover={{y:-6}}>
<div className="thumb"><Img src={p.image} alt={p.title+' project preview'} fallback={p.title}/></div>
<div className="card-body"><p className="meta"><span>{p.event}</span><span><Calendar size={13}/> {p.date}</span></p>
<h3>{p.title}</h3><p className="sub">{p.subtitle}</p><p>{p.summary}</p><Tags list={p.tech}/>
<button className="btn small" onClick={()=>setOpen(true)}>View details <ArrowUpRight size={16}/></button></div></motion.article>
<Modal open={open} onClose={()=>setOpen(false)} label={p.title} wide><div className="thumb big"><Img src={p.image} alt={p.title+' project preview'} fallback={p.title}/></div>
<div className="modal-body"><p className="meta"><span>{p.event}</span><span><Calendar size={13}/> {p.date}</span></p><h3>{p.title}</h3><p className="sub">{p.subtitle}</p>
<h4>Problem</h4><p>{p.problem}</p><h4>Solution</h4><p>{p.solution}</p>
<h4>What I implemented</h4><ul>{p.implemented.map(x=><li key={x}>{x}</li>)}</ul>
<h4>Main features</h4><Tags list={p.features}/><h4>Technologies</h4><Tags list={p.tech}/>
<h4>My contribution</h4><p>{p.contribution}</p>
{(p.github||p.demo)&&<div className="btns">{p.github&&<a className="btn" href={p.github} target="_blank" rel="noreferrer"><GitHubIcon/>GitHub</a>}{p.demo&&<a className="btn primary" href={p.demo} target="_blank" rel="noreferrer"><ExternalLink size={16}/>Live Demo</a>}</div>}</div></Modal></>);}
