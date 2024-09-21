"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Highlight } from "./ui/hero-hightlight";
import MagicButton from "./magic-button";
import { HiArrowUpRight } from "react-icons/hi2";
import { BackgroundGradient } from "./ui/background-gradient";
import { FlipWords } from "./ui/flip-words";
import { FaCaretDown } from "react-icons/fa6";

const Hero = () => {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);
    const flipWords = ["Frontend", "Angular", "React"];
    const handleFlip = () => setIsFlipped(!isFlipped);
    useEffect(() => {
        const checkScreenWidth = () => setIsDesktop(window.innerWidth >= 1024);
        checkScreenWidth();
        window.addEventListener("resize", checkScreenWidth);
        return () => window.removeEventListener("resize", checkScreenWidth);
    }, []);

    return (
        <section className="h-screen max-h-[1080px] w-full flex items-center justify-center max-md:pt-10 relative" id="hero">

            <div className="h-full max-h-[1080px] w-full bg-black-100 bg-grid-white/[0.05] absolute top-0 left-0 flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]" />
            </div>

            <div className="absolute flex flex-col items-center justify-between w-full max-w-screen-xl px-4 md:flex-row">

                <BackgroundGradient>
                    <div className="flex justify-center items-center w-80 h-80 rounded-full overflow-hidden bg-bg-gradient lg:w-[26rem] lg:h-[26rem]" onClick={isDesktop ? undefined : handleFlip} onMouseEnter={isDesktop ? handleFlip : undefined}>
                        <Image src="/hero-image.webp" alt="Hero image" width={isDesktop ? 350 : 250} height={isDesktop ? 350 : 250} priority className="w-5/6 h-auto" />

                    </div>
                </BackgroundGradient>

                <div className="flex flex-col items-center gap-4 md:gap-6 xl:gap-8">
                    <h1 className="text-3xl font-bold tracking-wider text-[#CBACF9] md:text-4xl lg:text-5xl">Serhat Kaan Manisali</h1>

                    <Highlight className="text-3xl font-semibold tracking-wider text-center w-full md:text-4xl lg:text-5xl">
                        <FlipWords words={flipWords} />
                        Developer
                    </Highlight>

                    <a href="mailto:mail@serhat-kaan-manisali.com" className="w-full lg:max-w-fit">
                        <MagicButton title="Hit me up" icon={<HiArrowUpRight />} />
                    </a>
                </div>
            </div>

            <FaCaretDown className="absolute bottom-0 size-7 animate-bounce" />
        </section>
    );
};

export default Hero;