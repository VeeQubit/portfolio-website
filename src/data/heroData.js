import profile from "../assets/images/profile.jpeg";

const heroData = {
  greeting: "Hello There 👋",

  firstName: "Varnaja",

  lastName: "Uthayaraj",

  roles: [
    "Software Engineer",
    "Cybersecurity Enthusiast",
    "AI / ML Enthusiast",
    "Full Stack Developer",
  ],

  description:
    "Final Year Computer Engineering Undergraduate at the University of Jaffna with a strong passion for secure software engineering, artificial intelligence and full stack development. I enjoy building elegant, scalable and impactful digital experiences.",

  profileImage: profile,

  profileAlt: "Varnaja Uthayaraj",

  buttons: [
    {
      text: "Download CV",
      href: "/resume.pdf",
    },
    {
      text: "Contact Me",
      href: "#contact",
    },
  ],

  stats: [
    {
      value: "15+",
      label: "Projects",
    },
    {
      value: "20+",
      label: "Technologies",
    },
    {
      value: "5+",
      label: "Certifications",
    },
  ],

  badges: [
    "🚀 Full Stack",
    "🤖 AI/ML",
  ],
};

export default heroData;