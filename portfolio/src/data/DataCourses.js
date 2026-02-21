import course1 from "../assest/course1.png";
import course2 from "../assest/Course2.png";
import course3 from "../assest/Course3.jpeg";
import course4 from "../assest/1link.png";
import course5 from "../assest/portfolio.png";
import adminImg from "../assest/newProjects/admin.png";
import chartsImg from "../assest/newProjects/charts.png";
import firstyyImg from "../assest/newProjects/firstyy.png";
import iboshImg from "../assest/newProjects/LUXURY BAGS STORE.png";
import tradesPilotImg from "../assest/newProjects/TradesPilotAI.png";
import cfgImg from "../assest/newProjects/1.png";
import mcdcImg from "../assest/newProjects/2.png";
import integrationImg from "../assest/newProjects/testing-all-sessions.png";
import contextDiagramImg from "../assest/systemDesign/C4 MODEL LEVEL1 CONTEXT Diagram_.jpg";

const DataCourses = [
  {
    id: 14,
    title: "Velura Hotel Management System",
    description:
      "Full-stack hotel management system with online reservations, admin dashboard, room inventory, payment processing, real-time currency exchange API, email service, analytics & custom reports. Multilingual (EN/AR/TR), responsive, and fully branded.",
    link: "https://velura-hotel.vercel.app/en",
    image: adminImg,
    target: "_blank",
    categories: ["Full-Stack", "Client Work"],
    featured: true,
    tags: ["React", "Node.js", "SQL", "REST API", "Email Service", "Analytics", "i18n"],
    links: [
      { label: "Live Site", url: "https://velura-hotel.vercel.app/en" },
    ],
  },
  {
    id: 13,
    title: "IBOSH — Luxury E-Commerce Platform",
    description:
      "Full-stack, multi-language luxury e-commerce platform with light/dark theming, Shopify integration for automatic product sync, O(1) product search, SEO-friendly multi-language routing (/en, /ar, /tr), WhatsApp checkout flow, and CDN-optimized delivery. Fully branded end-to-end.",
    link: "https://ibosh.store",
    image: iboshImg,
    target: "_blank",
    categories: ["Full-Stack", "Client Work"],
    tags: ["Next.js", "Shopify", "i18n", "SEO", "Dark/Light Theme", "CDN"],
    links: [
      { label: "Live Site", url: "https://ibosh.store" },
    ],
  },
  {
    id: 12,
    title: "TradesPilot AI — Automated Trading Platform",
    description:
      "Full-stack fintech SaaS platform for automated forex trading. AI-powered trading bot, copy trading & signal marketplace, white-label integration, real-time analytics, and trusted partner ecosystem. Multilingual, light/dark theming, SEO-optimized, and responsive. Full branding, logo, and end-to-end development.",
    link: "https://tradespilot-ai.com",
    image: tradesPilotImg,
    target: "_blank",
    categories: ["Full-Stack", "Fintech", "Client Work"],
    tags: ["Next.js", "Fintech", "SaaS", "AI", "i18n", "Dark/Light Theme", "SEO"],
    links: [
      { label: "Live Site", url: "https://tradespilot-ai.com" },
    ],
  },
  {
    id: 11,
    title: "Forex Trading Portfolio Platform",
    description:
      "Personal portfolio for forex trading with light/dark theming, full brand identity, EN & AR support with O(1) language/color switching. Integrated with TradingView real-time market prices and charts. Fintech-grade UI.",
    link: "#",
    image: chartsImg,
    target: "_blank",
    categories: ["Fintech", "Full-Stack", "Client Work"],
    tags: ["React", "TradingView API", "i18n", "Dark/Light Theme", "Fintech"],
    links: [],
  },
  {
    id: 10,
    title: "SWE431 — Integration Testing Sessions",
    description:
      "Top-down progressive integration with stubs across 4 sessions (S1–S4). Validates component interactions from Repository to Controller level, covering search, billing, and full system end-to-end testing with expected vs actual results.",
    link: "#",
    image: integrationImg,
    target: "_blank",
    categories: ["Academic"],
    tags: ["Integration Testing", "Top-Down", "Stubs", "Node.js", "MVC"],
    links: [],
  },
  {
    id: 9,
    title: "SWE431 — Control Flow Graph & Cyclomatic Complexity",
    description:
      "CFG visualization and cyclomatic complexity analysis of the buyBook function. 12 nodes, 14 edges, V(G) = 4 with 4 independent paths covering all business logic branches from book lookup to purchase completion.",
    link: "#",
    image: cfgImg,
    target: "_blank",
    categories: ["Academic"],
    tags: ["CFG", "Cyclomatic Complexity", "White-Box", "Path Analysis", "Node.js"],
    links: [],
  },
  {
    id: 8,
    title: "SWE431 — MC/DC Test Coverage",
    description:
      "Modified Condition/Decision Coverage analysis with structured test cases. Covers all decision conditions (book existence, stock quantity, balance check) with basis path testing to achieve full coverage across 4 test cases.",
    link: "#",
    image: mcdcImg,
    target: "_blank",
    categories: ["Academic"],
    tags: ["MC/DC", "Decision Coverage", "Test Cases", "White-Box", "Software Testing"],
    links: [],
  },
  {
    id: 7,
    title: "LaTosta — Digital Restaurant Menu",
    description:
      "Modern, responsive digital menu for LaTosta Restaurant in Jeddah, KSA. Mobile-first, QR-ready, Arabic & English, no app download needed. Optimized for speed & UX with seamless delivery platform redirection.",
    link: "https://latosta.vercel.app/en",
    image: firstyyImg,
    target: "_blank",
    categories: ["Client Work", "Full-Stack"],
    tags: ["Next.js", "i18n", "QR Menu", "Mobile-First", "Responsive"],
    links: [
      { label: "Live (EN)", url: "https://latosta.vercel.app/en" },
      { label: "Live (AR)", url: "https://latosta.vercel.app/ar" },
      { label: "Location", url: "https://maps.app.goo.gl/4nVMtPU6yPxe8DSf9" },
    ],
  },
  {
    id: 6,
    title: "Altava — E-Commerce System Architecture (C4 Model)",
    description:
      "Scalable e-commerce architecture documentation using C4 Model, clean architecture, and SOLID principles. 9 professional diagrams: Context, Container, Component, UML, ERD, Sequence, Deployment, Use Case, and System Overview.",
    link: "https://librotrack.my.canva.site/altava-e-commerce-system-architecture",
    image: contextDiagramImg,
    target: "_blank",
    categories: ["System Design"],
    tags: ["C4 Model", "Architecture", "SOLID", "PostgreSQL", "MongoDB"],
    links: [
      { label: "Full Walkthrough", url: "https://librotrack.my.canva.site/altava-e-commerce-system-architecture" },
    ],
  },
  {
    id: 5,
    title: "Client Portfolio — Ibo Global Influencer",
    description:
      "Responsive portfolio for Ibo, a global influencer. Showcases personal brand, social media presence, and collaborations across TikTok, Instagram, YouTube, and Snapchat. Built with Next.js, smooth animations, and multilingual support.",
    link: "https://ibo-mu.vercel.app/",
    image: course5,
    target: "_blank",
    categories: ["Client Work"],
    tags: ["Next.js", "Framer Motion", "i18n", "Responsive"],
    links: [{ label: "Live Site", url: "https://ibo-mu.vercel.app/" }],
  },
  {
    id: 4,
    title: "LibroTrack — Library Management System",
    description:
      "100% Java library management system using MySQL, Swing, and JavaFX. Full CRUD for books and students, lending/returning, reports, and statistics across two databases.",
    link: "https://librotrack.my.canva.site/",
    image: course4,
    target: "_blank",
    categories: ["Desktop App"],
    tags: ["Java", "JavaFX", "Swing", "MySQL"],
    links: [{ label: "View Project", url: "https://librotrack.my.canva.site/" }],
  },
  {
    id: 3,
    title: "Vigor — Workout Plan Sharing App",
    description:
      "Fitness management mobile app for setting goals, tracking progress, and logging activities. Intuitive interface built with React Native and Expo to enhance engagement and motivation.",
    link: "https://github.com/MnsDew/Vigor-App.git",
    image: course3,
    target: "_blank",
    categories: ["Mobile App"],
    tags: ["React Native", "Expo", "Mobile", "Fitness"],
    links: [{ label: "GitHub", url: "https://github.com/MnsDew/Vigor-App.git" }],
  },
  {
    id: 2,
    title: "Bus Reservation System",
    description:
      "Java-based bus reservation system for booking, updating, canceling, and searching reservations. Includes admin functionalities and data persistence.",
    link: "https://github.com/MnsDew/Bus-Reservation-System.git",
    image: course2,
    target: "_blank",
    categories: ["Backend"],
    tags: ["Java", "OOP", "File I/O"],
    links: [{ label: "GitHub", url: "https://github.com/MnsDew/Bus-Reservation-System.git" }],
  },
  {
    id: 1,
    title: "Bookstore Management System",
    description:
      "Command-line app built with JavaScript for managing bookstore inventory and sales. CRUD operations for books, sales processing, and receipt generation.",
    link: "https://github.com/MnsDew/bookstore-management-system.git",
    image: course1,
    target: "_blank",
    categories: ["Backend"],
    tags: ["JavaScript", "Node.js", "CLI"],
    links: [{ label: "GitHub", url: "https://github.com/MnsDew/bookstore-management-system.git" }],
  },
];

export default DataCourses;
