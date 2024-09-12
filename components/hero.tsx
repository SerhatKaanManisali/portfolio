"use client";

import React from "react";
import { CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import { Highlight } from "./ui/hero-hightlight";
import MagicButton from "./magic-button";
import { HiArrowUpRight } from "react-icons/hi2";
import { BackgroundGradient } from "./ui/background-gradient";

const Hero = () => {
    return (
        <section className="h-screen w-full flex flex-col items-center justify-center">
            
            <div className="h-screen w-full bg-black-100 bg-grid-white/[0.1] absolute top-0 left-0 flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
            </div>

            <BackgroundGradient animate className="w-[338px] h-[601px] flex items-center justify-center">
                    <CardContainer className="absolute flex flex-col items-center justify-center gap-8 px-2 pb-8 border border-gray-900 rounded-3xl bg-bg-gradient">

                        <CardItem translateZ={75} className="flex justify-center items-center w-80">
                            <Image src="/hero-image.webp" alt="Hero image" width={250} height={250} priority />
                        </CardItem>

                        <CardItem translateZ={75} className="flex flex-col items-center gap-8">
                            <CardItem className="text-center flex flex-col gap-3 w-full">
                                <h1 className="text-2xl font-bold tracking-wider">Serhat Kaan Manisali</h1>
                                <Highlight className="text-2xl font-semibold tracking-wider">Frontend Developer</Highlight>
                            </CardItem>

                            <CardItem href="mailto:mail@serhat-kaan-manisali.com" className="w-full" as="a">
                                <MagicButton title="Hit me up" icon={<HiArrowUpRight />} />
                            </CardItem>
                        </CardItem>

                    </CardContainer>
            </BackgroundGradient>

        </section>
    );
}

export default Hero