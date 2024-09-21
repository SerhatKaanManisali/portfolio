"use client";

import React from "react";
import { projects } from "@/lib/data";
import { HoverEffect } from "./ui/card-hover-effect";

const Portfolio = () => {
    return (
        <section className="flex flex-col items-center gap-5 w-full" id="portfolio">

            <h1 className="flex gap-2 md:gap-3 font-bold text-3xl md:text-5xl">
                <p>Some of my</p>
                <p className="text-[#CBACF9]">projects</p>
            </h1>

            <HoverEffect items={projects}/>

        </section>
    );
};

export default Portfolio;