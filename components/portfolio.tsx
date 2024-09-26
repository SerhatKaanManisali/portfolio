"use client";

import React from "react";
import { staticProjects } from "@/lib/data";
import { HoverEffect } from "./ui/card-hover-effect";
import Title from "./title";

const Portfolio = ({ locales }: ClientLocales) => {

    const title = locales.portfolio.title;
    const dynamicProjects = locales.portfolio.projects;
    const linkText = locales.portfolio.linkText;

    const projects = dynamicProjects.map((project: any, idx: number) => ({
        ...project,
        ...staticProjects[idx],
    }));

    return (
        <section className="flex flex-col items-center gap-5 w-full" id="portfolio">

            <Title text={title.text} highlight={title.highlight} />

            <HoverEffect items={projects} linkText={linkText} />

        </section>
    );
};

export default Portfolio;