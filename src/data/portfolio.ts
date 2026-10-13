/**
 * ============================================================================
 *  PORTFOLIO CONTENT. Edit this file to update your website.
 * ============================================================================
 *
 *  Everything visitors read on the site comes from this file. You should not
 *  need to touch the components in /src/components to update your content.
 *
 *  PLACEHOLDERS
 *  - Any text that starts with "TODO:" is treated as a placeholder. While
 *    `site.showPlaceholders` is true, the site shows it as a subtle
 *    "To be added" note so you can see what's missing.
 *  - Set `site.showPlaceholders` to false before sharing the site publicly:
 *    unfinished sections are then hidden instead of shown as notes.
 *  - Search this file for "TODO" (Ctrl+F in VS Code) to find every placeholder.
 *
 *  IMAGES
 *  - Put images in /public/images/... and reference them here WITHOUT the
 *    word "public", e.g. "/images/projects/study-buddy/homepage.png".
 *  - If a referenced image doesn't exist yet, the site shows a clean
 *    placeholder instead of a broken image. Add the file and it appears.
 *  - File names are case-sensitive once deployed: "Homepage.PNG" is not
 *    the same as "homepage.png".
 */

import type {
  Certification,
  ExperienceItem,
  Highlight,
  Project,
  ProjectCategory,
  SkillCategory,
} from "./types";

/* ---------------------------------------------------------------------------
 * SITE & PERSONAL INFO
 * ------------------------------------------------------------------------- */

export const site = {
  name: "Kevin Enrico M. Ang",
  shortName: "Kevin Ang",
  headline: "Aspiring IT Professional | Web Developer | AI-Assisted Developer",
  roles: ["Aspiring IT Professional", "Web Developer", "AI-Assisted Developer"],
  description:
    "Portfolio of Kevin Ang, an Information Technology student at the University of Asia and the Pacific interested in web development, software quality assurance, and system analysis.",

  // Your live address on Vercel. If you rename the domain in Vercel, update it here too.
  // Used for SEO and link previews on LinkedIn, Messenger, etc.
  url: "https://portfolio-umber-iota-43.vercel.app",

  email: "kevin.enrico.ang@gmail.com",
  location: "Pasig City, Philippines",

  education: {
    degree: "Bachelor of Science in Information Technology",
    school: "University of Asia and the Pacific",
    schoolShort: "UA&P",
    graduation: "2027",
  },

  interests: [
    "Web development",
    "Software quality assurance",
    "System analysis",
    "IT solutions",
    "Troubleshooting",
  ],

  // Shown as a small badge at the top of the hero. Set to "" to hide it.
  availability: "Open to IT internship opportunities",

  // Place your CV at: public/cv/Kevin-Ang-CV.pdf
  // If the file is missing, the "Download CV" buttons become "Request CV" (opens an email).
  cvPath: "/cv/Kevin-Ang-CV.pdf",

  // true  = show "To be added" notes for unfinished content (useful while editing)
  // false = hide unfinished content (use this before sending the link to recruiters)
  showPlaceholders: true,
};

