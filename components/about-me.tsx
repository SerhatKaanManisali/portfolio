import React from "react"
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Title from "./title";


const AboutMe = ( {locales} : ClientLocales) => {

    const {text, highlight} = locales.aboutMe.title;

    const dictionary = locales.aboutMe;
    
    const staticGridItems = [
        {
            id: 0,
            className: "md:col-span-3 md:row-span-2",
            image: "/bento-images/bento-grid-image-0.png",
            spareImage: "/grid.png",
        },
        {
            id: 1,
            className: "md:col-span-2 md:row-span-2",
            textClassName: "w-full left-0 items-center text-center",
            spareImage: "/bento-images/grid.png",
        },
        {
            id: 2,
            textClassName: "items-center text-center w-full left-0",
            className: "md:col-span-2 md:row-span-1",
            image: "/bento-images/bento-grid-image-2.png",
            spareImage: "bento-images/grid.png",
        },
        {
            id: 3,
            className: "md:col-span-3 md:row-span-2",
            image: "/bento-images/bento-grid-image-3.png",
            spareImage: "/bento-images/grid.png",
        },
        {
            id: 4,
            className: "md:col-span-2 md:row-span-1",
            textClassName: "items-center text-center w-full left-0 max-sm:gap-7 lg:gap-3",
        }
    ];

    const gridItems = dictionary.gridItems.map((item: any, idx: number) => ({
        ...item,
        ...staticGridItems[idx]
    }));
    
    return (
        <section className="flex flex-col items-center gap-6 w-full" id="about-me">

            <Title text={text} highlight={highlight}/>

            <BentoGrid>
                {gridItems.map((item: GridItem, i: number) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        textClassName={item.textClassName}
                        className={item.className}
                        image={item.image}
                        spareImage={item.spareImage}
                        id={item.id}
                        button={item.button}
                    />
                ))}
            </BentoGrid>

        </section>
    );
};

export default AboutMe;