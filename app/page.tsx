import AboutMe from "@/components/about-me";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HeroBackground from "@/components/hero-background";
import Portfolio from "@/components/portfolio";
import TechStack from "@/components/tech-stack";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/data";

export default function Home() {
    return (
        <main className="flex flex-col gap-20 lg:gap-40 justify-center items-center w-full mx-auto max-w-screen-xl px-4 overflow-x-hidden">
            <FloatingNav navItems={navItems} />
            <HeroBackground />
            <Hero />
            <AboutMe />
            <TechStack />
            <Portfolio />
            <Footer />
        </main>
    );
}