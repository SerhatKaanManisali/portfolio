import React from "react";
import Image from "next/image";
import { HeroHighlight, Highlight } from "./ui/hero-hightlight";
import { GridBackground } from "./grid-background";

const Hero = () => {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center">
            <GridBackground />
            <div className="absolute flex flex-col items-center justify-center gap-3">
                <div className="flex justify-center items-center rounded-full h-80 w-80 overflow-hidden border border-white">
                    <Image src="/hero-image.png" alt="Hero image" width={250} height={250} loading="eager" />
                </div>
                <div className="text-center flex flex-col gap-3">
                    <h1 className="text-4xl font-bold">Serhat Kaan Manisali</h1>
                    <Highlight className="text-4xl font-semibold">Frontend Developer</Highlight>
                </div>
            </div>
        </section>
    );
}

export default Hero