"use client";

import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./magic-button";
import { footerLinks } from "@/lib/data";
import { AttentionSeeker, Fade, Zoom } from "react-awesome-reveal";
import { FloatingDockDesktop } from "./ui/floating-dock";

const Footer = ({ locales }: ClientLocales) => {

    const { highlightBefore, highlight, highlightAfter, text, button } = locales.footer;

    return (
        <footer className="w-full relative pb-10" id="contact">

            <img src="/footer/grid-footer.png" alt="grid" className="w-full h-full md:h-[150%] min-h-96 absolute bottom-0" loading="lazy" />

            <div className="flex flex-col items-center gap-10">

                <Fade duration={750} cascade triggerOnce fraction={1}>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl md:max-w-[45vw] text-center font-bold tracking-wide">
                        {highlightBefore} <span className="text-[#CBACF9]">{highlight}</span> {highlightAfter}
                    </h1>

                    <p className="text-[#BEC1DD] text-center">
                        {text}
                    </p>

                    <AttentionSeeker effect="headShake" delay={2500}>
                        <a href="mailto:mail@serhat-kaan-manisali.com">
                            <MagicButton
                                title={button}
                                icon={<FaLocationArrow />}
                            />
                        </a>
                    </AttentionSeeker>

                </Fade>

            </div>

            <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-6">

                <Fade duration={750} delay={1000} triggerOnce>
                    <p className="md:text-base text-sm md:font-normal h-16 font-light flex items-end">
                        Copyright © 2024 Serhat Kaan Manisali
                    </p>
                </Fade>

                <FloatingDockDesktop items={footerLinks} />

                <div className="flex items-center md:gap-3 gap-6 md:hidden">
                    {footerLinks.map((info) => (
                        <Zoom key={info.id} delay={info.id * 250 + 1000} duration={250} fraction={0.75}>
                            <AttentionSeeker effect="tada" delay={3500}>
                                <a
                                    href={info.href}
                                    className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg bg-[#161A31] rounded-lg border border-[#363749]"
                                >
                                    {info.icon}
                                </a>
                            </AttentionSeeker>
                        </Zoom>
                    ))}
                </div>

            </div>
        </footer>
    );
};

export default Footer;