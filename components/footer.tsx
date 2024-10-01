"use client";

import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./magic-button";
import { AttentionSeeker, Fade, Zoom } from "react-awesome-reveal";
import { getFooterLinks } from "@/lib/data";

const Footer = ({ locales }: ClientLocalesParams) => {

    const { highlightBefore, highlight, highlightAfter, text, button } = locales.footer;
    const footerLinks = getFooterLinks(locales.footer);

    return (
        <footer className="footer-container" id="contact">

            <img src="/footer/grid-footer.png" alt="grid" className="footer-grid" loading="lazy" />

            <div className="container-column gap-10">

                <Fade duration={750} cascade triggerOnce fraction={1}>

                    <h1 className="text-main md:max-w-[45vw] text-center font-bold">
                        {highlightBefore} <span className="text-text-primary">{highlight}</span> {highlightAfter}
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

            <div className="footer-info">

                <Fade duration={750} delay={1000} triggerOnce>
                    <p className="footer-copyright">
                        Copyright © 2024 Serhat Kaan Manisali
                    </p>
                </Fade>

                <div className="footer-links">
                    {footerLinks.map((info) => (
                        <Zoom key={info.id} delay={info.id * 250 + 1000} duration={250} fraction={0.75} className="button-hover">
                            <AttentionSeeker effect="tada" delay={3500}>
                                <a
                                    href={info.href}
                                    target="_blank"
                                    className="footer-link"
                                    title={info.title}
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