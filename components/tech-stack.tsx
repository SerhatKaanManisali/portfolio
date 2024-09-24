"use client";

import React from "react"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { techStack } from "@/lib/data";
import Header from "./header";
import { Fade } from "react-awesome-reveal";

const TechStack = () => {
    return (
        <section className="flex flex-col items-center gap-3 w-full" id="tech-stack">

            <Header text="My" highlight="Tech Stack" />

            <InfiniteMovingCards items={techStack} speed="normal" />

        </section>
    );
};

export default TechStack;