export const socials = {
  // TODO: Paste your full LinkedIn URL, e.g. "https://www.linkedin.com/in/your-name/"
  linkedin: "",
  // Your GitHub profile.
  github: "https://github.com/kevin20040504",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

/* ---------------------------------------------------------------------------
 * HERO
 * ------------------------------------------------------------------------- */

export const hero = {
  heading: "Building practical solutions through technology.",
  intro:
    "I'm Kevin Ang, an Information Technology student at the University of Asia and the Pacific, interested in web development, software quality assurance, and system analysis. I enjoy turning ideas into practical digital solutions while continuously improving my technical skills.",
};

/* ---------------------------------------------------------------------------
 * ABOUT
 * ------------------------------------------------------------------------- */

export const about = {
  paragraphs: [
    "I'm an Information Technology student at the University of Asia and the Pacific, graduating in 2027. So far my practical experience comes from academic projects: building web applications, designing a cloud architecture on AWS, and developing a student records management system as my team's capstone project.",
    "I'm most interested in web development, software quality assurance, and system analysis: understanding how a system should work, helping build it, and checking that it actually does. I also enjoy troubleshooting, whether that means tracking down a bug or diagnosing a hardware problem.",
    "Outside the classroom, I'm a co-captain of the UA&P Men's Basketball Team, which has taught me a lot about teamwork, accountability, and managing my time. I'm looking for an IT internship where I can contribute to a real team and keep learning.",
  ],
  highlights: [
    {
      title: "Web application development",
      description: "Building responsive interfaces and connecting them to back-end APIs and databases.",
      icon: "layout",
    },
    {
      title: "System analysis & design",
      description: "Breaking down requirements, user roles, and data before writing code.",
      icon: "workflow",
    },
    {
      title: "Software testing & QA",
      description: "Checking that features behave as intended and catching issues early.",
      icon: "bug",
    },
    {
      title: "Troubleshooting",
      description: "Working through software and hardware problems methodically, one cause at a time.",
      icon: "wrench",
    },
    {
      title: "Collaboration & communication",
      description: "Working in project teams and on the court, where clear communication matters.",
      icon: "users",
    },
    {
      title: "Responsible AI-assisted development",
      description: "Using AI tools to learn and work faster while understanding what I build.",
      icon: "sparkles",
    },
  ] satisfies Highlight[],
  ai: {
    title: "How I use AI in my work",
    intro:
      "I use AI tools as part of my development workflow, and I'm open about it. AI helps me work more productively and learn faster, but it doesn't replace understanding the code I'm responsible for.",
    principles: [
      "I use AI to explore approaches, explain unfamiliar code, and speed up repetitive tasks.",
      "I review, test, and make sure I understand AI-suggested code before using it.",
      "I keep building my fundamentals through coursework, certifications, and hands-on practice.",
      "I'm transparent about when and how AI helped on a project.",
    ],
  },
};

/* ---------------------------------------------------------------------------
 * PROJECTS
 * ---------------------------------------------------------------------------
 *  HOW TO ADD SCREENSHOTS TO A PROJECT
 *  1. Save the image in that project's folder, e.g.
 *       public/images/projects/study-buddy/homepage.png
 *  2. Make sure the project's `screenshots` list below has an entry with
 *     the same path, e.g. { src: "/images/projects/study-buddy/homepage.png", caption: "Homepage" }
 *     (Each project already has entries for the screenshots you planned. Just
 *     save files with those names, or edit the names here.)
 *  3. To add MORE screenshots, add another { src, caption } line.
 *  4. The `cover` is the image on the project card. It can point to the
 *     same file as one of the screenshots.
 *
 *  Recommended: PNG or JPG, 1600×1000 px or similar (16:10). Larger files are
 *  automatically resized and compressed by Next.js.
 * ------------------------------------------------------------------------- */

/** The filter buttons above the project grid ("All Projects" is added automatically). */
export const projectFilters: ProjectCategory[] = [
  "Web Development",
  "Cloud & AWS",
  "System Development",
];

export const projects: Project[] = [
  /* ------------------------------ STUDY BUDDY ------------------------------ */
  {
    slug: "study-buddy",
    title: "Study Buddy",
    year: "2025",
    category: "Web Development",
    context: "Academic project · University of Asia and the Pacific",
    status: "Academic Project",
    summary:
      "A web-based study-support platform designed to help students with their learning needs.",
    cover: {
      src: "/images/projects/study-buddy/homepage.png",
      caption: "Study Buddy homepage",
    },
    screenshots: [
      { src: "/images/projects/study-buddy/homepage.png", caption: "Homepage" },
      { src: "/images/projects/study-buddy/main-interface.png", caption: "Main interface" },
      { src: "/images/projects/study-buddy/features.png", caption: "Key features" },
      { src: "/images/projects/study-buddy/additional-page.png", caption: "Additional page" },
    ],
    // TODO: List the technologies you actually used, e.g. ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    technologies: [],
    overview:
      "Study Buddy is a web-based study-support platform built as an academic project at UA&P. It is designed to help students with their learning needs in one place.",
    problem:
      "TODO: Describe the problem Study Buddy addresses, e.g. what makes it hard for students to get study help today.",
    objectives: ["TODO: List 2–4 goals of the project, e.g. what students should be able to do with it."],
    features: [
      // TODO: Add the features you built. Example:
      // { name: "Tutor search", description: "Students can find tutors by subject.", state: "implemented" },
    ],
    role: ["TODO: Describe your role and what you personally built or contributed."],
    implementation: [
      "TODO: Explain how it works technically: front end, back end, database, hosting.",
    ],
    challenges: [
      // TODO: Example:
      // { challenge: "Users could submit empty forms.", approach: "Added client-side and server-side validation." },
    ],
    takeaways: ["TODO: What did you learn from this project?"],
    links: {
      github: "", // TODO: Add repository URL if public
      demo: "", // TODO: Add live demo URL if deployed
    },
  },

  /* ------------------------- AWS IMAGE MODERATION ------------------------- */
  {
    slug: "aws-moderation",
    title: "AWS-Based Image Content Moderation",
    fullTitle: "AWS-Based Image Content Moderation System Architecture",
    year: "2026",
    category: "Cloud & AWS",
    context: "Academic project · University of Asia and the Pacific",
    status: "Academic Project",
    summary:
      "A cloud-based image moderation solution designed to identify potentially inappropriate image uploads before publication.",
    cover: {
      src: "/images/projects/aws-moderation/architecture-diagram.png",
      caption: "Architecture diagram",
    },
    screenshots: [
      {
        src: "/images/projects/aws-moderation/architecture-diagram.png",
        caption: "System architecture diagram",
      },
      { src: "/images/projects/aws-moderation/aws-console.png", caption: "AWS console configuration" },
      { src: "/images/projects/aws-moderation/workflow.png", caption: "Moderation workflow" },
      { src: "/images/projects/aws-moderation/components.png", caption: "System components" },
    ],
    // TODO: Replace with the specific AWS services you used, e.g. ["Amazon S3", "AWS Lambda", "Amazon Rekognition"]
    technologies: ["AWS"],
    overview:
      "A cloud architecture for screening user-uploaded images, designed as an academic project at UA&P. Images are checked for potentially inappropriate content before they are published.",
    problem:
      "Platforms that accept user-uploaded images need a reliable way to catch potentially inappropriate content before it becomes visible to other users.",
    objectives: [
      "Design a cloud architecture that screens uploaded images before they are published.",
      "TODO: Add your other objectives, e.g. scalability, cost, or automation goals.",
    ],
    features: [
      // TODO: Describe the components of your architecture. Example:
      // { name: "Automatic image analysis", description: "Each upload is analysed before publishing.", state: "implemented" },
    ],
    role: ["TODO: Describe your role and contributions."],
    implementation: [
      "TODO: Explain the architecture: which AWS services are used and how an image moves through the system.",
    ],
    challenges: [],
    takeaways: ["TODO: What did you learn about cloud architecture and AWS?"],
    links: {
      github: "",
      demo: "",
    },
  },

  /* ------------------------------ HOMEFURGOOD ------------------------------ */
  {
    slug: "homefurgood",
    title: "HomeFurGood",
    year: "2026",
    category: "Web Development",
    context: "Ongoing project",
    status: "In Progress",
    summary:
      "An ongoing pet adoption platform concept that helps users discover adoptable pets and shelters through a centralized platform.",
    cover: {
      src: "/images/projects/homefurgood/landing-page.png",
      caption: "HomeFurGood landing page",
    },
    screenshots: [
      { src: "/images/projects/homefurgood/landing-page.png", caption: "Landing page" },
      { src: "/images/projects/homefurgood/pet-listings.png", caption: "Pet listings" },
      { src: "/images/projects/homefurgood/shelter-profiles.png", caption: "Shelter profiles" },
      { src: "/images/projects/homefurgood/map-view.png", caption: "Map-based browsing" },
      {
        src: "/images/projects/homefurgood/adoption-application.png",
        caption: "Adoption application",
      },
    ],
    // TODO: List the technologies you're actually using.
    technologies: [],
    overview:
      "HomeFurGood is an ongoing pet adoption platform concept. It aims to bring adoptable pets and animal shelters together in one place so that people can find a pet to adopt more easily.",
    problem:
      "People looking to adopt often have to check many shelters separately. HomeFurGood aims to centralize pet and shelter information on a single platform.",
    objectives: [
      "Help users discover adoptable pets and nearby shelters in one place.",
      "Make the adoption application process simpler for users.",
    ],
    // As you build each feature, change its state from "planned" to "in-progress" or "implemented".
    features: [
      { name: "Shelter discovery", state: "planned" },
      { name: "Map-based browsing", state: "planned" },
      { name: "User accounts", state: "planned" },
      { name: "Pet search filters", state: "planned" },
      { name: "Adoption applications", state: "planned" },
    ],
    role: ["TODO: Describe your role and what you're building."],
    implementation: ["TODO: Describe the tech stack and architecture once decided."],
    challenges: [],
    takeaways: [],
    links: {
      github: "",
      demo: "",
    },
  },

  /* ------------------------------- TMCC ASRMS ------------------------------ */
  {
    slug: "tmcc-asrms",
    title: "TMCC Automated Student Records Management System",
    fullTitle:
      "Trece Martires City College Automated Student Records Management System (TMCC ASRMS)",
    // TODO: Confirm the year(s), e.g. "2025–2026"
    year: "2026",
    category: "System Development",
    context: "Capstone project · Team project for Trece Martires City College",
    status: "Capstone Project",
    summary:
      "A centralized student records management system that reduces the registrar's reliance on manual filing and spreadsheet-based indexing.",
    cover: {
      src: "/images/projects/tmcc-asrms/dashboard.png",
      caption: "Dashboard",
    },
    screenshots: [
      { src: "/images/projects/tmcc-asrms/dashboard.png", caption: "Dashboard" },
      {
        src: "/images/projects/tmcc-asrms/records-management.png",
        caption: "Student records management",
      },
      { src: "/images/projects/tmcc-asrms/user-management.png", caption: "User management" },
      {
        src: "/images/projects/tmcc-asrms/database-design.png",
        caption: "Database design (ERD)",
      },
      {
        src: "/images/projects/tmcc-asrms/system-architecture.png",
        caption: "System architecture",
      },
    ],
    // Taken from the project's package.json and composer.json. Edit if needed.
    technologies: [
      "React",
      "React Router",
      "Tailwind CSS",
      "Axios",
      "Laravel 12",
      "PHP",
      "Laravel Sanctum",
      "MySQL",
      "Dompdf",
      "PHPUnit",
    ],
    overview:
      "A web-based system for the registrar's office of Trece Martires City College, developed as our capstone project. It brings student records, enrollment, grades, and document requests into one centralized system.",
    problem:
      "The registrar's office relied on manual filing and spreadsheet-based indexing to manage student records, which limits efficiency when records need to be found, updated, or released.",
    objectives: [
      "Centralize student records in a single database.",
      "Give students, registrar staff, and administrators role-appropriate access.",
      "Digitize record requests from submission to release.",
      "Validate enrollment against each program's curriculum and subject prerequisites.",
    ],
    features: [
      {
        name: "Role-based access control",
        description: "Separate access for students, registrar staff, and administrators.",
        state: "implemented",
      },
      {
        name: "Student records management",
        description: "Create, view, update, and archive student records.",
        state: "implemented",
      },
      {
        name: "Enrollment validation",
        description: "Checks curriculum membership and prerequisites before enrolling a student in a subject.",
        state: "implemented",
      },
      {
        name: "Grade recording and correction",
        state: "implemented",
      },
      {
        name: "Record request workflow",
        description: "Students submit requests; registrar staff review and release them.",
        state: "implemented",
      },
      {
        name: "Transcript PDF generation",
        state: "implemented",
      },
      {
        name: "Student document upload",
        state: "implemented",
      },
      {
        name: "Registrar curriculum builder",
        state: "in-progress",
      },
    ],
    role: [
      "Implemented curriculum validation for enrollment, so a student can only be enrolled in subjects that belong to their program and term.",
      "Worked on showing subject prerequisite information to registrar staff when editing a student's enrollment.",
      "TODO: Add your other contributions (e.g. pages you built, testing, documentation, client meetings).",
    ],
    implementation: [
      "The front end is a React single-page application that talks to a Laravel REST API through Axios. Authentication uses Laravel Sanctum, and every group of API routes is protected by role-checking middleware.",
      "Data is stored in MySQL, with the schema defined through Laravel migrations. Enrollment rules, such as curriculum membership and prerequisites, are implemented as separate validation rules and covered by PHPUnit feature tests.",
      "The system is proposed to run on the local network of the registrar's office.",
    ],
    challenges: [
      // TODO: Add real challenges you faced. Example:
      // { challenge: "Enrollment rules differed between enrollment paths.", approach: "Moved the checks into shared validation rules used by every path." },
    ],
    takeaways: ["TODO: What did the capstone teach you about building systems for real users?"],
    links: {
      github: "", // TODO: Add only if the repository is public and your team agrees
      demo: "",
    },
  },

  /* --------------------------------------------------------------------------
   *  EXAMPLE: copy this block (remove the /* and *\/), paste it above this
   *  comment, and fill it in to add a new project.
   * --------------------------------------------------------------------------
  {
    slug: "my-new-project",                 // URL becomes /projects/my-new-project
    title: "My New Project",
    year: "2027",
    category: "Web Development",            // "Web Development" | "Cloud & AWS" | "System Development"
    context: "Personal project",
    status: "Completed",                    // "Completed" | "In Progress" | "Academic Project" | "Capstone Project"
    summary: "One or two sentences for the project card.",
    cover: { src: "/images/projects/my-new-project/home.png", caption: "Homepage" },
    screenshots: [
      { src: "/images/projects/my-new-project/home.png", caption: "Homepage" },
      { src: "/images/projects/my-new-project/dashboard.png", caption: "Dashboard" },
      { src: "/images/projects/my-new-project/mobile.png", caption: "Mobile layout", alt: "The dashboard on a phone screen" },
    ],
    technologies: ["Next.js", "TypeScript", "Supabase"],
    overview: "What the project is.",
    problem: "The problem it solves.",
    objectives: ["Goal one", "Goal two"],
    features: [
      { name: "Login", description: "Email and password sign-in.", state: "implemented" },
      { name: "Notifications", state: "planned" },
    ],
    role: ["What I built or contributed."],
    implementation: ["How it works technically."],
    challenges: [{ challenge: "What went wrong", approach: "How I fixed it" }],
    takeaways: ["What I learned"],
    links: {
      github: "https://github.com/your-username/my-new-project",
      demo: "https://my-new-project.vercel.app",
    },
  },
  */
];

/* ---------------------------------------------------------------------------
 * SKILLS
 * Only list things you can explain in an interview. No percentages on purpose.
 * ------------------------------------------------------------------------- */

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Web Development",
    icon: "code",
    description: "Languages and frameworks I've used in coursework and projects.",
    skills: ["HTML", "CSS", "JavaScript", "Java", "React", "Laravel", "PHP", "MySQL", "SQL"],
  },
  {
    title: "Cloud & Architecture",
    icon: "cloud",
    description: "Designing how systems fit together and run in the cloud.",
    skills: ["AWS", "Cloud architecture", "System design", "IT solutions architecture"],
  },
  {
    title: "Quality Assurance & Technical Support",
    icon: "shield",
    description: "Making sure things work, and fixing them when they don't.",
    skills: ["Software testing & QA", "Troubleshooting", "Hardware diagnostics", "Problem-solving"],
  },
  {
    title: "Tools & Development Practices",
    icon: "wrench",
    description: "The tools I use day to day.",
    skills: ["Git", "GitHub", "VS Code", "AI-assisted development"],
  },
];

