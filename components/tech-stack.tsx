"use client";

import React from "react"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { techStack } from "@/lib/data";
import Title from "./title";

const TechStack = ({ locales }: ClientLocalesParams) => {

    const highlight = locales.techStack.title.highlight;

    return (
        <section className="container-column gap-3" id="tech-stack">

            <Title highlight={highlight} />

            <InfiniteMovingCards items={techStack} speed="normal" />

        </section>
    );
};

export default TechStack;