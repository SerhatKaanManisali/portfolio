import Hero from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/data";

export default function Home() {
    return (
        <main className="bg-black-100 flex flex-col justify-center items-center w-full">
            <FloatingNav navItems={navItems} />
            <Hero />
        </main>
    );
}