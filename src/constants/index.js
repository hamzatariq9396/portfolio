import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  gimmefy,
  nayatel,
  neelamiImage,
  aioImage,
  aioDashboard,teemunoImage,
  nayatelImage
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-stack Developer",
    company_name: "AIO",
    icon: aioImage, // Replace with actual icon
    iconBg: "#383E56",
    date: "January 2024 - Present",
    location: "Islamabad, Pakistan",
    description:
      "AIO is a Silicon Valley-based startup providing comprehensive solutions for the U.S. restaurant industry, including marketing, POS systems, mobile apps, and dashboards. Our system is actively running at Flights Restaurant, Las Vegas.",
      points: [
        "Built a comprehensive dashboard system from scratch, integrating it with POS, mPOS, mobile apps, and other devices.",
        "Developed multiple modules, including Payments, Menu Manager, and Onboarding, enabling restaurants to add menu categories, items, and onboard employees.",
        "Implemented payment functionalities, including service charges, sales tax, discounts, cash drawer management, and tender handling.",
        "Enhanced restaurant management by enabling real-time tracking of sales, inventory, and customer data.",
      ],
  },
  {
    title: "Full-stack Developer",
    company_name: "Nayatel",
    icon: nayatel, // Replace with actual icon
    iconBg: "#E6DEDD",
    date: "September 2022 - January 2024",
    location: "Islamabad, Pakistan",
    description:
      "Nayatel is a leading telecommunications provider in Pakistan, known for its high-speed internet and innovative technology solutions.",
    points: [
      "Revamped the existing system by analyzing its architecture and successfully migrating it to a modern Next.js and NestJS stack, enhancing performance and maintainability.",
      "Worked as a Full-Stack Developer, handling both frontend and backend development, ensuring seamless integration between systems.",
      "Optimized API performance and database queries, improving application speed, scalability, and efficiency.",
      "Collaborated with cross-functional teams to develop and deploy new features, contributing to overall platform growth and user experience.",
      "Performed troubleshooting, debugging, and issue resolution in a high-traffic production environment, ensuring system reliability and stability.",
    ],
  },
  {
    title: "Back End Developer",
    company_name: "Teemuno/Gimmefy",
    icon: gimmefy, // Replace with actual icon
    iconBg: "#383E56",
    date: "September 2022 - February 2023",
    location: "Remote (Singapore-based)",
    description:
      "Teemuno is a platform development company focused on creating freelance marketplaces similar to Upwork and Fiverr.",
    points: [
      "Developed a freelance platform with features such as job postings, bidding, secure payments, and user profiles.",
      "Designed and optimized database schemas using SQL and Knex.js to ensure efficient data storage and retrieval.",
      "Implemented secure authentication and authorization mechanisms to protect user data and transactions.",
      "Integrated AWS S3 Bucket for media storage, ensuring scalability and efficient handling of user-uploaded files.",
      "Applied JOI validations to enforce data integrity and prevent security vulnerabilities.",
      "Conducted performance optimization and debugging to enhance system reliability and efficiency.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "Codify Pvt Limited",
    // icon: codify, // Replace with actual icon
    iconBg: "#E6DEDD",
    date: "April 2022 - September 2022",
    location: "Rawalpindi, Pakistan",
    description:
      "Codify Pvt Limited is a software development company offering MERN stack development services.",
    points: [
      "Developed real-world applications with a focus on both front-end and back-end solutions.",
      "Implemented test-driven development practices and handled feature enhancement requests.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Geneix Software House",
    // icon: geneix, // Replace with actual icon
    iconBg: "#383E56",
    date: "June 2020 - August 2020",
    location: "PWD, Islamabad",
    description:
      "Geneix Software House provides a range of software development services, catering to various client needs.",
    points: [
      "Developed and optimized responsive web applications using React, JavaScript, HTML, and CSS.",
      "Collaborated with designers and backend developers to create seamless, user-friendly interfaces.",
      "Implemented reusable components and followed best practices for scalability and maintainability.",
      "Improved website performance and accessibility, ensuring a smooth experience across different devices.",
      "Gained hands-on experience with Material-UI, Tailwind CSS, and Bootstrap for efficient styling and design.",
    ],
  },
];



const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Neelami",
    description:
      "An advanced auction platform designed to facilitate seamless bidding and transactions. Built with a user-friendly interface, it ensures secure and transparent auctions.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: neelamiImage, // Replace with actual image reference
    source_code_link: "https://nelami.ihamza.dev",
  },
  {
    name: "Gimmefy/Teemuno",
    description:
      "A freelance marketplace similar to Upwork and Fiverr, connecting freelancers with clients for various digital services.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: teemunoImage, // Replace with actual image reference
    source_code_link: "https://teemuno.com/",
  },
  {
    name: "Nayatel",
    description:
      "A platform for one of Pakistan's leading telecom providers, optimizing user experience and performance with scalable backend solutions.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: nayatelImage, // Replace with actual image reference
    source_code_link: "https://nayatel.com/",
  },
  {
    name: "AIO",
    description:
      "A comprehensive restaurant management platform providing POS, dashboards, and mobile app solutions for restaurants in the U.S., including Flights Restaurant in Las Vegas.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: aioDashboard, // Replace with actual image reference
    source_code_link: "https://dashboard.dev.aioapp.com/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
