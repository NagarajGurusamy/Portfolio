import {useEffect,useState} from 'react';import {motion} from 'framer-motion';import {Download,FolderOpen,Mail,ArrowDown} from 'lucide-react';
import {links} from '../data/content';import {Img,GitHubIcon,LinkedInIcon} from './ui';
const roles=['Python & FastAPI','AI applications','Computer vision','RAG systems'];
function Typing(){const[i,setI]=useState(0);const[t,setT]=useState('');const[del,setDel]=useState(false);
useEffect(()=>{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){setT(roles[0]);return}
const w=roles[i];const id=setTimeout(()=>{if(!del){setT(w.slice(0,t.length+1));if(t.length+1===w.length)setTimeout(()=>setDel(true),1200)}else{setT(w.slice(0,t.length-1));if(t.length-1===0){setDel(false);setI((i+1)%roles.length)}}},del?35:75);return()=>clearTimeout(id)},[t,del,i]);
return <span className="typing" aria-live="off">{t}<i className="caret"/></span>}
const fade=d=>({initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.7,delay:d,ease:[.22,1,.36,1]}});
export default function Hero(){return(<section id="home" className="hero"><div className="container hero-in">
<div className="hero-text"><motion.p className="pill" {...fade(.05)}><span className="dot"/> Open to Associate Software Engineer roles</motion.p>
<motion.h1 {...fade(.15)}>Hi, I'm <span className="grad">Nagaraj</span></motion.h1>
<motion.p className="role" {...fade(.25)}>AI & Software Developer <b>|</b> ECE Student</motion.p>
<motion.p className="lead" {...fade(.35)}>I build intelligent applications that solve real-world problems using Python, AI, and modern backend technologies.</motion.p>
<motion.p className="typed" {...fade(.4)}>Currently exploring: <Typing/></motion.p>
<motion.div className="btns" {...fade(.5)}>
<a className="btn primary" href="/resume.pdf" download="Nagaraj_G_Resume.pdf"><Download size={18}/>Resume</a>
<a className="btn" href="#projects" onClick={e=>{e.preventDefault();document.getElementById('projects').scrollIntoView({behavior:'smooth'})}}><FolderOpen size={18}/>View Projects</a>
<a className="btn ghost" href={links.github} target="_blank" rel="noreferrer"><GitHubIcon/>GitHub</a>
<a className="btn ghost" href={links.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon/>LinkedIn</a>
<a className="btn ghost" href="#contact" onClick={e=>{e.preventDefault();document.getElementById('contact').scrollIntoView({behavior:'smooth'})}}><Mail size={18}/>Contact</a></motion.div></div>
<motion.div className="avatar-wrap" initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} transition={{duration:.9,delay:.3}}>
<div className="ring"/><div className="avatar glass"><Img src="/images/profile.png" alt="Portrait of Nagaraj G" fallback="NG" eager/></div>
<span className="float f1"/><span className="float f2"/><span className="float f3"/></motion.div></div>
<a className="scroll" href="#about" aria-label="Scroll to About"><ArrowDown size={18}/></a></section>);}
