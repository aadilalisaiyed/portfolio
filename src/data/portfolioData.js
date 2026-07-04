// ============================================================
// portfolioData.js — Centralized configuration for Aadil Saiyed's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Aadil Saiyed",
  firstName: "Aadil",
  brandName: "Aadil Saiyed",
  title: "AI Developer & Software Engineer",
  location: "Ahmedabad, Gujarat",
  phone: "+91-9408744578",
  emails: {
    primary: "aadil.saiyed0327@gmail.com",
  },
  summary:
    "Computer Science undergraduate with hands-on experience in MERN stack, scalable backend systems, and ML-driven applications. Strong foundation in data structures and system design, with practical work in Large Language Models (LLMs), NLP, Computer Vision, and Generative AI to build intelligent, real-world software products.",
  resumeUrl: "/Aadil_Saiyed_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/aadilalisaiyed",
  linkedin: "https://linkedin.com/in/aadil-saiyed-31a471330",
  instagram: "https://www.instagram.com/mr_saiyed_27_03/",
  kaggle: "https://www.kaggle.com/aadilsaiyed",
};

export const heroContent = {
  greeting: "Hi, I'm Aadil Saiyed",
  titleHighlight: "AI Developer & Software Engineer",
  subtitle:
    "I build intelligent applications using MERN Stack, Python, and Generative AI — from full-stack platforms to computer vision systems.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:aadil.saiyed0327@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Aadil,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Aadil_Saiyed_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Aadil Saiyed</span>, a Computer Science undergraduate based in Ahmedabad, Gujarat, passionate about building intelligent, scalable software using MERN Stack, Python, and Generative AI.`,
  techStack: ["React", "Python", "AI/ML"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into intelligent full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints — identifying the right AI models and architecture for the problem.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and intelligent data pipelines that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends, responsive frontends, and ML pipelines using modern tech stacks like MERN, FastAPI, and PyTorch.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, model evaluation, performance optimization, and seamless deployment — followed by ongoing monitoring and support.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "C++", level: 85 },
        { name: "Java", level: 78 },
        { name: "C", level: 80 },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Tailwind CSS", level: 88 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 86 },
        { name: "REST APIs", level: 90 },
        { name: "FastAPI", level: 80 },
        { name: "EJS", level: 75 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 83 },
        { name: "MongoDB", level: 85 },
      ],
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "PyTorch", level: 82 },
        { name: "Scikit-Learn", level: 85 },
        { name: "OpenCV", level: 80 },
        { name: "NumPy / Pandas", level: 88 },
        { name: "Matplotlib / Seaborn", level: 82 },
      ],
    },
    {
      title: "Generative AI & LLMs",
      skills: [
        { name: "Prompt Engineering", level: 85 },
        { name: "LangChain", level: 80 },
        { name: "OpenAI API", level: 82 },
        { name: "HuggingFace", level: 78 },
        { name: "RAG", level: 78 },
      ],
    },
    {
      title: "CS Fundamentals",
      skills: [
        { name: "Data Structures & Algorithms", level: 88 },
        { name: "OOP", level: 90 },
        { name: "DBMS", level: 86 },
        { name: "Operating Systems", level: 82 },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "MATLAB", level: 78 },
        { name: "Render", level: 80 },
      ],
    },
  ],
};

// Achievements Data (repurposed from Internships)
export const achievementsList = [
  {
    title: "2nd Runner-Up — HackTheSpring'26 HackX",
    description:
      "Secured 3rd place at the HackTheSpring'26 HackX Hackathon at Government Engineering College, Gandhinagar — competing against dozens of teams with an innovative AI-powered solution built under time pressure.",
    venue: "GEC Gandhinagar",
    year: "2026",
    badge: "🏆 Hackathon",
    tags: ["AI/ML", "Full Stack", "Team Competition", "Innovation"],
  },
  {
    title: "Codeversity Program — IIT Gandhinagar",
    description:
      "Completed the Codeversity coding and computer science skill-building initiative, organized in association with IIT Gandhinagar and IITGN-X extension arm.",
    venue: "IIT Gandhinagar",
    year: "2025",
    badge: "🎓 Academic",
    tags: ["Coding", "Computer Science", "IIT Gandhinagar"],
  },
  {
    title: "Orbital Nanosat Exploration Workshop",
    description:
      "Participated in a hands-on workshop on nanosatellites and orbital/space exploration technology, hosted at Birla Vishvakarma Mahavidyalaya.",
    venue: "BVM",
    year: "2025",
    badge: "🛰️ Workshop",
    tags: ["Space Tech", "Nanosatellites", "Engineering"],
  },
  {
    title: "AI Workshop & Hackathon — Techfest IIT Bombay",
    description:
      "Participated in an Artificial Intelligence workshop and hackathon organized by HCL GUVI as part of Techfest IIT Bombay — one of Asia's largest science and technology festivals.",
    venue: "IIT Bombay / HCL GUVI",
    year: "2024",
    badge: "🤖 AI",
    tags: ["Artificial Intelligence", "Hackathon", "IIT Bombay"],
  },
];

