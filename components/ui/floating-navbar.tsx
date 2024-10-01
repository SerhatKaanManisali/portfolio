"use client";
import React, { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getNavitems } from "@/lib/data";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export const FloatingNav = ({ locales, lang }: ClientLocalesParams) => {

    const router = useRouter();
    const pathname = usePathname();
    const navItems = getNavitems(locales.navItems);
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(true);

    const toggleLanguage = () => {
        const segments = pathname.split("/").filter(Boolean);
        const hash = window.location.hash;
        segments[0] = segments[0] === "de-DE" ? "en" : "de-DE";
        const newPath = `/${segments.join("/")}${hash}`;
        router.replace(newPath);
    }

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        if (typeof current === "number") {
            const direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                setVisible(true);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? -15 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className="flex max-w-fit lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-6 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4"
                style={{
                    backdropFilter: "blur(16px) saturate(180%)",
                    backgroundColor: "rgba(17, 25, 40, 0.75)",
                    borderRadius: "12px",
                    border: "1px solid rgba(255, 255, 255, 0.125)",
                }}
            >
                {navItems.map((navItem: any, idx: number) => (
                    <Link
                        key={`link=${idx}`}
                        href={`/${lang}/${navItem.link}`}
                        className={cn(
                            "relative items-center flex space-x-1 hover:text-[#BEC1DD]"
                        )}
                    >
                        <span className="text-xs sm:text-sm !cursor-pointer text-nowrap">{navItem.name}</span>
                    </Link>
                ))}

                <button onClick={toggleLanguage}>
                    {lang === "en"
                        ? <Image src={`${lang}/german.svg`} alt="DE" width={20} height={20} loading="eager" className="h-3 w-5 hover:scale-125 transition-transform"/>
                        : <Image src={`${lang}/english.svg`} alt="EN" width={20} height={20} loading="eager" className="h-3 w-5 hover:scale-125 transition-transform"/>
                    }
                </button>

            </motion.div>
        </AnimatePresence>
    );
};