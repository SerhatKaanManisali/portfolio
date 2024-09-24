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

export const projects = [
    {
        title: "Pennyflow - Banking Platform",
        description: "Seamlessly transfer your money. Let your penny flow.",
        image: "/projects/pennyflow.png",
        iconList: ["/tech-stack/react-icon.png", "/tech-stack/nextjs-icon.svg", "/tech-stack/tailwind-css-icon.svg", "/tech-stack/typescript-icon.svg"],
        link: "https://pennyflow.serhat-kaan-manisali.com",
    },
    {
        title: "El Pollo Loco - Jump 'n' Run Game",
        description: "Play as Pepe and face your dreaded enemy, El Pollo Loco.",
        image: "/projects/el-pollo-loco.png",
        iconList: ["/tech-stack/javascript-icon.svg", "/tech-stack/css-icon.svg", "/tech-stack/html-icon.svg"],
        link: "https://el-pollo-loco.serhat-kaan-manisali.com",
    },
    {
        title: "Simple CRM",
        description: "Organize customer relations and track your product sales.",
        image: "/projects/simple-crm.png",
        iconList: ["/tech-stack/angular-icon.png", "/tech-stack/sass-icon.svg", "/tech-stack/typescript-icon.svg", "/tech-stack/material-design-icon.svg", "/tech-stack/firebase-icon.svg"],
        link: "https://simple-crm.serhat-kaan-manisali.com",
    }
];

export const footerLinks: {
    id: number;
    image?: string;
    url: string;
}[] = [
    {
        id: 1,
        image: "/footer/github.png",
        url: "https://github.com/SerhatKaanManisali"
    },
    {
        id: 2,
        image: "/footer/linkedin.png",
        url: "https://www.linkedin.com/in/serhat-kaan-manisali"
    },
    {
        id: 3,
        image: "/footer/imprint.png",
        url: "/imprint",
    },
    {
        id: 4,
        image: "/footer/privacy-policy.png",
        url: "/privacy-policy",
    },
];