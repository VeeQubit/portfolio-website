import profile from "../assets/images/profile.jpeg";

const aboutData = {
  sectionTitle: "About Me",

  heading: "Passionate About Building Secure & Intelligent Software",

  description: `
I am a Final Year Computer Engineering Undergraduate
at the University of Jaffna with a strong passion
for Cyber Security, Artificial Intelligence and
Full Stack Development.

I enjoy building scalable applications,
designing elegant user experiences,
and solving real-world problems using
modern technologies.
`,

  profileImage: profile,

  topBadge: "🌿 Nature Inspired",

  bottomBadge: "💻 Software Engineer",

  buttons: {
    resume: {
      text: "Download CV",
      href: "/resume.pdf",
    },

    projects: {
      text: "View Projects",
      href: "#projects",
    },
  },

  stats: [
    {
      value: "15+",
      label: "Completed Projects",
    },

    {
      value: "20+",
      label: "Technologies",
    },

    {
      value: "AI",
      label: "Machine Learning Enthusiast",
    },

    {
      value: "CS",
      label: "Cyber Security Enthusiast",
    },
  ],
};

export default aboutData;