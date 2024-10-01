import React from "react"
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Title from "./title";


const AboutMe = ( {locales} : ClientLocalesParams) => {

    const {text, highlight} = locales.aboutMe.title;
    const dictionary = locales.aboutMe.gridItems;
    const gridItems = [
        {
            id: 0,
            title: dictionary[0].title,
            description: dictionary[0].description,
            className: "grid-item-lg",
            image: "/bento-images/bento-grid-image-0.png",
            spareImage: "/grid.png",
        },
        {
            id: 1,
            title: dictionary[1].title,
            description: dictionary[1].description,
            className: "grid-item-md",
            textClassName: "w-full left-0 items-center text-center",
            spareImage: "/bento-images/grid.png",
        },
        {
            id: 2,
            title: dictionary[2].title,
            textClassName: "items-center text-center w-full left-0",
            className: "grid-item-sm",
            image: "/bento-images/bento-grid-image-2.png",
            spareImage: "bento-images/grid.png",
        },
        {
            id: 3,
            title: dictionary[3].title,
            description: dictionary[3].description,
            className: "grid-item-lg",
            image: "/bento-images/bento-grid-image-3.png",
            spareImage: "/bento-images/grid.png",
        },
        {
            id: 4,
            title: dictionary[4].title,
            className: "grid-item-sm",
            textClassName: "items-center text-center w-full left-0 max-sm:gap-7 lg:gap-3",
            button: dictionary[4].button
        }
    ];
    
    return (
        <section className="container-column gap-6" id="about-me">

            <Title text={text} highlight={highlight}/>

            <BentoGrid>
                {gridItems.map((item: BentoGridItem, i: number) => (
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