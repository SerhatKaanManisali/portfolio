import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/data";
import React from "react";

const Imprint = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-4 text-center px-4 lg:max-w-[50vw] h-screen mx-auto">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">Imprint</h1>
            <h3 className="font-semibold text-2xl md:text-3xl lg:text-4xl">Information according to 5 TMG</h3>
            <p>Serhat Kaan Manisali<br />Heinrich-Siems-Stra&szlig;e 7<br />38642 Goslar</p>
            <h3 className="font-semibold text-2xl md:text-3xl lg:text-4xl">Contact</h3>
            <p>Phone: +49 (0) 178 69 68 886<br />e-mail: mail&#64;serhat-kaan-manisali.com </p>
        </section>
    );
};

export default Imprint;