// ─── HOW TO ADD A PROJECT ────────────────────────────────────────────────────
// Copy one of the objects below, paste it into the array, and fill in details.
// Fields marked (optional) can be left as "".
//
// status options : "completed" | "in-progress"
// category options: "mobile" | "web" | "other"
// ─────────────────────────────────────────────────────────────────────────────

export const projects = [
  // ── Live App Store Apps ───────────────────────────────────────────────────
  {
    id: 1,
    title: "Bougette – Budget Tracker",
    tagline: "A privacy-first personal budget tracker with 150+ currency support.",
    description:
      "Designed and shipped a production iOS app from architecture through App Store release. Features transaction tracking, custom categories, data visualisation, and 150+ currency support — all with secure local storage and a privacy-first architecture.",
    category: "mobile",
    status: "completed",
    tags: ["Flutter", "Dart", "SQLite", "iOS"],
    appStoreLink: "https://apps.apple.com/us/app/bougette/id6758544911", // add your App Store URL here
    playStoreLink: "",
    githubLink: "",
    image: "",
  },
  {
    id: 2,
    title: "Sadorio – Field Service Management",
    tagline: "iOS app for Australian tradespeople to manage field operations.",
    description:
      "Shipped a production iOS app for tradespeople — with job tracking, event logging, productivity monitoring, and push notifications. Includes a one-time purchase model ($19.99 AUD) with a 14-day free trial via RevenueCat. Currently migrating from local SQLite to a cloud backend built in Go, deployed on Railway with Supabase.",
    category: "mobile",
    status: "completed",
    tags: ["Flutter", "Dart", "Go", "Supabase", "Railway", "RevenueCat", "iOS"],
    appStoreLink: "https://apps.apple.com/us/app/sadorio/id6759517876", // add your App Store URL here
    playStoreLink: "",
    githubLink: "",
    image: "",
  },

  // ── In-Progress Projects ──────────────────────────────────────────────────
  {
    id: 6,
    title: "Sadorio Cloud",
    tagline: "Cloud backend for Sadorio, built in Go with microservices architecture.",
    description:
      "Building the cloud infrastructure for the Sadorio platform — a backend written in Go (Gin), deployed on Railway with Supabase as the database layer. Designed with a microservices architecture to support the next major release of the Sadorio iOS app.",
    category: "other",
    status: "in-progress",
    tags: ["Go", "Gin", "Supabase", "Railway", "Microservices"],
    appStoreLink: "",
    playStoreLink: "",
    githubLink: "",
    image: "",
  },
  {
    id: 3,
    title: "LMS Training Platform – MVP",
    tagline: "A mobile learning management system for multi-year curriculum delivery.",
    description:
      "Built a mobile LMS prototype with lesson navigation and progress tracking, designed for scalable multi-year curriculum support. Currently under review with an LMS director for potential adoption.",
    category: "mobile",
    status: "in-progress",
    tags: ["TypeScript", "React Native"],
    appStoreLink: "",
    playStoreLink: "",
    githubLink: "",
    image: "",
  },

  // ── Other / Older Projects ────────────────────────────────────────────────
  {
    id: 4,
    title: "Python Desktop Invoicing App",
    tagline: "Desktop invoicing tool with PDF generation and email automation.",
    description:
      "A desktop application with a CRUD database, automated PDF invoice generation, and email dispatch functionality — built to streamline small business billing workflows.",
    category: "other",
    status: "completed",
    tags: ["Python", "SQLite"],
    appStoreLink: "",
    playStoreLink: "",
    githubLink: "",
    image: "",
  },
  {
    id: 5,
    title: "Django Full-Stack Web App",
    tagline: "Full-stack web application with authentication and REST-style backend.",
    description:
      "A full-stack web app built with Django featuring user authentication, ORM models, and a REST-style backend architecture. Developed as part of a Python & Django Full Stack bootcamp.",
    category: "web",
    status: "completed",
    tags: ["Python", "Django", "REST API", "HTML & CSS"],
    appStoreLink: "",
    playStoreLink: "",
    githubLink: "",
    image: "",
  },
]
