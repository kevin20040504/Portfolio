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
 *    word "public", e.g. "/images/projects/my-project/homepage.png".
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
    "Portfolio of Kevin Ang, an Information Technology student at the University of Asia and the Pacific with experience in web development, system analysis, and quality assurance, and interests in cloud engineering, cybersecurity, and DevOps.",

  // Your live address on Vercel. If you rename the domain in Vercel, update it here too.
  // Used for SEO and link previews on LinkedIn, Messenger, etc.
  url: "https://kevinangportfolio.vercel.app",

  email: "kevin.enrico.ang@gmail.com",
  location: "Pasig City, Philippines",

  education: {
    degree: "Bachelor of Science in Information Technology",
    school: "University of Asia and the Pacific",
    schoolShort: "UA&P",
    graduation: "2027",
  },

  // Career interests, from the CV.
  interests: [
    "Cloud engineering",
    "Security engineering",
    "Cybersecurity",
    "DevOps",
    "Artificial intelligence",
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
  // Your LinkedIn profile.
  linkedin: "https://www.linkedin.com/in/kevin-ang-118a99321/",
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
    "I'm Kevin Ang, an Information Technology student at the University of Asia and the Pacific. I work on web applications, system analysis, quality assurance, and I'm growing towards cloud engineering, cybersecurity, and DevOps. I use AI-assisted development openly while continuing to build my own technical skills.",
};

/* ---------------------------------------------------------------------------
 * ABOUT
 * ------------------------------------------------------------------------- */

