import {
  SiFigma,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiCanva,
  SiGit,
  SiPython,
  SiC,
} from "react-icons/si";

/* ---------------------------------------------------------------------- */
/* Data */
/* ---------------------------------------------------------------------- */

const DATA = {
  name: "Bijay Kumar Chaudhary",
  initials: "BKC",
  role: "Frontend Developer · UI/UX & Graphic Designer",
  email: "bijaykuc45@gmail.com",
  github: "https://github.com/bijaychaudhary49",
  linkedin: "https://www.linkedin.com/in/bijaychaudhary/",
  experience: [
    {
      role: "Frontend Developer",
      org: "Sajilo Digital Pvt. Ltd., Butwal",
      period: "Nov 2024 — Present",
    },
    {
      role: "Assistant Teacher — CS",
      org: "Future Light Academy",
      period: "2023 — 2025",
    },
  ],
  leadership: [
    {
      role: "Executive Member, BMC IT Club",
      org: "Bhairahawa Multiple Campus",
      period: "2023 — Present",
    },
    {
      role: "Lead Organizer, Code Olympiad 2081",
      org: "District-level DSA contest",
      period: "2081 B.S.",
    },
  ],
  software: [
    { Icon: SiFigma, label: "Figma" },
    { Icon: SiReact, label: "React" },
    { Icon: SiJavascript, label: "JavaScript" },
    { Icon: SiHtml5, label: "HTML5" },
    { Icon: SiCss, label: "CSS3" },
    { Icon: SiTailwindcss, label: "Tailwind" },
    { Icon: SiCanva, label: "Canva" },
    { Icon: SiGit, label: "Git" },
    { Icon: SiPython, label: "Python" },
    { Icon: SiC, label: "C" },
  ],
  projects: [
    {
      n: "01",
      title: "Sushila Fancy",
      tag: "E-Commerce",
      desc: "Clothing storefront with catalogue, cart & responsive layout.",
      stack: ["ReactJS", "Tailwind"],
      bg: "#4BB8FA",
      text: "#1A1A1A",
      link: "https://www.sushilafancy.com.np/",
    },
    {
      n: "02",
      title: "Code for Change Nepal",
      tag: "NGO Website",
      desc: "Accessible, fast, clean information architecture for an NGO.",
      stack: ["Accessibility", "Performance"],
      bg: "#D9CBA6",
      text: "#1A1A1A",
      link: "https://www.codeforchangenepal.com/",
    },
    {
      n: "03",
      title: "Sajilo Sahayata",
      tag: "Dashboard",
      desc: "Real-time disaster response coordination & resource tracking.",
      stack: ["Real-time UI", "Dashboard"],
      bg: "#9CA77A",
      text: "#F6EFE2",
      link: "https://sajilo-sahayata.onrender.com/",
    },
    {
      n: "04",
      title: "EduVibe",
      tag: "E-Learning",
      desc: "E-learning SPA with course catalogue & progress dashboard.",
      stack: ["SPA", "Vercel"],
      bg: "#E0876B",
      text: "#F6EFE2",
      link: "https://e-learning-eight-chi.vercel.app",
    },
    {
      n: "05",
      title: "Code Olympiad 2081",
      tag: "Event Platform",
      desc: "Registration portal for a district-level DSA competition.",
      stack: ["Event", "BMC IT Club"],
      bg: "#8E97C9",
      text: "#F6EFE2",
      link: "https://codeolympiad2081.netlify.app/",
    },
  ],
  education: [
    {
      degree: "BSc. Computer Science & IT",
      org: "Bhairahawa Multiple Campus, Rupandehi",
      period: "2021 — 2026",
    },
    {
      degree: "Higher Secondary (+2 Science)",
      org: "Manimukunda Secondary School",
      period: "2019 — 2021 · GPA 3.36",
    },
    {
      degree: "Secondary Education (SEE)",
      org: "Future Light Academy",
      period: "2009 — 2019 · GPA 3.65",
    },
  ],
};

export default DATA