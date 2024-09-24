"use client";

import React from "react";
import { projects } from "@/lib/data";
import { HoverEffect } from "./ui/card-hover-effect";
import Header from "./header";

const Portfolio = () => {
    return (
        <section className="flex flex-col items-center gap-5 w-full" id="portfolio">

            <Header text="Some of my" highlight="projects"/>

            <HoverEffect items={projects}/>

        </section>
    );
};

export default Portfolio;