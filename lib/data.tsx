import { FaCircleInfo, FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdPrivacyTip } from "react-icons/md";

export const getNavitems = (locales: string[]) => [
    {
        name: locales[0],
        link: "#about-me",
    },
    {
        name: locales[1],
        link: "#tech-stack",
    },
    {
        name: locales[2],
        link: "#portfolio",
    },
    {
        name: locales[3],
        link: "#contact",
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

export const getProjects = (locales: ProjectLocalesProps[]) => [
    {
        title: locales[0].title,
        description: locales[0].description,
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
        title: locales[1].title,
        description: locales[1].description,
        image: "/projects/el-pollo-loco.png",
        iconList: [
            "/tech-stack/javascript-icon.svg",
            "/tech-stack/css-icon.svg",
            "/tech-stack/html-icon.svg"
        ],
        link: "https://el-pollo-loco.serhat-kaan-manisali.com",
    },
    {
        title: locales[2].title,
        description: locales[2].description,
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

export const getFooterLinks = (locales: FooterLinksLocalesProps) => [
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
        title: locales.imprint,
        icon: <FaCircleInfo />,
        href: "/imprint",
    },
    {
        id: 4,
        title: locales.privacyPolicy,
        icon: <MdPrivacyTip />,
        href: "/privacy-policy",
    },
];