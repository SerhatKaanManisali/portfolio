"use client";

import { cn } from "@/lib/utils";
import { StarsBackground } from "./stars-background";
import { ShootingStars } from "./shooting-stars";
import { useState } from "react";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import MagicButton from "../magic-button";
import { RiFileCopyLine } from "react-icons/ri";
import Lottie from "react-lottie-player";
import confettiAnimation from "@/lib/confetti.json";
import { AttentionSeeker, Slide } from "react-awesome-reveal";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-5 md:grid-rows-4 gap-6 h-full w-full",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    textClassName,
    title,
    description,
    image,
    spareImage,
    id,
    button
}: GridItem) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        const text = "mail@serhat-kaan-manisali.com";
        navigator.clipboard.writeText(text);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 5000);
    };

    return (
        <Slide
            className={cn("relative rounded-lg md:rounded-3xl overflow-hidden p-4 border border-[#363749] min-h-60 md:min-h-36 lg:min-h-48 bg-bg-gradient w-full h-fu",
                className
            )}
            triggerOnce
            duration={750}
            direction={id % 2 !== 0 ? "right" : "left"}
            fraction={0.75}
        >
            <div>

                {id === 1 && (
                    <>
                        <StarsBackground />
                        <ShootingStars />
                    </>
                )}

                {id === 4 && <BackgroundGradientAnimation />}

                {(image && id === 0) && (
                    <img src={image} className="absolute top-0 left-0 w-full h-full" loading="lazy" />
                )}

                {(image && id === 2) && (
                    <img src={image} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-2/3" loading="lazy" />
                )}

                {(image && id === 3) && (
                    <img src={image} className="absolute top-5 md:top-0 -right-10 md:-right-5 xl:right-0" loading="lazy" />
                )}

                {(spareImage && (id === 1 || id === 2 || id === 3)) && (
                    <img src={spareImage} className={`absolute top-11 w-full z-10 ${id === 2 ? "-right-8" : "right-0"}`} loading="lazy" />
                )}

                <div className={cn("absolute flex flex-col gap-1 text-pretty h-full", textClassName)}>
                    <h2 className="text-xl lg:text-3xl font-bold text-white">
                        {title}
                    </h2>

                    <p className="w-1/2 md:w-3/5 text-sm lg:text-lg text-[#BEC1DD]">
                        {description}
                    </p>

                    {id === 1 && (
                        <div className="flex justify-center gap-8 h-1/3">
                            <img src="/tech-stack/angular-icon.png" className="h-full" loading="lazy" />
                            <img src="/tech-stack/react-icon.png" className="h-full" loading="lazy" />
                        </div>
                    )}

                    {id === 4 && (
                        <>
                            <Lottie
                                loop={false}
                                animationData={confettiAnimation}
                                style={{ width: 400, height: 200, position: "absolute" }}
                                play={isCopied}
                                rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                            />

                            <AttentionSeeker effect="headShake" delay={5000} triggerOnce={false}>
                                <MagicButton
                                    title={isCopied ? button?.copied : button?.default}
                                    icon={<RiFileCopyLine />}
                                    handleClick={handleCopy}
                                    otherClasses={`!text-lg bg-[#161A31] ${isCopied && "!cursor-default"}`}
                                />
                            </AttentionSeeker>
                        </>
                    )}
                </div>

            </div>
        </Slide>
    );
};
