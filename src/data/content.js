export const links={email:'nagarajgurusamy20@gmail.com',phone:'9360546961',linkedin:'https://www.linkedin.com/in/nagaraj-g-g-8551693b9/',github:'https://github.com/NagarajGurusamy'};
export const navItems=[['home','Home'],['about','About'],['skills','Skills'],['projects','Projects'],['achievements','Achievements'],['certifications','Certifications'],['contact','Contact']];
export const skills=[
{title:'Programming',items:[['Python','Project experience'],['Java','Working knowledge'],['C','Fundamentals'],['SQL','Working knowledge']]},
{title:'Backend & APIs',items:[['FastAPI','Project experience'],['REST APIs','Project experience'],['Backend Development','Hands-on in hackathons']]},
{title:'Tools',items:[['Git','Working knowledge'],['GitHub','Working knowledge']]},
{title:'AI & Development',items:[['Gemini API Integration','Project experience'],['RAG','Project experience'],['OpenCV','Project experience'],['AI Application Development','Hackathon projects'],['Computer Vision','Project experience']]}];
export const projects=[
{id:'support',title:'Intelligent Customer Query Resolution',subtitle:'AI Customer Support Agent',event:'Coding Ninjas 10X Club',date:'September 2026',image:'/images/customer-support.png',
summary:'An AI support agent that classifies, prioritises and routes customer queries, answering routine ones automatically.',
problem:'Organisations handle large volumes of customer queries, and routine questions consume manual support effort that complex issues need.',
solution:'A support agent that accepts natural-language queries, categorises them, sets priority, routes them to the right workflow, and answers common questions with AI-generated first-level responses.',
implemented:['Natural-language query classification and priority-based handling','Routing of queries to the relevant support workflow','Automated first-level responses using AI-generated answers','Escalation of complex, unresolved or high-priority queries to human support'],
features:['Query classification','Priority handling','AI first-level responses','Workflow routing','Escalation to humans'],
tech:['AI-generated responses','Query routing'],contribution:'Developed the agent end to end during the Coding Ninjas 10X Club event, covering classification, prioritisation, automated responses and escalation handling.',github:null,demo:null},
{id:'hosteliq',title:'HostelIQ',subtitle:'AI-Powered Hostel & Mess Management System',event:'GenSprint Hackathon',date:'August 2026',image:'/images/hosteliq.png',
summary:'Backend-driven hostel and mess management with Gemini-powered query automation and QR-verified announcements.',
problem:'Hostel operations involve many student requests, allocations and time-sensitive announcements that are hard to manage and verify manually.',
solution:'A FastAPI backend that manages allocations and requests, uses Gemini AI to automate common queries, and delivers announcements through verified email and push workflows.',
implemented:['Backend services in Python and FastAPI for hostel allocations and student requests','Gemini AI integrated via REST APIs to automate student and admin queries','QR-code verification alongside email and push-notification workflows','RESTful endpoints connecting management features with AI query handling'],
features:['Hostel allocation management','Student request handling','AI-powered query automation','Gemini API integration','QR-code verification','Email & push notifications','REST API architecture'],
tech:['Python','FastAPI','Gemini API','REST APIs','QR-code verification'],contribution:'Architected the backend services in Python and FastAPI, integrated Gemini through REST APIs, and implemented QR verification with email and push-notification workflows.',github:null,demo:null},
{id:'bis',title:'BIS Standards Assistant',subtitle:'RAG-Based AI Assistant',event:'Smart India Hackathon (SIH)',date:'2026',image:'/images/bis-assistant.png',
summary:'A RAG-based assistant for asking natural-language questions about BIS standards and regulatory documents.',
problem:'BIS standards and regulatory documents are lengthy and technical, making it slow to find the information you need by manual navigation.',
solution:'A Retrieval-Augmented Generation assistant where users ask questions in natural language and get context-aware answers generated with Gemini, through a dashboard interface.',
implemented:['RAG-based querying over BIS standards and regulatory documents','Gemini AI integration to process questions and generate context-aware responses','A dashboard-based interface for interacting with the documents'],
features:['RAG document querying','Natural-language Q&A','Gemini AI integration','Context-aware responses','Dashboard interface'],
tech:['RAG','Gemini AI','Dashboard UI','AI integration'],contribution:'Developed the assistant as part of the Smart India Hackathon, including the RAG pipeline, Gemini integration and the dashboard interface.',github:null,demo:null},
{id:'face',title:'Smart Attendance System',subtitle:'Face Recognition',event:'Industry Hackathon',date:'September 2025',image:'/images/face-attendance.png',
summary:'A computer-vision system that marks attendance automatically by recognising multiple faces.',
problem:'Manual attendance marking is time-consuming and makes records harder to keep consistent.',
solution:'A Python and OpenCV application that detects and recognises student faces during a session, then records timestamps and keeps structured attendance records.',
implemented:['Multi-face detection and recognition with Python and OpenCV','Automated timestamping of attendance','Structured attendance records for tracking'],
features:['Face detection','Face recognition','Multi-face identification','Automated attendance','Timestamp recording','Structured records'],
tech:['Python','OpenCV','Computer Vision'],contribution:'Developed the full attendance system, from face detection and recognition to timestamping and record keeping.',github:null,demo:null}];
export const achievements=[
{title:'Customer Support Agent Project',label:'3rd Prize',image:'/images/customer-support-award.png'},
{title:'School Zonal-Level Yoga Champion',label:'Champion',image:'/images/yoga-award.png'},
{title:'Smart India Hackathon 2026',label:'Participant',image:null}];
export const certificates=[
{title:'AWS S3 Basics',issuer:'Coursera',image:'/certificates/aws-s3.png'},
{title:'Data Analytics Essentials',issuer:'Cisco Networking Academy',image:'/certificates/cisco-data-analytics.png'},
{title:'Python Essentials 1',issuer:'Cisco Networking Academy',image:'/certificates/python-essentials.png'},
{title:'Communication Skills',issuer:'TCS iON',image:'/certificates/tcs-communication.png'}];
