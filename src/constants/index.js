import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    nextjs,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];


export const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Meta",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining full-stack web applications using React.js, Node.js, and MongoDB.",
            "Collaborating with cross-functional teams to ensure high-quality product delivery.",
            "Implementing responsive design and improving performance for various platforms.",
            "Conducting code reviews and mentoring junior developers."
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Cognizant",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Sept 2022 - Dec 2022",
        points: [
            "Worked on enhancing the user interface and experience of a large-scale enterprise application.",
            "Built reusable UI components using React.js and Tailwind CSS.",
            "Integrated REST APIs and improved the application's performance.",
            "Participated in code reviews and contributed to team development strategies."
        ],
    },
    {
        title: "Backend Developer",
        company_name: "TCS",
        icon: shopify,
        iconBg: "#b7e4c7f",
        date: "May 2021 - Aug 2022",
        points: [
            "Designed and implemented backend APIs using Node.js and Express.",
            "Managed databases using MongoDB and optimized queries for performance.",
            "Collaborated with frontend developers to integrate APIs and ensure seamless user experiences.",
            "Led the development of key modules for an e-commerce platform."
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Mark-085',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sandesh-rajput-b75111235/',
    }
];


export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'ArtistryHub',
        description: 'An eCommerce platform for buying and selling art, built using React and Tailwind CSS.',
        link: 'https://github.com/Mark-085/Artistry-Hub',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Service Space',
        description: 'A home service booking platform built using React, Node.js, and MongoDB, connecting service providers with customers.',
        link: 'https://github.com/Mark-085/Service-Space',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blur',
        name: 'Personal Portfolio',
        description: 'A responsive portfolio website showcasing my projects and skills, developed using React.js and EmailJS for contact forms.',
        link: 'https://github.com/Mark-085/Portfolio-Website',
    }
];