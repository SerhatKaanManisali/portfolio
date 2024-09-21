import React from "react"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { techStack } from "@/lib/data";

const TechStack = () => {
    return (
        <section className="flex flex-col items-center gap-3 w-full" id="tech-stack">

            <h1 className="flex gap-2 md:gap-3 font-bold text-3xl md:text-5xl">
                <p>My</p>
                <p className="text-[#CBACF9]">Tech Stack</p>
            </h1>

            <InfiniteMovingCards items={techStack} speed="normal" />
            
        </section>
    );
};

export default TechStack;