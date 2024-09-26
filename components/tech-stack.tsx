"use client";

import React from "react"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { techStack } from "@/lib/data";
import Title from "./title";

const TechStack = ({ locales }: ClientLocales) => {

    const highlight = locales.techStack.title.highlight;

    return (
        <section className="flex flex-col items-center gap-3 w-full" id="tech-stack">

            <Title highlight={highlight} />

            <InfiniteMovingCards items={techStack} speed="normal" />

        </section>
    );
};

export default TechStack;