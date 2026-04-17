export const profile = {
  name: "Emi Isushi",
  role: "AI-Assisted Frontend Developer",
  location: "Surabaya, Indonesia",
  email: "emi.isushi.dev@gmail.com",
  phone: "+62 812-3456-7890",
  tagline:
    "Building modern interfaces with AI tools, thoughtful design systems, and reliable deployment workflows.",
  bio: "I am a developer focused on turning ideas into polished web experiences. My current focus is AI-assisted product building with v0.dev, Next.js, and component-driven design. I enjoy working from fast prototypes to production-ready deployments, combining creative direction with engineering discipline.",
  summary:
    "I combine UI engineering skills with practical AI workflows to design and ship responsive products quickly. My goal is to grow into a product engineer who can lead both frontend architecture and user experience strategy.",
  social: {
    github: "https://github.com/emiisushi",
    linkedin: "https://www.linkedin.com/in/emiisushi",
    portfolio: "https://emiisushi.dev",
  },
};

export const skills = {
  frontend: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn UI",
    "Responsive Design",
  ],
  aiWorkflow: [
    "v0.dev Prompting",
    "UI Iteration with AI",
    "Component Prompt Refinement",
    "AI-assisted Prototyping",
  ],
  tools: [
    "Git & GitHub",
    "Vercel",
    "Figma",
    "Postman",
    "Notion",
    "VS Code",
  ],
};

export const experiences = [
  {
    title: "Frontend Developer Intern",
    organization: "NusaTech Digital",
    period: "Jun 2025 - Sep 2025",
    details: [
      "Implemented reusable React components that reduced page assembly time for the marketing team.",
      "Collaborated with a designer to standardize spacing, typography, and states across landing pages.",
      "Improved Lighthouse performance scores by optimizing image rendering and layout shifts.",
    ],
  },
  {
    title: "University Project - Smart Campus Services Portal",
    organization: "Informatics Program, Semester 5",
    period: "Jan 2025 - May 2025",
    details: [
      "Built a role-based portal for student service requests with Next.js and Supabase authentication.",
      "Designed a responsive dashboard with KPI cards and status tracking for service submissions.",
      "Led frontend architecture and code reviews in a 4-person team.",
    ],
  },
  {
    title: "Volunteer Web Mentor",
    organization: "Local Coding Community",
    period: "2024 - Present",
    details: [
      "Mentor beginner students in HTML, CSS, JavaScript, and Git basics through weekend sessions.",
      "Created workshop mini-projects and code walkthrough materials for practical learning.",
    ],
  },
];

export const education = [
  {
    title: "B.Sc. in Informatics (In Progress)",
    organization: "University of Pembangunan Nasional Veteran Jawa Timur",
    period: "2022 - Present",
    details: [
      "Relevant coursework: Human Computer Interaction, Web Development, Software Engineering, Data Structures.",
      "Focus area: frontend engineering and AI-enhanced development workflow.",
    ],
  },
  {
    title: "Certified Front-End Web Developer",
    organization: "Dicoding Indonesia",
    period: "2024",
    details: [
      "Completed capstone focused on accessibility and responsive web interfaces.",
    ],
  },
];

export const projects = [
  {
    name: "AI Generated CV Website",
    stack: ["v0.dev", "Next.js 15", "Shadcn UI", "Vercel"],
    description:
      "Designed and generated the initial UI with v0.dev, then refined architecture, content structure, and theme behavior for production deployment.",
    link: "https://your-vercel-url.vercel.app",
  },
  {
    name: "StudyFlow Task Planner",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    description:
      "A planner for students to prioritize assignments and monitor weekly study load with simple analytics.",
    link: "https://github.com/emiisushi/studyflow",
  },
  {
    name: "Campus Event Hub",
    stack: ["React", "Tailwind CSS", "Firebase"],
    description:
      "A student event portal supporting organizer uploads, category filters, and registration tracking.",
    link: "https://github.com/emiisushi/campus-event-hub",
  },
];

export const aiProcess = {
  v0ProjectLink: "https://v0.dev/chat/your-project-link",
  notes: [
    "Started with a detailed prompt that specified profile sections, professional tone, and responsive behavior.",
    "Iterated in v0.dev to refine hierarchy, card layouts, and mobile spacing before exporting code.",
    "Integrated exported structure into a clean Next.js app and replaced generated placeholders with meaningful profile content.",
    "Added theme toggling, reusable components, and deployment-ready documentation.",
  ],
};
