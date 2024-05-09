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
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    bootstrap,
    nike,
    portfolio,
    ubereats,
    hoobank,
    realestate,
    PostgreSql,
    Zoomvideo,
    
} from "../assets/icons";

export const skills = [
    {
        imageUrl: nextjs,
        name: "Nextjs",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: typescript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl:bootstrap,
        name:"Bootstrap",
        type:'Frontend'

    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "Mongodb",
        type: "Backend",
    },
    {
        imageUrl: PostgreSql,
        name: "Mongodb",
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
    
    
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    
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
        link: 'https://github.com/saimanojmatta',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sai-manoj-07114b238/',
    }
];

export const projects = [

    {
        iconUrl: Zoomvideo,
        theme: 'btn-back-black',
        name: 'Nextjs Video Conferencing APP',
        description: "Developed a full-stack video conferencing application inspired by Zoom using Next.js for a smooth.Integrated Stream Audio & Video SDK for real-time audio/video communication",
        link: 'https://zoom-clone-eta-self.vercel.app/',
        code:'https://github.com/saimanojmatta/Zoom-clone',
    },
    {
        iconUrl: realestate,
        theme: 'btn-back-orange',
        name: 'FullStack Real Estate Application',
        description: "Built a comprehensive real-estate application utilizing the MERN stack A  set of features icludeded user authentication using JWT,Dynamic Searching and filtering versatile listing.",
        link: 'https://mern-estate-59vv.onrender.com/',
        code:'https://github.com/saimanojmatta/mern_estate',
    },
    {
        iconUrl: nike,
        theme: 'btn-back-red',
        name: 'Nike Shoe&Sneakers Clone',
        description: "Designed and developed a fully responsive Nike shoe application using React and Tailwind CSS. Optimized application performance for seamless user experience across all devices.",
        link: 'https://nikeshopping.netlify.app/',
        code:'https://github.com/saimanojmatta/nikeshopping',
    },
    {
        iconUrl: hoobank,
        theme: 'btn-back-yellow',
        name: 'HooBank Cards & Services',
        description: "Powered by React JS and Tailwind CSS, the Hoobank service app delivers a captivating frontend experience. Its impressive UI/UX design prioritizes user convenience and visual appeal",
        link: 'https://hoobankingservices.netlify.app/',
        code:'https://github.com/saimanojmatta/Hoobank',
    },
    {
        iconUrl: portfolio ,
        theme: 'btn-back-green',
        name: 'Portfolio Website',
        description: 'Built a captivating 3D portfolio website using Three.js for interactive animations and immersive visuals.Crafted a responsive and visually appealing portfolio website using Tailwind CSS .',
        link: 'https://3jsrportfolio.netlify.app/',
        code:'https://github.com/saimanojmatta/portfolio',
        
    }, 
    {
        iconUrl:ubereats,
        theme:'btn-back-pink',
        name:'Uber eats clone',
        description:'Designed and developed a fully responsive Uber eats food application using React and Tailwind CSS.Implemented a dynamic food filter with clickable buttons for price and dish type.',
        link:'https://ubereatweb.netlify.app/',
        code:'https://github.com/saimanojmatta/Uberfood',
    }
    
    
  
];