// Leadership Data
export const leadershipList = [
  {
    title: "Secretary — IEEE Student Branch, RRU",
    description:
      "Coordinated core team operations, managed internal communication, and oversaw scheduling for chapter meetings and technical events at Rashtriya Raksha University.",
    role: "Secretary",
    badge: "Leadership",
  },
  {
    title: "IEEE Gujarat Section — Student Member",
    description:
      "Active IEEE student membership under the Gujarat Section, participating in technical events, networking with professionals, and contributing to chapter activities.",
    role: "Student Member",
    badge: "Professional",
  },
  {
    title: "Skill Development Bootcamp — BVM",
    description:
      "Completed an intensive skill-development bootcamp at Birla Vishvakarma Mahavidyalaya, focused on building practical, industry-relevant technical skills.",
    role: "Bootcamp Graduate",
    badge: "Innovation",
  },
];

// Soft Skills Data
export const softSkillsList = [
  {
    name: "Leadership",
    icon: "crown",
    desc: "Managing IEEE chapter operations, coordinating teams, and driving technical event delivery.",
  },
  {
    name: "Problem Solving",
    icon: "puzzle",
    desc: "Breaking down complex engineering and AI challenges into clean, modular, and efficient solutions.",
  },
  {
    name: "Team Collaboration",
    icon: "handshake",
    desc: "Building hackathon projects under pressure and collaborating across engineering disciplines.",
  },
  {
    name: "Communication",
    icon: "chat",
    desc: "Clear, concise, and structured interactions in both technical and team settings.",
  },
  {
    name: "Adaptability",
    icon: "bolt",
    desc: "Quick to adopt new frameworks and tools — from LangChain and FastAPI to PyTorch and RAG pipelines.",
  },
  {
    name: "Creativity",
    icon: "palette",
    desc: "Blending AI intelligence with clean software architecture to build premium, user-focused experiences.",
  },
  {
    name: "Analytical Thinking",
    icon: "chart",
    desc: "Strong foundation in DSA, system design, and ML model evaluation for data-driven decision making.",
  },
  {
    name: "Time Management",
    icon: "clock",
    desc: "Balancing B.Tech studies, IEEE responsibilities, hackathon competitions, and building software projects.",
  },
];

export const projects = [
  {
    id: "placement-portal",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Integrated Placement Management System",
    description:
      "A multi-role college placement portal with Admin, Coordinator, and Student dashboards — supporting company management, application tracking, and automated deadline enforcement for 200+ student users. Features JWT-based authentication with role-based access control and a RESTful API backend ensuring secure, scalable data flow across all user roles.",
    techTags: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
      "JWT",
      "REST API",
    ],
    links: {
      github: "#",
      demo: "https://integrated-placement-management-sys.vercel.app/dashboard",
    },
    isFlagship: true,
  },
  {
    id: "sparkone",
    number: "02",
    badge: "🤖 AI Project",
    title: "Sparkone — AI Cashier Theft Detection",
    description:
      "A real-time AI-powered theft detection system for restaurant cashier stations. Uses FaceNet512 deep learning model to identify authorized cashier personnel and verify shift schedule compliance. Compares detected face identity against a pre-registered staff database and cross-checks timestamps with allocated shift windows — triggering automated alerts for unauthorized access or timing mismatches.",
    techTags: [
      "Python",
      "Computer Vision",
      "FaceNet512",
      "FastAPI",
      "OpenCV",
      "Deep Learning",
    ],
    links: {
      github: "#",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "MLOps for Generative AI",
      issuer: "Google Cloud",
      icon: "cloud",
    },
    {
      name: "Introduction to Generative AI",
      issuer: "Google Cloud",
      icon: "robot",
    },
    {
      name: "HackTheSpring — 2nd Runner Up",
      issuer: "GEC Gandhinagar",
      icon: "trophy",
    },
    {
      name: "Python Programming",
      issuer: "Kaggle",
      icon: "code",
    },
    {
      name: "Introduction to Deep Learning",
      issuer: "Infosys Springboard",
      icon: "brain",
    },
    {
      name: "MATLAB Certified",
      issuer: "IEEE Gujarat / MATLAB@UCL",
      icon: "compass",
    },
  ],
  viewAllUrl:
    "https://www.linkedin.com/in/aadil-saiyed-31a471330/details/certifications/",
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "Rashtriya Raksha University, Gandhinagar",
  cgpa: "8.8",
  graduation: "2028",
};

export const footerContent = {
  taglines: [
    "AI Development & Full Stack Engineering",
    "Python · React · LLMs · Computer Vision",
    "Intelligent Software Products",
  ],
  credential: "B.Tech CSE · CGPA 8.8",
  copyright: `© ${new Date().getFullYear()} Aadil Saiyed | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
