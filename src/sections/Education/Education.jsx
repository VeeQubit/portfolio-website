import { motion } from "framer-motion";
import Container from "../../components/layout/Container";

const education = [

{

degree:"Bachelor of Science in Engineering",

field:"Computer Engineering",

university:"University of Jaffna",

period:"2022 - Present",

description:
"Final Year Computer Engineering Undergraduate with interests in Software Engineering, Artificial Intelligence, Cyber Security and Full Stack Development."

},

];

function Education(){

return(

<section

id="education"

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

Education

</p>

<h2

className="
text-5xl
font-bold
mt-3
">

Academic Journey

</h2>

<p

className="
max-w-2xl
mx-auto
mt-6
leading-8
text-[var(--text)]
">

My educational background and academic journey that shaped my
passion for software engineering and emerging technologies.

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
{education.map((item,index)=>(

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

duration:.6

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
"

>

<p

className="
text-sm
font-medium
text-[var(--primary)]
mb-2
"

>

{item.period}

</p>

<h3

className="
text-3xl
font-bold
"

>

{item.degree}

</h3>

<p

className="
mt-2
text-xl
text-[var(--secondary)]
"

>

{item.field}

</p>

<p

className="
mt-2
text-lg
text-[var(--text)]
"

>

{item.university}

</p>

<p

className="
mt-6
leading-8
text-[var(--text)]
"

>

{item.description}

</p>

<div

className="
flex
flex-wrap
gap-3
mt-6
"

>

<span
className="
px-4
py-2
rounded-full
bg-[var(--primary)]/10
text-[var(--primary)]
text-sm
">

Computer Engineering

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

AI/ML

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

Cyber Security

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

Software Engineering

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

export default Education;