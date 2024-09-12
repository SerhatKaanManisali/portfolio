import Hero from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/data";

export default function Home() {
    return (
        <main className="mx-auto bg-black-100 flex flex-col justify-center items-center">
            <FloatingNav navItems={navItems} />
            <Hero />
        </main>
    );
}