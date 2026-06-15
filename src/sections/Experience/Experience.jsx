import { motion } from "framer-motion";
import Container from "../../components/layout/Container";

const experiences = [

{

title:"Full Stack Development Virtual Internship",

company:"DevAlpha Technologies",

period:"2025 - Present",

description:
"Building responsive web applications using React, REST APIs, Git, GitHub and modern frontend technologies while collaborating on real-world software projects."

},

];

function Experience(){

return(

<section

id="experience"

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

Experience

</p>

<h2

className="

text-5xl

font-bold

mt-3

"

>

Professional Journey

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

My journey of learning software engineering through
internships and practical development experience.

</p>

<div className="relative mt-20">

<div
className="
absolute
left-5
top-0
bottom-0
w-[3px]
bg-[var(--primary)]/30
">
</div>
{experiences.map((item, index) => (

<motion.div

key={index}

initial={{

opacity:0,

x:-50

}}

whileInView={{

opacity:1,

x:0

}}

transition={{

duration:.6,

delay:index*0.2

}}

viewport={{

once:true

}}

className="
relative
pl-16
pb-12
"

>

<div
className="
absolute
left-[7px]
top-3
w-7
h-7
rounded-full
bg-[var(--primary)]
border-4
border-[var(--bg)]
shadow-lg
">
</div>

<div
className="
glass
hover-card
rounded-[30px]
p-8
">

<p
className="
text-sm
font-medium
text-[var(--primary)]
mb-2
">

{item.period}

</p>

<h3
className="
text-3xl
font-bold
">

{item.title}

</h3>

<p
className="
mt-2
text-lg
text-[var(--secondary)]
">

{item.company}

</p>

<p
className="
mt-5
leading-8
text-[var(--text)]
">

{item.description}

</p>

<div
className="
flex
flex-wrap
gap-3
mt-6
">

<span
className="
px-4
py-2
rounded-full
bg-[var(--primary)]/10
text-[var(--primary)]
text-sm
">

React

</span>

<span
className="
px-4
py-2
rounded-full
bg-[var(--primary)]/10
text-[var(--primary)]
text-sm
">

REST API

</span>

<span
className="
px-4
py-2
rounded-full
bg-[var(--primary)]/10
text-[var(--primary)]
text-sm
">

Git

</span>

<span
className="
px-4
py-2
rounded-full
bg-[var(--primary)]/10
text-[var(--primary)]
text-sm
">

GitHub

</span>

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

export default Experience;