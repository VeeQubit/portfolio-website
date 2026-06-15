import { motion } from "framer-motion";
import Container from "../../components/layout/Container";

import {
  FaReact,
  FaPython,
  FaJava,
  FaNodeJs,
  FaPhp,
  FaGithub,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiExpress,
  SiBootstrap,
  SiC,
} from "react-icons/si";

const skills = [

  {
    title: "React",
    icon: <FaReact />,
    color: "text-cyan-500",
  },

  {
    title: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-500",
  },

  {
    title: "Python",
    icon: <FaPython />,
    color: "text-blue-500",
  },

  {
    title: "Java",
    icon: <FaJava />,
    color: "text-red-500",
  },

  {
    title: "C",
    icon: <SiC />,
    color: "text-blue-600",
  },

  {
    title: "Node JS",
    icon: <FaNodeJs />,
    color: "text-green-500",
  },

  {
    title: "Express",
    icon: <SiExpress />,
    color: "text-gray-700",
  },

  {
    title: "PHP",
    icon: <FaPhp />,
    color: "text-indigo-500",
  },

  {
    title: "Tailwind",
    icon: <SiTailwindcss />,
    color: "text-cyan-400",
  },

  {
    title: "Bootstrap",
    icon: <SiBootstrap />,
    color: "text-purple-600",
  },

  {
    title: "MySQL",
    icon: <SiMysql />,
    color: "text-blue-500",
  },

  {
    title: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-600",
  },

  {
    title: "Git",
    icon: <FaGitAlt />,
    color: "text-orange-500",
  },

  {
    title: "GitHub",
    icon: <FaGithub />,
    color: "text-black",
  },

  {
    title: "Postman",
    icon: <SiPostman />,
    color: "text-orange-500",
  },

  {
    title: "Figma",
    icon: <FaFigma />,
    color: "text-pink-500",
  },

];

function Skills(){

return(

<section

id="skills"

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

My Skills

</p>

<h2
className="
text-5xl
font-bold
mt-3
">

Technologies
I Work With

</h2>

<p
className="
max-w-2xl
mx-auto
mt-6
leading-8
text-[var(--text)]
">

Modern technologies and tools that I use to build
secure, scalable and elegant digital solutions.

</p>

<div
className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-8
mt-20
">
{skills.map((skill, index) => (

  <motion.div

    key={skill.title}

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

      delay:index*0.05

    }}

    viewport={{

      once:true

    }}

    whileHover={{

      y:-10,

      scale:1.03

    }}

    className="
    glass
    hover-card
    rounded-[30px]
    p-8
    text-center
    shadow-lg
    transition-all
    duration-300
    cursor-pointer
    group
    "

  >

    <div
      className={`
      text-6xl
      flex
      justify-center
      mb-6
      ${skill.color}
      group-hover:scale-110
      transition-all
      duration-300
      `}
    >

      {skill.icon}

    </div>

    <h3
      className="
      text-2xl
      font-semibold
      "
    >

      {skill.title}

    </h3>

    <p
      className="
      mt-3
      text-sm
      text-[var(--text)]
      "
    >

      Modern Development

    </p>

  </motion.div>

))}

</div>

</motion.div>

</Container>

</section>

);

}

export default Skills;