import React from "react";
import { LinkPreview } from "./ui/link-preview";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./magic-button";
import { socialMedia } from "@/lib/data";

const Footer = () => {
    return (
        <footer className="w-full relative pb-10" id="contact">

            <img src="/footer/grid-footer.png" alt="grid" className="w-full h-full min-h-96 absolute bottom-32" loading="lazy"/>

            <div className="flex flex-col items-center gap-10">

                <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold tracking-wide xl:text-nowrap">
                    Ready to take <span className="text-[#CBACF9]">your</span> digital
                    presence to the next level?
                </h1>

                <p className="text-[#BEC1DD] text-center">
                    Reach out to me today and let&apos;s discuss how I can help you
                    achieve your goals.
                </p>

                <a href="mailto:mail@serhat-kaan-manisali.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                    />
                </a>

            </div>

            <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-6">

                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2024 Serhat Kaan Manisali
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <LinkPreview
                            key={info.id}
                            url={info.url}
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg bg-[#161A31] rounded-lg border border-[#363749]"
                        >
                            <img src={info.image} alt="icons" width={20} height={20} />
                        </LinkPreview>
                    ))}
                </div>

            </div>
        </footer>
    );
};

export default Footer;