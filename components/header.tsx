"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";

const Header = ({
        text,
        highlight
    } : {
        text: string;
        highlight: string;
    }
) => {
    return (
        <h1 className="font-bold text-3xl md:text-5xl text-center flex">
            <Fade duration={750} triggerOnce fraction={1}>
                <span>{text}&nbsp;</span>
                <span className="text-[#CBACF9]">{highlight}</span>
            </Fade>
        </h1>
    );
};

export default Header;