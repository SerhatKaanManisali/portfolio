"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";

const Title = ({
        text,
        highlight
    } : TitleParams
) => {
    return (
        <h1 className="section-title">
            <Fade duration={750} triggerOnce fraction={1}>
                <span>{text}&nbsp;</span>
                <span className="text-text-primary">{highlight}</span>
            </Fade>
        </h1>
    );
};

export default Title;