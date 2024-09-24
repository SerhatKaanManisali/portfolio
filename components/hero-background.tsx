import React from "react";

const HeroBackground = () => {
  return (
    <div className="absolute top-0 w-full">
          <img src="/hero/grid-hero.png" alt="hero background" loading="eager" />
          <img src="/hero/spotlight-left.png" alt="hero background" loading="eager" className="absolute top-0 left-0" />
          <img src="/hero/spotlight-right.png" alt="hero background" loading="eager" className="absolute top-0 right-0" />
    </div>
  );
};

export default HeroBackground;