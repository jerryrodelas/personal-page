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
    mobileApp: true,
    title: "Bougette – Budget Tracker",
    tagline: "A privacy-first personal budget tracker with 150+ currency support.",
    description:
      "Designed and shipped a production iOS app from architecture through App Store release. Features transaction tracking, custom categories, data visualisation, and 150+ currency support — all with secure local storage and a privacy-first architecture.",
    category: "mobile",
    status: "completed",
    tags: ["Flutter", "Dart", "SQLite", "iOS"],
    appStoreLink: "https://apps.apple.com/us/app/bougette/id6758544911",
    playStoreLink: "",
    githubLink: "",
    image: "/bougette.jpg",
  },
  {
    id: 2,
    mobileApp: true,
    title: "Sadorio – Field Service Management",
    tagline: "iOS app for Australian tradespeople to manage field operations.",
    description:
      "Shipped a production iOS app for tradespeople — with job tracking, event logging, productivity monitoring, and push notifications. Includes a one-time purchase model ($19.99 AUD) with a 14-day free trial via RevenueCat. Currently migrating from local SQLite to a cloud backend built in Go, deployed on Railway with Supabase.",
    category: "mobile",
    status: "completed",
    tags: ["Flutter", "Dart", "Go", "Supabase", "Railway", "RevenueCat", "iOS"],
    appStoreLink: "https://apps.apple.com/us/app/sadorio/id6759517876",
    playStoreLink: "",
    githubLink: "",
    image: "/sadorio.jpg",
  },

  {
    id: 8,
    mobileApp: true,
    title: "Naruriji — AI Diary & Second Brain",
    tagline: "A smart diary app that answers questions about your own life using AI.",
    description:
      "An iOS diary app powered by Gemini AI as a RAG (Retrieval-Augmented Generation) assistant. Your diary entries become a searchable knowledge base — ask natural language questions like 'How many tenders did I submit in the last 3 months?' and Naruriji retrieves and enumerates the answer from your own entries. Your personal second brain.",
    category: "mobile",
    status: "completed",
    tags: ["Flutter", "Dart", "SQLite", "Gemini AI", "RAG", "iOS"],
    appStoreLink: "https://apps.apple.com/us/app/naruriji/id6761648432",
    playStoreLink: "",
    githubLink: "",
    liveLink: "",
    image: "/naruriji.jpg",
  },

  // ── Full-Stack Web Apps ───────────────────────────────────────────────────
  {
    id: 9,
    mobileApp: true,
    title: "Ryutabi (流旅) — AI Travel Companion",
    tagline: "Mood-first travel discovery powered by Claude AI on a Microsoft enterprise stack.",
    description:
      "An AI-powered travel companion that replaces search forms with a mood. Users pick how they want to feel, and Claude AI suggests destinations with evocative narratives and hidden-gem tips, then surfaces real flight and hotel pricing in their local currency before handing off to booking partners. Built full-stack: React/React Native frontend, ASP.NET Core (.NET) + PostgreSQL backend, deployed on Azure. Live on web and iOS.",
    category: "web",
    status: "completed",
    tags: ["React", "React Native", "TypeScript", "ASP.NET Core", "PostgreSQL", "Azure", "Claude AI"],
    appStoreLink: "https://apps.apple.com/au/app/ryutabi/id6782349527",
    playStoreLink: "",
    githubLink: "",
    liveLink: "https://ryutravel.net",
    image: "/ryutabi.jpg",
  },
  {
    id: 10,
    agentic: true,
    title: "Prospect — Agentic Job Application Pipeline",
    tagline: "Multi-stage LangGraph pipeline that scrapes, scores, and applies to jobs autonomously.",
    description:
      "Built a multi-stage LangGraph agentic pipeline that scrapes live job listings, embeds and compares them against a candidate resume via Pinecone vector search, and uses Claude to make a final apply/skip judgment with reasoning. Designed a fan-out/subgraph architecture (LangGraph Send() with isolated per-job subgraphs) to process dozens of listings concurrently without state collisions, auto-generating tailored cover letters for qualifying roles. Shipped a FastAPI web app with Server-Sent Events for real-time pipeline visualisation — letting users watch scrape → assess → save stages complete live as the agent runs. Deployed to production on Railway with HTTP Basic Auth, persistent resume storage, and a searchable history of every job assessed, backed by a single shared Pinecone index.",
    category: "web",
    status: "completed",
    tags: ["Python", "LangGraph", "Claude API", "Pinecone", "FastAPI", "Railway"],
    appStoreLink: "",
    playStoreLink: "",
    githubLink: "",
    liveLink: "https://prospectjobs-langgraph-production.up.railway.app/",
    image: "",
  },
  {
    id: 11,
    agentic: true,
    title: "FieldBrain — AI Field Documentation Assistant",
    tagline: "Mobile RAG app that turns instruction manuals into a natural-language knowledge base.",
    description:
      "A mobile app that ingests instruction manuals and technical documentation, converting them into a searchable vector database using Pinecone. Built with React Native for cross-platform mobile delivery, deployed on AWS EC2. Uses a LangChain-orchestrated pipeline with a Claude AI reasoning engine to answer natural-language queries grounded in ingested manual content.",
    category: "mobile",
    status: "completed",
    tags: ["React Native", "LangChain", "Pinecone", "AWS EC2", "Claude AI"],
    appStoreLink: "",
    playStoreLink: "",
    githubLink: "",
    liveLink: "",
    image: "",
  },
  {
    id: 7,
    agentic: true,
    title: "MitsuMori — Security Tender Assistant",
    tagline: "Full-stack tool that auto-scans construction tender PDFs for electronic security scope.",
    description:
      "Built for Australian electronic security technicians — MitsuMori ingests 10+ mixed-trade PDF bundles from builders, scans for CCTV, access control, intercom and alarm content, extracts legend/schedule tables from AutoCAD drawings, runs OCR on scanned pages, and uses the Claude API to generate an AI-powered scope summary. Produces a structured bill of quantities with Excel export.",
    category: "web",
    status: "completed",
    tags: ["React", "Node.js", "Express", "MongoDB", "Python", "FastAPI", "Claude API", "JWT", "Tailwind CSS", "Railway"],
    appStoreLink: "",
    playStoreLink: "",
    githubLink: "",
    liveLink: "https://mitsumori.up.railway.app/login",
    image: "",
  },

  {
    id: 12,
    agentic: true,
    title: "N3nko — Australian Energy & Fuel Comparator",
    tagline: "One comparator engine across three Australian government data sources, each with a completely different integration pattern — electricity, gas, and fuel, ranked by real savings.",
    description:
      "Built a mobile app that finds cheaper electricity, gas, and fuel plans by cross-referencing a user's actual bill against three live government pricing APIs. Automated bill data extraction with Claude Haiku (photo or PDF → structured data), eliminating manual entry and OCR entirely. Unified two incompatible government authentication models behind one internal API abstraction, cutting future integration time.",
    category: "mobile",
    status: "completed",
    tags: ["Go", "Python/FastAPI", "Claude API", "React Native/Expo", "Azure"],
    appStoreLink: "",
    playStoreLink: "",
    githubLink: "",
    liveLink: "",
    image: "",
  },
  {
    id: 13,
    agentic: true,
    title: "Tenin Uno — AI-Powered Intelligent Document Processing Platform",
    tagline: "OCR reads it, Claude extracts and validates it, and only low-confidence results ever reach a human.",
    description:
      "Built a production platform that automates intake for any document type — OCR reads it, Claude extracts and validates the data, and only low-confidence results are routed to a human for review — backed by 58 automated tests. Shipped two deployment variants of the same system: an always-on Railway build, and a Terraform/Azure build with deploy-and-destroy-on-request automation that avoids paying for idle cloud infrastructure between demos — proving both real IaC skill and cost-aware engineering judgment. Diagnosed and fixed a subtle Spring transactional-proxy bug that could have silently lost audit-trail data in production — invisible to the existing test suite until a real database-level test caught it. Live demo available upon request.",
    category: "web",
    status: "completed",
    tags: ["Java 17", "Spring Boot 3.5", "PostgreSQL", "Redis", "Claude API", "React", "TypeScript", "Docker", "Terraform"],
    appStoreLink: "",
    playStoreLink: "",
    githubLink: "",
    liveLink: "",
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
    status: "completed",
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
    status: "completed",
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
