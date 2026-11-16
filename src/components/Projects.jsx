import {projects} from '../data/content';import {Section} from './ui';import ProjectCard from './ProjectCard';
export default function Projects(){return(<Section id="projects" eyebrow="Selected work" title="Projects built at hackathons"><div className="grid two">{projects.map((p,i)=><ProjectCard key={p.id} p={p} index={i}/>)}</div></Section>);}
