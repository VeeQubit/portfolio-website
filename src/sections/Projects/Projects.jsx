import { motion } from "framer-motion";
import Container from "../../components/layout/Container";

const projects = [

{
title:"Lab Scheduling Management System",

image:"https://placehold.co/600x400",

description:
"Automated university laboratory scheduling system with conflict detection and timetable generation.",

stack:["React","PHP","MySQL"],

},

{

title:"Course Registration System",

image:"https://placehold.co/600x400",

description:
"University course registration platform with semester management and student enrollment.",

stack:["PHP","MySQL","Bootstrap"],

},

{

title:"Sentiment & Intent Detection",

image:"https://placehold.co/600x400",

description:
"AI powered NLP system that classifies sentiment and detects user intent using Machine Learning.",

stack:["Python","NLP","Scikit Learn"],

},

{

title:"Portfolio Website",

image:"https://placehold.co/600x400",

description:
"Modern animated portfolio built using React and Tailwind CSS with premium UI.",

stack:["React","Tailwind","Framer Motion"],

},

];

function Projects(){

return(

<section

id="projects"

className="py-28 relative overflow-hidden">

<Container>

<motion.div

initial={{

opacity:0,

y:40

}}

whileInView={{

opacity:1,

y:0

}}

transition={{

duration:.8

}}

viewport={{

once:true

}}

className="text-center"

>

<p className="text-[var(--primary)] text-lg">

Featured Projects

</p>

<h2
className="
text-5xl
font-bold
mt-3
">

Things I've Built

</h2>

<p
className="
max-w-2xl
mx-auto
mt-6
leading-8
text-[var(--text)]
">

Some of my favorite software engineering and AI projects
developed throughout my academic journey.

</p>

<div
className="
grid
lg:grid-cols-2
gap-10
mt-20
">
{projects.map((project, index) => (

<motion.div

key={project.title}

initial={{

opacity:0,

y:50

}}

whileInView={{

opacity:1,

y:0

}}

transition={{

duration:.5,

delay:index*0.1

}}

viewport={{

once:true

}}

whileHover={{

y:-8

}}

className="
glass
hover-card
rounded-[35px]
overflow-hidden
shadow-xl
group
"

>

<div className="overflow-hidden">

<img

src={project.image}

alt={project.title}

className="
w-full
h-[250px]
object-cover
group-hover:scale-110
transition-all
duration-700
"

/>

</div>

<div className="p-8">

<h3
className="
text-3xl
font-bold
mb-4
">

{project.title}

</h3>

<p
className="
leading-8
text-[var(--text)]
">

{project.description}

</p>

<div
className="
flex
flex-wrap
gap-3
mt-6
">

{project.stack.map((item)=>(

<span

key={item}

className="
px-4
py-2
rounded-full
bg-[var(--primary)]/10
text-[var(--primary)]
text-sm
"

>

{item}

</span>

))}

</div>

<div
className="
flex
gap-4
mt-8
">

<motion.a

whileHover={{

scale:1.05

}}

whileTap={{

scale:.95

}}

href="#"

className="
px-6
py-3
rounded-full
bg-[var(--primary)]
text-white
"

>

GitHub

</motion.a>

<motion.a

whileHover={{

scale:1.05

}}

whileTap={{

scale:.95

}}

href="#"

className="
px-6
py-3
rounded-full
border
border-[var(--primary)]
hover:bg-[var(--primary)]
hover:text-white
duration-300
"

>

Live Demo

</motion.a>

</div>

</div>

</motion.div>

))}

</div>

</motion.div>

</Container>

</section>

);

}

export default Projects;