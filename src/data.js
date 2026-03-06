// KONGSI Images
import kongsi1 from './assets/kongsi_picture1.png';
import kongsi2 from './assets/kongsi_picture2.png';
import kongsi3 from './assets/kongsi_picture3.png';
import kongsi4 from './assets/kongsi_picture4.png';
import kongsi5 from './assets/kongsi_picture5.png';
import kongsi6 from './assets/kongsi_picture6.png';

// Capybara Images
import capy1 from './assets/capy_picture1.jpg';
import capy2 from './assets/capy_picture2.jpg';
import capy3 from './assets/capy_picture3.jpg';
import capy4 from './assets/capy_picture4.jpg';
import capy5 from './assets/capy_picture5.jpg';
import capy6 from './assets/capy_picture6.jpg';

// Deanlist Images
import deansList1Img from './assets/deans_list_1.png';
import deansList2Img from './assets/deans_list_2.png';

// SEO Images
import seo1 from './assets/Search_Console_Traffic_1.png';
import seo2 from './assets/Search_Console_Traffic_2.png';
import seo3 from './assets/Search_Console_Traffic_3.png';
import seo4 from './assets/Search_Console_Traffic_4.png';

export const info = {
  name: "Loh Wei Chuan",
  education: "Bachelor Of Computer Science (Honours) in AI & Mobile Computing at Taylor's University",
  skillsMatrix: {
    "AI/Data": ["Python", "NLP", "Computer Vision", "Data Analysis"],
    "Frontend": ["React", "Tailwind CSS", "Framer Motion"],
    "Marketing": ["Technical SEO", "Google Search Console", "Traffic Analytics"]
  },
  skills: ["React.js", "Flutter", "Python", "Firebase", "C++", "Java"],
  certifications: [
    { name: "Dean List 1", image: deansList1Img },
    { name: "Dean List 2", image: deansList2Img }
  ]
};

export const seoEvidence = {
  title: "Growth & SEO Results",
  description: "Real-world traffic and search console results from my experience assisting clients with their SEO strategies on a part-time basis.",
  metrics: [
    { label: "Organic Visibility", value: "Increased", description: "Improved organic visibility through targeted keyword strategy and semantic HTML." },
    { label: "Client Acquisition", value: "Proven Growth", description: "Successfully generated organic traffic and improved search rankings for external clients." },
    { label: "Traffic Analytics", value: "Data-Driven", description: "Applying marketing mechanics and Google Search Console insights." }
  ],
  images: [seo1, seo2, seo3, seo4]
};

export const projects = [
  {
    title: "KONGSI: P2P Rental Marketplace",
    category: "Degree Project (Taylor's University)",
    description: "A resource-sharing mobile platform targeting urban Malaysians. Built to reduce cost of living through efficient peer-to-peer item rentals.",
    tech: ["Flutter", "Firebase", "Firestore", "Cloud Functions"],
    achievements: [
      "Real-time data synchronization across users",
      "Secure payment gateway integration",
      "Implemented Firebase Auth & Booking management"
    ],
    uiScreenshots: [kongsi1, kongsi2, kongsi3, kongsi4, kongsi5, kongsi6]
  },
  {
    title: "Capybara Logistics",
    category: "Diploma Final Year Project (UOW KDU)",
    description: "A data-driven logistics dashboard focused on backend logic and precise data insights. Designed to cleanly present actionable logistics data without unnecessary visual flair.",
    tech: ["Python", "Data Analysis", "React.js"],
    achievements: [
      "Explored predictive modeling concepts for delivery estimations",
      "Implemented data cleansing to ensure accurate reporting and routing",
      "Integrated scalable backend logic for agile multi-stage tracking"
    ],
    uiScreenshots: [capy1, capy2, capy3, capy4, capy5, capy6]
  }
];