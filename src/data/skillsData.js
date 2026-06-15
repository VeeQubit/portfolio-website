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

const skillsData = {
  sectionTitle: "My Skills",

  heading: "Technologies I Work With",

  description:
    "Modern technologies and tools that I use to build secure, scalable and elegant digital solutions.",

  skills: [
    {
      title: "React",
      icon: FaReact,
      color: "text-cyan-500",
    },

    {
      title: "JavaScript",
      icon: SiJavascript,
      color: "text-yellow-500",
    },

    {
      title: "Python",
      icon: FaPython,
      color: "text-blue-500",
    },

    {
      title: "Java",
      icon: FaJava,
      color: "text-red-500",
    },

    {
      title: "C",
      icon: SiC,
      color: "text-blue-600",
    },

    {
      title: "Node JS",
      icon: FaNodeJs,
      color: "text-green-500",
    },

    {
      title: "Express",
      icon: SiExpress,
      color: "text-gray-700",
    },

    {
      title: "PHP",
      icon: FaPhp,
      color: "text-indigo-500",
    },

    {
      title: "Tailwind",
      icon: SiTailwindcss,
      color: "text-cyan-400",
    },

    {
      title: "Bootstrap",
      icon: SiBootstrap,
      color: "text-purple-600",
    },

    {
      title: "MySQL",
      icon: SiMysql,
      color: "text-blue-500",
    },

    {
      title: "MongoDB",
      icon: SiMongodb,
      color: "text-green-600",
    },

    {
      title: "Git",
      icon: FaGitAlt,
      color: "text-orange-500",
    },

    {
      title: "GitHub",
      icon: FaGithub,
      color: "text-black",
    },

    {
      title: "Postman",
      icon: SiPostman,
      color: "text-orange-500",
    },

    {
      title: "Figma",
      icon: FaFigma,
      color: "text-pink-500",
    },
  ],
};

export default skillsData;