import labScheduling from "../assets/images/projects/lab-scheduling.jpg";
import courseRegistration from "../assets/images/projects/course-registration.png";
import sentimentIntent from "../assets/images/projects/sentiment-intent.jpg";
import portfolio from "../assets/images/projects/portfolio.png";

const projectsData = [
  {
    id: 1,
    title: "Lab Scheduling Management System",
    image: labScheduling,
    description:
      "Automated university laboratory scheduling system with conflict detection and timetable generation.",
    stack: ["React", "PHP", "MySQL"],
    github: "#",
    demo: "#",
  },

  {
    id: 2,
    title: "Course Registration System",
    image: courseRegistration,
    description:
      "University course registration platform with semester management and student enrollment.",
    stack: ["PHP", "MySQL", "Bootstrap"],
    github: "#",
    demo: "#",
  },

  {
    id: 3,
    title: "Sentiment & Intent Detection",
    image: sentimentIntent,
    description:
      "AI-powered NLP system that classifies sentiment and detects user intent using Machine Learning.",
    stack: ["Python", "Scikit Learn", "NLP"],
    github: "#",
    demo: "#",
  },

  {
    id: 4,
    title: "Personal Portfolio",
    image: portfolio,
    description:
      "Modern animated portfolio built using React, Tailwind CSS and Framer Motion.",
    stack: ["React", "Tailwind", "Framer Motion"],
    github: "#",
    demo: "#",
  },
];

export default projectsData;