/* ---------------------------------------------------------------------------
 * CERTIFICATIONS
 *  - Put certificate images (JPG/PNG) or PDFs in public/images/certificates/
 *  - `image` = picture shown on the card (click to enlarge)
 *  - `file`  = PDF that opens in a new tab
 *  - Keep `title` exactly as written on the certificate.
 * ------------------------------------------------------------------------- */

// Newest first. Dates and titles are copied from the certificates themselves.
export const certifications: Certification[] = [
  {
    title: "Introduction to SQL",
    issuer: "Sololearn",
    date: "08 Oct 2026",
    credentialId: "CC-RIPYDLOW",
    verifyUrl: "https://www.sololearn.com/certificates/CC-RIPYDLOW",
    image: "/images/certificates/sololearn-sql.png",
    file: "/images/certificates/sololearn-sql.pdf",
  },
  {
    title: "Responsive Web Design with Bootstrap 5",
    issuer: "Alison",
    date: "24 Aug 2026",
    credentialId: "4513-51451314",
    // Image is the top of the Alison Learner Verification page, with the email line covered.
    image: "/images/certificates/alison-bootstrap-5.jpg",
  },
  {
    title: "Introduction to JavaScript",
    issuer: "Sololearn",
    date: "31 Aug 2025",
    credentialId: "CC-BXWRYHHV",
    verifyUrl: "https://www.sololearn.com/certificates/CC-BXWRYHHV",
    image: "/images/certificates/sololearn-javascript.jpg",
    file: "/images/certificates/sololearn-javascript.pdf",
  },
  {
    title: "Introduction to CSS",
    issuer: "Sololearn",
    date: "25 Aug 2025",
    credentialId: "CC-8G02DNMG",
    verifyUrl: "https://www.sololearn.com/certificates/CC-8G02DNMG",
    image: "/images/certificates/sololearn-css.jpg",
    file: "/images/certificates/sololearn-css.pdf",
  },
  {
    title: "Introduction to HTML",
    issuer: "Sololearn",
    date: "20 Aug 2025",
    credentialId: "CC-YYSMADLN",
    verifyUrl: "https://www.sololearn.com/certificates/CC-YYSMADLN",
    image: "/images/certificates/sololearn-html.jpg",
    file: "/images/certificates/sololearn-html.pdf",
  },
  {
    title: "JavaScript and CSS - Fully Responsive Mobile Ready Website",
    issuer: "Alison",
    date: "18 Aug 2025",
    credentialId: "3874-51451314",
    // Image is the top of the Alison Learner Verification page, with the email line covered.
    image: "/images/certificates/alison-js-css-responsive.jpg",
  },
];

