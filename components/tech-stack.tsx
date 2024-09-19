import React from "react"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const TechStack = () => {
    return (
        <section className="flex flex-col items-center gap-3 w-full max-md:mt-4" id="tech-stack">

            <h1 className="flex gap-3 font-bold text-3xl md:text-5xl">
                <p>My</p>
                <p className="text-[#CBACF9]">Tech Stack</p>
            </h1>

            <InfiniteMovingCards items={movingItems} speed="normal" />
            
        </section>
    );
};

const movingItems = [
    {
        name: "Angular",
        src: "/icons/angular-icon.png"
    },
    {
        name: "SCSS/SASS",
        src: "/icons/sass-icon.svg"
    },
    {
        name: "Material Design",
        src: "/icons/material-design-icon.svg"
    },
    {
        name: "Firebase",
        src: "/icons/firebase-icon.svg"
    },
    {
        name: "React",
        src: "/icons/react-icon.png"
    },
    {
        name: "Next.js",
        src: "/icons/nextjs-icon.svg"
    },
    {
        name: "TailwindCSS",
        src: "/icons/tailwind-css-icon.svg"
    },
    {
        name: "JavaScript",
        src: "/icons/javascript-icon.svg"
    },
    {
        name: "TypeScript",
        src: "/icons/typescript-icon.svg"
    },
    {
        name: "REST API",
        src: "/icons/rest-api-icon.svg"
    },
    {
        name: "Git",
        src: "/icons/git-icon.svg"
    },
];

export default TechStack;