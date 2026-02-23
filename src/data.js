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

export const info = {
  name: "Loh Wei Chuan",
  education: "Bachelor Of Computer Science (Honours) in AI & Mobile Computing at Taylor's University",
  skills: ["React.js", "Flutter", "Python", "Firebase", "C++", "Java"],
  certifications: [
    { name: "Dean List 1", image: deansList1Img },
    { name: "Dean List 2", image: deansList2Img }
  ]
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
    description: "A web-based logistics application for parcel tracking and delivery management, utilizing a serverless data approach.",
    tech: ["React.js", "JavaScript", "Google Sheets API"],
    achievements: [
      "Built multi-stage parcel tracking dashboard",
      "Integrated Google Sheets API for agile data management",
      "Designed user-centric order placement workflows"
    ],
    uiScreenshots: [capy1, capy2, capy3, capy4, capy5, capy6]
  }
];