const experience = [
  {
    section: "Software Development",
    title: "Junior Web Developer",
    dates: "June 2024 – May 2025",
    org: "Space Science and Engineering Center at University of Wisconsin-Madison",
    location: "Madison, WI",
    skills: ["JavaScript", "React", "PHP", "SQL", "UI/UX", "Figma", "Relational Databases"],
    bullets: [
      "Developed full-stack web applications for analyzing satellite imagery, using a React front-end and PHP back-end.",
      "Built relational databases using SQL, enabling efficient storage and organization of large sets of imagery data.",
      "Created interactive and intuitive UI / UX software designs with Figma, focusing on ease of use and accessibility.",
      "Engineered a volcanic ash cloud classifier allowing researchers to categorize satellite imagery to train AI models.",
    ],
  },
  {
    section: "AI Recommendation Engine",
    title: "Software Developer – Capstone Project",
    dates: "January 2025 – April 2025",
    org: "PBS Wisconsin: AI Recommendation Engine",
    location: "Madison, WI",
    skills: ["AWS", "AWS Personalize", "S3", "Lambda", "API Gateway", "Glue", "Step Functions", "JavaScript", "React", "PHP", "Agile/Scrum"],
    bullets: [
      "Built an AI recommendation engine for PBS Wisconsin's streaming site to support a personalized user experience.",
      "Integrated AWS services (Personalize, S3, Lambda, API Gateway, Glue, Step Functions) into a React and PHP site to generate and update suggestions as media catalog grows.",
      "Collaborated in a four-person agile team, following scrum methodology to deliver iterative updates and meet weekly milestones.",
    ],
  },
  {
    section: "Teaching",
    title: "Peer Mentor",
    dates: "September 2024 – April 2025",
    org: "Undergraduate Teaching Assistant for CS571 – Building User Interfaces, University of Wisconsin-Madison",
    location: "Madison, WI",
    skills: ["HTML", "CSS", "JavaScript", "React", "React Native", "UI/UX Heuristics"],
    bullets: [
      "Assisted students in office hours with front-end development coursework including: HTML, CSS, JavaScript, React, and React Native.",
      "Guided students to follow user-centered design principles, heuristics, and methods for building web, mobile, and voice user interfaces (VUIs).",
      "Facilitated a positive learning environment for a course with 300+ students.",
    ],
  },
];

export default experience;

export const sideProjects = [
  { name: "Badger News",   desc: "Simple mobile newspaper app about Wisconsin Badgers", lang: "React Native", href: "https://github.com/river-alaqidy/BadgerNews" },
  { name: "Snippet Box",   desc: "Practice structuring Golang applications, Lets people paste and share snippets of text", lang: "Go", href: "https://github.com/river-alaqidy/snippetbox" },
  { name: "Computer Graphics Hand", desc: "3D computer graphics scene of a hand", lang: "JavaScript",      href: "https://github.com/river-alaqidy/Computer-Graphics-Hand" },
  { name: "Housing Affordability",  desc: "Data analytics research conducted on the state of housing affordability in the United States.", lang: "Python",  href: "https://github.com/river-alaqidy/Housing-Affordability" },
];
