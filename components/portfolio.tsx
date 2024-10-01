"use client";

import React from "react";
import { getProjects } from "@/lib/data";
import { HoverEffect } from "./ui/card-hover-effect";
import Title from "./title";

const Portfolio = ({ locales }: ClientLocalesParams) => {

    const title = locales.portfolio.title;
    const linkText = locales.portfolio.linkText;
    const projects = getProjects(locales.portfolio.projects);

    return (
        <section className="container-column gap-5" id="portfolio">

            <Title text={title.text} highlight={title.highlight} />

            <HoverEffect items={projects} linkText={linkText} />

        </section>
    );
};

export default Portfolio;