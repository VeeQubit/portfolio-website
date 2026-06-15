import { motion } from "framer-motion";
import Container from "../../components/layout/Container";
import projectsData from "../../data/projectsData";

function Projects() {

return(

<section

id="projects"

className="py-28 relative overflow-hidden"

>

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

"

>

Things I've Built

</h2>

<p

className="

max-w-2xl

mx-auto

mt-6

leading-8

text-[var(--text)]

"

>

Some of my favorite software engineering,
AI and Full Stack projects developed
throughout my academic journey.

</p>

<div

className="

grid

lg:grid-cols-2

gap-10

mt-20

"

>

{projectsData.map((project,index)=>(

<motion.div

key={project.id}

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

delay:index*.1

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

"

>

{project.title}

</h3>

<p

className="

leading-8

text-[var(--text)]

"

>

{project.description}

</p>

<div

className="

flex

flex-wrap

gap-3

mt-6

"
>
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

"

>

<motion.a

whileHover={{

scale:1.05

}}

whileTap={{

scale:.95

}}

href={project.github}

target="_blank"

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

href={project.demo}

target="_blank"

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

)

}

export default Projects;