import AboutMe from "@/components/about-me";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import TechStack from "@/components/tech-stack";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/data";

export default function Home() {
    return (
        <main className="flex flex-col gap-20 lg:gap-40 justify-center items-center w-full mx-auto max-w-screen-xl px-4">
            <FloatingNav navItems={navItems} />
            <Hero />
            <AboutMe />
            <TechStack />
            <Portfolio />
        </main>
    );
}