import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Container from "../../components/layout/Container";
import avatar from "../../assets/images/avatar.png";
function Hero(){

return(

<section

id="home"

className="min-h-screen flex items-center">

<Container>

<div className="grid lg:grid-cols-2 gap-20 items-center">

<div>

<motion.h3

initial={{opacity:0,y:30}}

animate={{opacity:1,y:0}}

transition={{duration:0.6}}

className="text-xl text-[var(--primary)] mb-3">

Hello There 👋

</motion.h3>

<motion.h1

initial={{opacity:0,y:30}}

animate={{opacity:1,y:0}}

transition={{delay:0.2}}

className="text-6xl font-bold leading-tight">

Varnaja

<br/>

Uthayaraj

</motion.h1>

<div className="mt-5 text-2xl text-[var(--text)]">

<TypeAnimation

sequence={[

"Software Engineer",

2000,

"Cyber Security Enthusiast",

2000,

"AI/ML Enthusiast",

2000,

"Full Stack Developer",

2000

]}

repeat={Infinity}

/>

</div>

<p className="mt-8 text-lg text-[var(--text)] leading-8 max-w-xl">

Final Year Computer Engineering Undergraduate passionate about building secure, scalable and intelligent software solutions with modern technologies.

</p>

<div className="flex gap-5 mt-10">

<a

href="/resume.pdf"

className="px-7 py-4 rounded-full bg-[var(--primary)] text-white">

Download CV

</a>

<a

href="#contact"

className="px-7 py-4 rounded-full border border-[var(--primary)]">

Contact Me

</a>

</div>

</div>

<motion.div

animate={{

y:[0,-20,0]

}}

transition={{

duration:4,

repeat:Infinity

}}

>

<img src={avatar} alt="Varnaja" />

</motion.div>

</div>

</Container>

</section>

)

}

export default Hero;