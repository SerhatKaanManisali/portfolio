"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Highlight } from "./ui/hero-hightlight";
import MagicButton from "./magic-button";
import { BackgroundGradient } from "./ui/background-gradient";
import { FlipWords } from "./ui/flip-words";
import { FaCaretDown, FaLocationArrow } from "react-icons/fa6";
import { AttentionSeeker, Fade, JackInTheBox } from "react-awesome-reveal";



const Hero = ({locales, lang}: ClientLocales) => {

    const dictionary = locales.hero;
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

            <div className="absolute flex flex-col items-center justify-between max-sm:gap-2 w-full max-w-screen-xl md:flex-row xl:px-4">

                <JackInTheBox duration={750} delay={500} triggerOnce>
                    <BackgroundGradient>
                        <div className="flex justify-center items-center w-80 h-80 rounded-full overflow-hidden bg-bg-gradient lg:w-[26rem] lg:h-[26rem]" onClick={isDesktop ? undefined : handleFlip} onMouseEnter={isDesktop ? handleFlip : undefined}>
                            <Image src={`/${lang}/hero/hero-image.webp`} alt="Hero image" width={isDesktop ? 350 : 250} height={isDesktop ? 350 : 250} priority className="w-5/6 h-auto" />
                        </div>
                    </BackgroundGradient>
                </JackInTheBox>

                <div className="flex flex-col items-center gap-6 md:gap-8 xl:gap-10">
                    <Fade duration={750} delay={1000} triggerOnce cascade={true}>

                        <h1 className="text-3xl font-bold tracking-wider text-[#CBACF9] md:text-4xl lg:text-5xl text-nowrap">Serhat Kaan Manisali</h1>

                        <Highlight className="text-3xl font-semibold tracking-wider text-center w-full md:text-4xl lg:text-5xl">
                            <FlipWords words={flipWords} />
                            {dictionary.subtitle}
                        </Highlight>

                        <AttentionSeeker effect="headShake" delay={3500}>
                            <a href="#about-me" className="w-full lg:max-w-fit">
                                <MagicButton title={dictionary.button} icon={<FaLocationArrow />} />
                            </a>
                        </AttentionSeeker>

                    </Fade>
                </div>

            </div>

            <div className="absolute bottom-0">
                <Fade duration={750} delay={2250}>
                    <FaCaretDown className="size-7 animate-bounce" />
                </Fade>
            </div>
            
        </section>
    );
};

export default Hero;