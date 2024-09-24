"use client";

import React from "react";
import { LinkPreview } from "./ui/link-preview";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./magic-button";
import { footerLinks } from "@/lib/data";
import { AttentionSeeker, Fade, Zoom } from "react-awesome-reveal";

const Footer = () => {
    return (
        <footer className="w-full relative pb-10" id="contact">

            <img src="/footer/grid-footer.png" alt="grid" className="w-full h-full md:h-[150%] min-h-96 absolute bottom-0" loading="lazy"/>

            <div className="flex flex-col items-center gap-10">

                <Fade duration={750} cascade triggerOnce fraction={1}>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl md:max-w-[45vw] text-center font-bold tracking-wide">
                        Ready to take <span className="text-[#CBACF9]">your</span> digital
                        presence to the next level?
                    </h1>

                    <p className="text-[#BEC1DD] text-center">
                        Reach out to me today and let&apos;s discuss how I can help you
                        achieve your goals.
                    </p>

                    <AttentionSeeker effect="headShake" delay={2500}>
                        <a href="mailto:mail@serhat-kaan-manisali.com">
                            <MagicButton
                                title="Let's get in touch"
                                icon={<FaLocationArrow />}
                            />
                        </a>
                    </AttentionSeeker>
                </Fade>

            </div>

            <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-6">

                <Fade duration={750} delay={1000} triggerOnce>
                    <p className="md:text-base text-sm md:font-normal font-light">
                        Copyright © 2024 Serhat Kaan Manisali
                    </p>
                </Fade>

                <div className="flex items-center md:gap-3 gap-6">
                    {footerLinks.map((info) => (
                        <Zoom key={info.id} delay={info.id * 250 + 1000} duration={250} fraction={0.75}>
                            <AttentionSeeker effect="tada" delay={3500}>
                                <LinkPreview
                                    url={info.url}
                                    className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg bg-[#161A31] rounded-lg border border-[#363749]"
                                >
                                    <img src={info.image} alt="icons" className="w-5"/>
                                </LinkPreview>
                            </AttentionSeeker>
                        </Zoom>
                    ))}
                </div>

            </div>
        </footer>
    );
};

export default Footer;