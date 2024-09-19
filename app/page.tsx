import AboutMe from "@/components/about-me";
import Hero from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/data";

export default function Home() {
    return (
        <main className=" flex flex-col md:gap-4 justify-center items-center w-full mx-auto max-w-screen-xl">
            <FloatingNav navItems={navItems} />
            <Hero />
            <AboutMe />
        </main>
    );
}