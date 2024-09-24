import React from "react"
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Header from "./header";


const AboutMe = () => {
    return (
        <section className="flex flex-col items-center gap-6 w-full" id="about-me">

            <Header text="About" highlight="Me"/>

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
        image: "/bento-images/bento-grid-image-0.png",
        spareImage: "/grid.png",
    },
    {
        id: 1,
        title: "Angular & React",
        textClassName: "w-full left-0 items-center text-center",
        className: "md:col-span-2 md:row-span-2",
        description: "Experienced in developing web applications with JavaScript, Angular and React, having built over 10 projects.",
        spareImage: "/bento-images/grid.png",
    },
    {
        id: 2,
        title: "Responsive Design",
        textClassName: "items-center text-center w-full left-0",
        className: "md:col-span-2 md:row-span-1",
        image: "/bento-images/bento-grid-image-2.png",
        spareImage: "bento-images/grid.png",
    },
    {
        id: 3,
        title: "Clean Code",
        description: "Place great emphasis on clean and readable code.",
        className: "md:col-span-3 md:row-span-2",
        image: "/bento-images/bento-grid-image-3.png",
        spareImage: "/bento-images/grid.png",
    },
    {
        id: 4,
        title: "Do you want to start a project together?",
        textClassName: "items-center text-center w-full left-0 max-sm:gap-7 lg:gap-3",
        className: "md:col-span-2 md:row-span-1",
    },
];

export default AboutMe;