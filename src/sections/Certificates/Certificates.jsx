import { motion } from "framer-motion";
import Container from "../../components/layout/Container";
import {
  FaAward,
  FaCertificate,
  FaLaptopCode,
  FaBriefcase,
} from "react-icons/fa";

const certificates = [

{
title:"Full Stack Development Virtual Internship",
issuer:"DevAlpha Technologies",
icon:<FaBriefcase />,
},

{
title:"Online Professional Certification",
issuer:"Coursera / Udemy",
icon:<FaCertificate />,
},

{
title:"Technical Workshop",
issuer:"University of Jaffna",
icon:<FaLaptopCode />,
},

{
title:"Programming Competition",
issuer:"University Level",
icon:<FaAward />,
},

];

function Certificates(){

return(

<section
id="certificates"
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

Achievements & Certifications

</p>

<h2 className="text-5xl font-bold mt-3">

Learning Never Stops

</h2>

<p className="max-w-2xl mx-auto mt-6 leading-8 text-[var(--text)]">

Courses, internships, workshops and technical experiences
that strengthened my engineering journey.

</p>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

{certificates.map((item,index)=>(

<motion.div

key={index}

initial={{
opacity:0,
y:40
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
rounded-[30px]
p-8
text-center
"

>

<div className="text-5xl text-[var(--primary)] flex justify-center">

{item.icon}

</div>

<h3 className="text-2xl font-bold mt-6">

{item.title}

</h3>

<p className="mt-4 text-[var(--text)]">

{item.issuer}

</p>

</motion.div>

))}

</div>

</motion.div>

</Container>

</section>

);

}

export default Certificates;
