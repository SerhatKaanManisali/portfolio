"use client";

import React from "react";
import { Slide } from "react-awesome-reveal";

const HeroBackground = () => {
  return (
    <div className="absolute top-0 w-full">
          <img src="/hero/grid-hero.png" alt="hero background" loading="eager" />

          <Slide duration={750} direction="down" triggerOnce className="absolute top-0 left-0">
              <img src="/hero/spotlight-left.png" alt="hero background" loading="eager" />
          </Slide>

          <Slide duration={750} direction="down" triggerOnce className="absolute top-0 right-0">
              <img src="/hero/spotlight-right.png" alt="hero background" loading="eager" />
          </Slide>
    </div>
  );
};

export default HeroBackground;