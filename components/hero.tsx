import React from "react";
import Image from "next/image";
import { Highlight } from "./ui/hero-hightlight";
import MagicButton from "./magic-button";
import { HiArrowUpRight } from "react-icons/hi2";

const Hero = () => {
    return (
        <section className="h-screen w-full flex flex-col items-center justify-center">
            
            <div className="h-screen w-full bg-black-100 bg-grid-white/[0.1] absolute top-0 left-0 flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
            </div>

            <div className="absolute flex flex-col items-center justify-center gap-8">

                <div className="flex justify-center items-center rounded-full h-[22rem] w-[22rem] overflow-hidden border border-white">
                    <Image src="/hero-image.png" alt="Hero image" width={250} height={250} priority />
                </div>

                <div className="text-center flex flex-col gap-3 w-full">
                    <h1 className="text-3xl font-bold tracking-widest">Serhat Kaan Manisali</h1>
                    <Highlight className="text-3xl font-semibold tracking-wider">Frontend Developer</Highlight>
                </div>

                <a href="mailto:mail@serhat-kaan-manisali.com" className="w-full">
                    <MagicButton title="Hit me up" icon={<HiArrowUpRight />}/>
                </a>

            </div>

        </section>
    );
}

export default Hero