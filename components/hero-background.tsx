"use client";

import React from "react";
import { Slide } from "react-awesome-reveal";

const HeroBackground = () => {
  return (
    <div className="hero-background-container">
          <img src="/hero/grid-hero.png" alt="hero background" loading="eager" />

          <Slide duration={750} direction="down" triggerOnce className="spotlight-left">
              <img src="/hero/spotlight-left.png" alt="hero background" loading="eager" />
          </Slide>

          <Slide duration={750} direction="down" triggerOnce className="spotlight-right">
              <img src="/hero/spotlight-right.png" alt="hero background" loading="eager" />
          </Slide>
    </div>
  );
};

export default HeroBackground;