import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { FaLocationArrow } from "react-icons/fa6";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        description: string;
        link: string;
        image: string;
        iconList: string[];
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "flex flex-wrap items-center justify-center",
                className
            )}
        >
            {items.map((item, idx) => (
                <Link
                    href={item?.link}
                    key={item?.link}
                    className="relative group block p-2 h-full w-full max-w-[624px]"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    target="_blank"
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-slate-800 block rounded-lg md:rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card item={item}>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
    item
}: {
    className?: string;
    children: React.ReactNode;
    item: {
        image: string;
        iconList: string[];
    }
}) => {
    return (
        <div
            className={cn(
                "flex flex-col gap-4 rounded-lg md:rounded-3xl h-full w-full p-8 overflow-hidden bg-bg-gradient border border-[#3637496E] group-hover:border-slate-700 relative z-20",
                className
            )}
        >

            <Zoom duration={750} triggerOnce fraction={1}>
                <div className="flex justify-center relative overflow-hidden">
                    <img src="/projects/background.png" alt="image background" width={350} height={350} loading="lazy" className="rounded-lg border border-[#13162D] h-auto w-full" />
                    <img src={item.image} loading="lazy" className="z-10 absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-lg h-5/6 w-auto" />
                </div>

                <div className="flex flex-col gap-4">{children}</div>

                <div className="flex items-center justify-between">

                    <div className="flex items-center">
                        {item.iconList.map((icon, index) => (
                            <div
                                key={index}
                                className="border border-[#3637497D] rounded-full bg-bg-gradient lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                style={{
                                    transform: `translateX(-${5 * index + 2}px)`,
                                }}
                            >
                                <img src={icon} className="p-2" loading="lazy" />
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center items-center">
                        <p className="text-sm md:text-xl text-[#CBACF9] font-medium text-nowrap">
                            Check Live Site
                        </p>
                        <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>

                </div>
            </Zoom>

        </div>
    );
};

export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn(" font-bold tracking-wide text-xl", className)}>
            {children}
        </h4>
    );
};

export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "text-[#BEC1DD] tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};