export const about = {
  paragraphs: [
    "I'm an Information Technology student at the University of Asia and the Pacific, expected to graduate in 2027. My practical experience comes from academic and personal projects: a student records management system built as my team's capstone, AthleteSync, a personal full-stack app for student-athletes, and HomeFurGood, a pet adoption platform that's still in development. I've also had academic exposure to designing a cloud architecture on AWS.",
    "My strengths are system analysis, quality assurance, and troubleshooting: understanding how a system should work, helping build it, and checking that it actually does. I also have a background in computer hardware and networking. Going forward, I'm most interested in cloud engineering, security engineering, cybersecurity, DevOps, and artificial intelligence.",
    "Outside the classroom, I'm a student-athlete and co-captain of the UA&P Men's Basketball Team, which has taught me a lot about teamwork, accountability, and managing my time. I'm looking for an IT internship where I can contribute to a real team and keep learning.",
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
      "I use AI tools as part of my development workflow, and I'm open about it. In projects like AthleteSync, AI generated a large share of the code. It helps me work more productively and learn faster, but it doesn't replace understanding the code I'm responsible for.",
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
 *       public/images/projects/my-project/homepage.png
 *  2. Make sure the project's `screenshots` list below has an entry with
 *     the same path, e.g. { src: "/images/projects/my-project/homepage.png", caption: "Homepage" }
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
  "Personal Project",
  "Web Development",
  "System Development",
];

export const projects: Project[] = [
  /* ------------------------------ ATHLETESYNC ------------------------------ */
  // Features and stack checked against the repository code (Oct 2026).
  // Screenshots are the repository's own docs/screenshots (fictional demo user).
  {
    slug: "athletesync",
    title: "AthleteSync",
    fullTitle: "AthleteSync: Student-Athlete Life Organizer",
    year: "2026–Present",
    category: "Personal Project",
    context: "Personal project · Full-stack web application",
    status: "In Development",
    summary:
      "A full-stack web app that puts a student-athlete's classes, exams, practices, games, and deadlines in one calendar and warns when academic and athletic commitments overlap.",
    cover: {
      src: "/images/projects/athletesync/dashboard.png",
      caption: "AthleteSync dashboard",
    },
    screenshots: [
      {
        src: "/images/projects/athletesync/dashboard.png",
        caption: "Dashboard: weekly hours, conflicts, today's agenda, upcoming tasks, and time by category",
      },
      {
        src: "/images/projects/athletesync/calendar-week.png",
        caption: "Week view: classes, practices, games, and recovery in one calendar, with overlaps outlined",
      },
      {
        src: "/images/projects/athletesync/event-conflict-preview.png",
        caption: "Live conflict preview while adding an event, before it is saved",
      },
      {
        src: "/images/projects/athletesync/conflicts.png",
        caption: "Conflicts page listing every overlapping pair of events",
      },
      {
        src: "/images/projects/athletesync/tasks.png",
        caption: "Tasks and deadlines grouped by overdue, this week, and later",
      },
      { src: "/images/projects/athletesync/calendar-month.png", caption: "Month view" },
      { src: "/images/projects/athletesync/calendar-dark.png", caption: "Dark mode" },
      {
        src: "/images/projects/athletesync/dashboard-phone.png",
        caption: "Phone layout",
        alt: "The AthleteSync dashboard on a phone-sized screen",
      },
      { src: "/images/projects/athletesync/login.png", caption: "Sign-in page" },
    ],
    // From frontend/package.json and backend/composer.json.
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "TanStack Query",
      "FullCalendar",
      "Recharts",
      "Laravel 12",
      "PHP",
      "Laravel Sanctum",
      "MySQL",
      "PHPUnit",
      "Playwright",
    ],
    overview:
      "AthleteSync is a personal project for student-athletes, built with AI-assisted development. It brings classes, exams, practices, games, gym sessions, recovery, and deadlines into one calendar, and flags when academic and athletic commitments collide.",
    problem:
      "Student-athletes manage class schedules, assignment deadlines, training sessions, and competitions that are usually tracked in different places. That makes it easy to miss a clash between a class and a practice or game until it actually happens.",
    objectives: [
      "Keep academic and athletic schedules in a single calendar.",
      "Warn about schedule conflicts before an event is saved.",
      "Track assignments and deadlines alongside the schedule.",
      "Show how the week's time is split between academics, athletics, and personal time.",
    ],
    features: [
      {
        name: "Unified calendar",
        description: "Week, month, and list views; click or drag on the calendar to add an event.",
        state: "implemented",
      },
      {
        name: "Training and competition scheduling",
        description: "Events are categorised as class, exam, practice, game, gym, study, recovery, or personal.",
        state: "implemented",
      },
      {
        name: "Repeating events",
        description: "Weekly classes and practices stay at the same local time, even across daylight-saving changes.",
        state: "implemented",
      },
      {
        name: "Schedule-conflict detection",
        description: "Overlapping events are outlined on the calendar and listed on a Conflicts page.",
        state: "implemented",
      },
      {
        name: "Live conflict preview",
        description: "While adding an event, the form shows what it would clash with before saving.",
        state: "implemented",
      },
      {
        name: "Assignment and deadline tracking",
        description: "Tasks grouped by overdue, today, this week, and later, with priority and time estimates.",
        state: "implemented",
      },
      {
        name: "Weekly dashboard",
        description: "Scheduled hours, conflicts, overdue and upcoming tasks, and time by category.",
        state: "implemented",
      },
      {
        name: "Accounts and secure sign-in",
        description: "Session-cookie authentication; each user can only see their own data.",
        state: "implemented",
      },
      {
        name: "Light and dark mode, phone layout",
        state: "implemented",
      },
      {
        name: "Recovery logging",
        description: "Recovery sessions can already be scheduled as calendar events; dedicated logging is not built yet.",
        state: "planned",
      },
      { name: "Progress monitoring", state: "planned" },
      { name: "Reminders before deadlines and events", state: "planned" },
      { name: "Import class and team schedules from .ics calendar feeds", state: "planned" },
      { name: "Edit or skip a single date of a repeating event", state: "planned" },
    ],
    role: [
      "Building it as a solo personal project using AI-assisted development: AI tools generated a large share of the code, and every commit in the repository is marked as AI co-authored.",
      "TODO: Describe your own part, e.g. choosing the features, reviewing and testing what was built, and what you learned while doing it.",
    ],
    implementation: [
      "The front end is a React single-page application built with Vite, using TanStack Query for data fetching, FullCalendar for the calendar views, and Recharts for the dashboard chart. It talks to a versioned Laravel REST API (/api/v1) backed by MySQL.",
      "Authentication uses Laravel Sanctum's session-cookie mode, so no API tokens are stored in the browser. Repeating events are stored once as a calendar recurrence rule and expanded on demand for the requested date range.",
      "The API is covered by PHPUnit feature tests, and a Playwright end-to-end smoke test drives the real app as a demo user in light mode, dark mode, and at phone width.",
    ],
    challenges: [
      {
        challenge: "Repeating events could drift by an hour when clocks change for daylight saving time.",
        approach:
          "Every timestamp is stored in UTC together with the timezone the event was created in, and repeating events are expanded in that timezone.",
      },
      {
        challenge: "Checking every pair of events for overlaps gets slow as a schedule grows.",
        approach:
          "Events are sorted by start time and each one is compared only with events that start before it ends (a sweep-line approach).",
      },
    ],
    takeaways: ["TODO: What have you learned from building AthleteSync so far?"],
    links: {
      github: "https://github.com/kevin20040504/athletesync",
      demo: "", // No public deployment yet. Add the URL here once it's live.
    },
  },

  /* ------------------------------- TMCC ASRMS ------------------------------ */
  {
    slug: "tmcc-asrms",
    title: "TMCC Automated Student Records Management System",
    fullTitle:
      "Trece Martires City College Automated Student Records Management System (TMCC ASRMS)",
    year: "2025–2026",
    category: "System Development",
    context: "Academic capstone · Team project for Trece Martires City College",
    status: "Capstone Project",
    summary:
      "A centralized student records management system that reduces the registrar's reliance on manual filing and spreadsheet-based indexing.",
    cover: {
      src: "/images/projects/tmcc-asrms/records-management.png",
      caption: "Registrar staff view of student records",
    },
    // Screenshots taken from a local copy of the system, filled with fictional demo students.
    // To add diagrams later, save them here and add lines like:
    // { src: "/images/projects/tmcc-asrms/database-design.png", caption: "Database design (ERD)" },
    screenshots: [
      {
        src: "/images/projects/tmcc-asrms/records-management.png",
        caption: "Manage Records: registrar staff search and filter student records",
      },
      {
        src: "/images/projects/tmcc-asrms/student-record.png",
        caption: "Student record: personal details, program, GWA and units completed",
      },
      {
        src: "/images/projects/tmcc-asrms/pending-requests.png",
        caption: "Transcript requests: staff approve or reject student document requests",
      },
      {
        src: "/images/projects/tmcc-asrms/curriculum.png",
        caption: "Program curriculum with units and prerequisites",
      },
      {
        src: "/images/projects/tmcc-asrms/admin-dashboard.png",
        caption: "Admin dashboard: user and request totals with recent activity",
      },
      {
        src: "/images/projects/tmcc-asrms/user-management.png",
        caption: "User management for staff and admin accounts",
      },
      {
        src: "/images/projects/tmcc-asrms/student-dashboard.png",
        caption: "Student portal: GWA, units, and document request status",
      },
      {
        src: "/images/projects/tmcc-asrms/academic-records.png",
        caption: "Student academic records with grades and report card download",
      },
      { src: "/images/projects/tmcc-asrms/login.png", caption: "Login page" },
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
      "A web-based system for the registrar's office of Trece Martires City College, a college serving approximately 3,000–4,000 students, developed as our capstone project. It brings student records, enrollment, grades, and document requests into one centralized system.",
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
        name: "Curriculum builder",
        description: "Registrar staff create, edit, and clone program curricula.",
        state: "implemented",
      },
      {
        name: "Reports and audit logging",
        description: "Administrators view reports and a log of system activity.",
        state: "implemented",
      },
    ],
    role: [
      "Worked as System Analyst and AI-assisted developer on the team.",
      "Designed role-based functions for students, registrar staff, and administrators, including record management, document requests, approvals, reports, and audit logging.",
      "Implemented curriculum validation for enrollment, so a student can only be enrolled in subjects that belong to their program and term.",
      "Worked on showing subject prerequisite information to registrar staff when editing a student's enrollment.",
      "Applied system analysis, quality assurance, troubleshooting, and documentation throughout development.",
    ],
    implementation: [
      "The front end is a React single-page application that talks to a Laravel REST API through Axios. Authentication uses Laravel Sanctum, and every group of API routes is protected by role-checking middleware.",
      "Data is stored in MySQL, with the schema defined through Laravel migrations. Enrollment rules, such as curriculum membership and prerequisites, are implemented as separate validation rules and covered by PHPUnit feature tests.",
      "The team followed an Iterative and Incremental SDLC approach, delivering and refining the system in stages. The system is proposed to run on the local network of the registrar's office.",
    ],
    challenges: [
      // TODO: Add real challenges you faced. Example:
      // { challenge: "Enrollment rules differed between enrollment paths.", approach: "Moved the checks into shared validation rules used by every path." },
    ],
    takeaways: ["TODO: What did the capstone teach you about building systems for real users?"],
    links: {
      github: "https://github.com/s3ryz000/TMCC-ASRMS",
      demo: "",
    },
  },

  /* ------------------------------ HOMEFURGOOD ------------------------------ */
  {
    slug: "homefurgood",
    title: "HomeFurGood",
    year: "2026–Present",
    category: "Web Development",
    context: "Web development project · Currently in development",
    status: "In Development",
    summary:
      "A pet adoption and shelter locator platform in development, where users can browse and filter animals from multiple shelters and find nearby shelters on a map.",
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
      "HomeFurGood is a pet adoption and shelter locator platform that is currently in development. It brings adoptable animals from multiple shelters together in one place and connects prospective adopters with participating shelters.",
    problem:
      "People looking to adopt often have to check many shelters separately. HomeFurGood aims to centralize pet and shelter information on a single platform.",
    objectives: [
      "Help users discover adoptable pets and nearby shelters in one place.",
      "Make the adoption application process simpler for users.",
    ],
    // From the CV ("Building…", "Developing…"). Change a state to "implemented" once it works.
    features: [
      { name: "Browse and filter animals from multiple shelters", state: "in-progress" },
      { name: "Locate nearby shelters with map and location features", state: "in-progress" },
      { name: "User accounts", state: "in-progress" },
      { name: "Online adoption application workflow", state: "in-progress" },
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

  /* --------------------------------------------------------------------------
   *  EXAMPLE: copy this block (remove the /* and *\/), paste it above this
   *  comment, and fill it in to add a new project.
   * --------------------------------------------------------------------------
  {
    slug: "my-new-project",                 // URL becomes /projects/my-new-project
    title: "My New Project",
    year: "2027",
    category: "Web Development",            // "Personal Project" | "Web Development" | "System Development"
    context: "Personal project",
    status: "Completed",                    // "Completed" | "In Development" | "Academic Project" | "Capstone Project"
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
    skills: ["HTML", "CSS", "JavaScript", "Java", "React", "Laravel", "PHP", "SQL", "MySQL"],
  },
  {
    title: "Cloud & Architecture",
    icon: "cloud",
    description: "Designing how systems fit together and run in the cloud.",
    skills: ["AWS (academic project)", "Cloud architecture", "System analysis", "System design"],
  },
  {
    title: "Quality Assurance & Technical Support",
    icon: "shield",
    description: "Making sure things work, and fixing them when they don't.",
    skills: ["Software testing & QA", "Troubleshooting", "Computer hardware", "Networking", "Problem-solving"],
  },
  {
    title: "Tools & Development Practices",
    icon: "wrench",
    description: "The tools I use day to day.",
    skills: ["Git", "GitHub", "VS Code", "Apache NetBeans", "XAMPP", "AI-assisted development"],
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
    role: "Student-Athlete and Co-Captain",
    organization: "UA&P Men's Basketball Team",
    type: "Leadership",
    period: "2023 – Present",
    description:
      "Help lead the team as a co-captain while balancing training and competition with a full IT course load.",
    highlights: [
      "Support team communication and coordination while balancing varsity training, games, and academic responsibilities.",
      "Strengthened leadership, accountability, decision-making, resilience, discipline, teamwork, and time management.",
      "Awards: Rookie of the Year (2023–2024) and Most Improved Player (2024–2025).",
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
    role: "System Analyst and AI-Assisted Developer",
    organization: "TMCC ASRMS · Capstone project",
    type: "Academic Collaboration",
    period: "2025 – 2026",
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
