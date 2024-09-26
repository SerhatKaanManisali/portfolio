import { FaCircleInfo, FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdPrivacyTip } from "react-icons/md";

export const navItems = [
    {
        name: "About Me",
        link: "/#about-me",
    },
    {
        name: "Tech Stack",
        link: "/#tech-stack",
    },
    {
        name: "Portfolio",
        link: "/#portfolio",
    },
    {
        name: "Contact",
        link: "/#contact",
    }
];

export const techStack = [
    {
        name: "Angular",
        src: "/tech-stack/angular-icon.png"
    },
    {
        name: "SCSS/SASS",
        src: "/tech-stack/sass-icon.svg"
    },
    {
        name: "Material design",
        src: "/tech-stack/material-design-icon.svg"
    },
    {
        name: "Firebase",
        src: "/tech-stack/firebase-icon.svg"
    },
    {
        name: "React",
        src: "/tech-stack/react-icon.png"
    },
    {
        name: "Next.js",
        src: "/tech-stack/nextjs-icon.svg"
    },
    {
        name: "TailwindCSS",
        src: "/tech-stack/tailwind-css-icon.svg"
    },
    {
        name: "JavaScript",
        src: "/tech-stack/javascript-icon.svg"
    },
    {
        name: "TypeScript",
        src: "/tech-stack/typescript-icon.svg"
    },
    {
        name: "REST API",
        src: "/tech-stack/rest-api-icon.svg"
    },
    {
        name: "Git",
        src: "/tech-stack/git-icon.svg"
    },
];

export const staticProjects = [
    {
        image: "/projects/pennyflow.png",
        iconList: [
            "/tech-stack/react-icon.png",
            "/tech-stack/nextjs-icon.svg",
            "/tech-stack/tailwind-css-icon.svg",
            "/tech-stack/typescript-icon.svg"
        ],
        link: "https://pennyflow.serhat-kaan-manisali.com",
    },
    {
        image: "/projects/el-pollo-loco.png",
        iconList: [
            "/tech-stack/javascript-icon.svg",
            "/tech-stack/css-icon.svg",
            "/tech-stack/html-icon.svg"
        ],
        link: "https://el-pollo-loco.serhat-kaan-manisali.com",
    },
    {
        image: "/projects/simple-crm.png",
        iconList: [
            "/tech-stack/angular-icon.png",
            "/tech-stack/sass-icon.svg",
            "/tech-stack/typescript-icon.svg",
            "/tech-stack/material-design-icon.svg",
            "/tech-stack/firebase-icon.svg"
        ],
        link: "https://simple-crm.serhat-kaan-manisali.com",
    }
];


export const footerLinks = [
    {
        id: 1,
        title: "GitHub",
        icon: <FaGithub />,
        href: "https://github.com/SerhatKaanManisali"
    },
    {
        id: 2,
        title: "LinkedIn",
        icon: <FaLinkedin />,
        href: "https://www.linkedin.com/in/serhat-kaan-manisali"
    },
    {
        id: 3,
        title: "Imprint",
        icon: <FaCircleInfo />,
        href: "/imprint",
    },
    {
        id: 4,
        title: "Privacy policy",
        icon: <MdPrivacyTip />,
        href: "/privacy-policy",
    },
];