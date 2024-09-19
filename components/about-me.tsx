import React from "react"
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const AboutMe = () => {
    return (
        <section className="h-screen w-full px-4" id="about-me">
            <BentoGrid>
                {gridItems.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        textClassName={item.textClassName}
                        className={item.className}
                        image={item.image}
                        spareImage={item.spareImage}
                        id={item.id}
                    />
                ))}
            </BentoGrid>
        </section>
    );
};

const gridItems = [
    {
        id: 0,
        title: "User Friendly",
        description: "Focus on creating smooth and intuitive user experience.",
        className: "md:col-span-3 md:row-span-2",
        image: "/bento-grid-image-0.png",
        spareImage: "/grid.png",
    },
    {
        id: 1,
        title: "Angular & React",
        textClassName: "w-full left-0 items-center text-center",
        className: "md:col-span-2 md:row-span-2",
        description: "Experienced in developing web applications with Angular and React, having built over 10 projects.",
        spareImage: "/grid.png",
    },
    {
        id: 2,
        title: "Responsive Design",
        textClassName: "items-center text-center w-full left-0",
        className: "md:col-span-2 md:row-span-2",
        image: "/bento-grid-image-2.png",
        spareImage: "/grid.png",
    },
    {
        id: 3,
        title: "Clean Code",
        description: "Place great emphasis on clean code.",
        className: "md:col-span-3 md:row-span-2",
        image: "/bento-grid-image-3.png",
        spareImage: "/grid.png",
    },
    
];

export default AboutMe;