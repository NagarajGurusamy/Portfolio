import {useEffect,useState} from 'react';import {motion,AnimatePresence} from 'framer-motion';import {Menu,X} from 'lucide-react';import {navItems} from '../data/content';
export default function Navbar(){const[active,setActive]=useState('home');const[open,setOpen]=useState(false);const[scrolled,setScrolled]=useState(false);
useEffect(()=>{const onS=()=>setScrolled(window.scrollY>20);onS();window.addEventListener('scroll',onS,{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&setActive(e.target.id)),{rootMargin:'-45% 0px -50% 0px'});
navItems.forEach(([id])=>{const el=document.getElementById(id);el&&io.observe(el)});return()=>{window.removeEventListener('scroll',onS);io.disconnect()}},[]);
const go=id=>{setOpen(false);document.getElementById(id)?.scrollIntoView({behavior:'smooth'})};
return(<header className={'nav '+(scrolled?'scrolled':'')}><nav className="container nav-in" aria-label="Primary">
<a href="#home" className="logo" onClick={e=>{e.preventDefault();go('home')}}>Nagaraj<span>.</span></a>
<ul className="nav-links">{navItems.map(([id,l])=>(<li key={id}><a href={'#'+id} className={active===id?'active':''} aria-current={active===id?'true':undefined} onClick={e=>{e.preventDefault();go(id)}}>{l}</a></li>))}</ul>
<button className="burger" onClick={()=>setOpen(o=>!o)} aria-label="Toggle menu" aria-expanded={open}>{open?<X/>:<Menu/>}</button></nav>
<AnimatePresence>{open&&<motion.ul className="mobile glass" initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}>
{navItems.map(([id,l])=>(<li key={id}><a href={'#'+id} className={active===id?'active':''} onClick={e=>{e.preventDefault();go(id)}}>{l}</a></li>))}</motion.ul>}</AnimatePresence></header>);}
