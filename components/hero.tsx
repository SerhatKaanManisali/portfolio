"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Highlight } from "./ui/hero-hightlight";
import MagicButton from "./magic-button";
import { BackgroundGradient } from "./ui/background-gradient";
import { FlipWords } from "./ui/flip-words";
import { FaCaretDown, FaLocationArrow } from "react-icons/fa6";
import { AttentionSeeker, Fade, JackInTheBox } from "react-awesome-reveal";
import Link from "next/link";



const Hero = ({locales, lang}: ClientLocalesParams) => {

    const dictionary = locales.hero;
    const [isDesktop, setIsDesktop] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);
    const flipWords = ["Frontend", "Web", "Angular", "React", "JavaScript"];
    const handleFlip = () => setIsFlipped(!isFlipped);

    useEffect(() => {
        const checkScreenWidth = () => setIsDesktop(window.innerWidth >= 1024);
        checkScreenWidth();
        window.addEventListener("resize", checkScreenWidth);
        return () => window.removeEventListener("resize", checkScreenWidth);
    }, []);

    return (
        <section className="hero-container" id="hero">

            <div className="hero-content">

                <JackInTheBox duration={750} delay={500} triggerOnce>
                    <BackgroundGradient>
                        <div className="hero-image" onClick={isDesktop ? undefined : handleFlip} onMouseEnter={isDesktop ? handleFlip : undefined}>
                            <Image src={`/${lang}/hero/hero-image.webp`} alt="Hero image" width={isDesktop ? 350 : 250} height={isDesktop ? 350 : 250} priority className="w-5/6 h-auto" />
                        </div>
                    </BackgroundGradient>
                </JackInTheBox>

                <div className="hero-text">
                    <Fade duration={750} delay={1000} triggerOnce cascade={true}>

                        <h1 className="hero-title">Serhat Kaan Manisali</h1>

                        <Highlight className="hero-subtitle">
                            <FlipWords words={flipWords} />
                            {dictionary.subtitle}
                        </Highlight>

                        <AttentionSeeker effect="headShake" delay={3500}>
                            <Link href="#about-me" className="w-full lg:max-w-fit">
                                <MagicButton title={dictionary.button} icon={<FaLocationArrow />} />
                            </Link>
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