/* ---------------------------------------------------------------------------
 * EXPERIENCE & LEADERSHIP
 *  Add internships or jobs here later with type: "Internship" or "Work Experience".
 *  Newest first.
 * ------------------------------------------------------------------------- */

export const experience: ExperienceItem[] = [
  {
    role: "Co-Captain",
    organization: "UA&P Men's Basketball Team",
    type: "Leadership",
    // TODO: Add your years on the team, e.g. "2023 – Present"
    period: "TODO: Add years",
    description:
      "Help lead the team as a co-captain while balancing training and competition with a full IT course load.",
    highlights: [
      "Support teammates on and off the court and help keep the team focused on shared goals.",
      "Act as a link between players and coaches and take accountability for the team's preparation.",
      "TODO: Add a specific responsibility or moment you're proud of (no need to exaggerate).",
    ],
    skills: [
      "Teamwork",
      "Communication",
      "Leadership",
      "Accountability",
      "Time management",
      "Adaptability",
    ],
  },
  {
    role: "Capstone Project Team Member",
    organization: "TMCC ASRMS · Capstone project",
    type: "Academic Collaboration",
    period: "2026",
    description:
      "Worked in a development team to build a student records management system for the registrar's office of Trece Martires City College.",
    highlights: [
      "Divided modules among team members and integrated work through a shared Git repository.",
      "Owned the enrollment curriculum validation feature, which is covered by automated tests.",
    ],
    skills: ["Collaboration", "Git workflow", "Requirements analysis", "Testing"],
  },
];

/* ---------------------------------------------------------------------------
 * CONTACT
 * ------------------------------------------------------------------------- */

export const contact = {
  heading: "Have an opportunity or project in mind?",
  description:
    "I'm open to internship opportunities, collaborations, and opportunities to keep learning and building useful technology.",
};
