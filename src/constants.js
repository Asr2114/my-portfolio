// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';

import bootstrapLogo from './assets/tech_logo/bootstrap.png';

import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';


import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';

import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';

import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';




// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      
      
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: 'https://s3-us-west-1.amazonaws.com/partnerpage.prod/media/directories/images/beaa4205-8af1-4423-a0d1-a762692a6e93/99fca3ed-43ae-4f4b-828b-45120dbeddc5.png',
      role: "SDE Intern",
      company: "Xebia IT Architects",
      date: "May 2025 - July 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Socket.io",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        "Express JS"
        
      ],
    },
    
    
  ];
  
  export const education = [

    {
      id: 0,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS31gRpDihUcJRGZAzqkSq1dSzaXbd6nXmv_g&s',
      school: "JECRC University, Jaipur",
      date: "July 2022 - June 2026",
      degree: "B.tech in Computer Science & Engineering",
    },

    {
      id: 1,
      img: 'https://vadantaschool.in/wp-content/uploads/2022/12/Vadanta-Logo-Copy.jpg',
      school: "Vadanta International School, Jaipur",
      date: "Apr 2020 - March 2021",
      degree: "CBSE(XII) - PCM",
    },
   
    {
      id: 2,
      img: 'https://vadantaschool.in/wp-content/uploads/2022/12/Vadanta-Logo-Copy.jpg',
      school: "Vadanta International School, Jaipur",
      date: "Apr 2018 - March 2019",
      degree: "CBSE(X)",
    },
    
  ];
  
  export const projects = [
    {
      id: 0,
      title: "CrowdSpark - Crowdfunding Platform",
      description:
        '● Developed a responsive React.js frontend with Tailwind CSS and integrated Axios for seamless API communication. ● Implemented real-time updates using Socket.IO for live campaign tracking and interactions.● Ensured modern UI/UX design with optimized performance for smooth crowdfunding platform navigation.',
      image: './crowdsparkss.png',
      tags: ["HTML", "CSS", "JavaScript", "React JS", "TailwindCSS", "NodeJS", "ExpressJS", "Socket.IO", 'RazorPay'],
      github: "https://github.com/Asr2114/crowdspark-frontend",
      webapp: "https://crowdspark-frontend-gamma.vercel.app/",
    },
    {
      id: 1,
      title: "Printiva - Ai PrintOnDemand App",
      description:
      "● Developed a modern, AI-driven print-on-demand platform integrating Next.js, Tailwind CSS for user experience. ● Leveraged Strapi CMS for efficient content management and ImageKit.io for advanced image processing. ● Designed responsive, user-friendly interfaces with a focus on performance and accessibility.",
      image: './printiva.png',
      tags: ["Next JS","ImageKit.io", "Strapi 5", "Neon PortgreSQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Asr2114/printiva",
      webapp: "https://print-on-demand-web-app.vercel.app/",
    },
    {
      id: 2,
      title: "Charge Your EV - Ev Charger Management",
      description:
      "● Built a full-stack web application to help companies manage their EV charging stations.● Developed the frontend using Vue.js, Tailwind CSS, and Leaflet.js for interactive maps.● Implemented backend with Node.js, Express.js, and MongoDB for efficient data handling.● Implemented REST API integration for seamless data fetching and real-time updates.",
      image: "./chargess.png",
      tags: ["Vue JS", "API", "HTML", "CSS", "JavaScript", "REST", "NodeJS", "ExpressJS", "JWT", "Leaflet JS"],
      github: "https://github.com/Asr2114/ev-charger-app",
      webapp: "https://ev-charger-app.vercel.app/",
    },
    {
      id: 3,
      title: "K72 - Modern Animated Website",
      description:
      "A modern, visually engaging website built with React, TailwindCSS, and GSAP, featuring smooth animations, minimal design, and an immersive user experience.",
      image: './k72ss.png',
      tags: ["React JS", "HTML", "TailwindCSS", "JavaScript", "GSAP"],
      github: "https://github.com/Asr2114/K72",
      webapp: "https://k72-f123.onrender.com/",
    },
    {
      id: 4,
      title: "SkillSwap - Skill Exchange Platform",
      description:
      'A full-stack web application that enables users to connect, share, and exchange skills. Built with Next.js (frontend), Express.js (backend), and MongoDB (database), it features modern UI with ShadCN, secure authentication (Google & Apple sign-in), and real-time updates. Designed with a professional, app-like experience for smooth collaboration and networking.',
      image: './skillswapss.png' ,
      tags: ["JavaScript", "HTML", "CSS", "NextJS", "NodeJS", "ExpressJS", "JWT", "OAuth", "ShadCN"],
      github: "https://github.com/Asr2114/skillswap",
      webapp: "https://testing-ab-mu.vercel.app/",
    },
    {
      id: 5,
      title: "BlinkQR - Instant QR Generator",
      description:
      "A fast and user-friendly web app to create, customize, and share QR codes instantly. Built with a modern frontend and secure backend integration, it supports multiple data types, responsive design, and smooth performance for personal or business use.",
      image: './blinkqrss.png',
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Asr2114/blinkQR",
      webapp: "https://blinkqr.netlify.app/",
    },
    
  ];  