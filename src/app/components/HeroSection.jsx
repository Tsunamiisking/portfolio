import React from "react";
import Header from "./Header";
import HeroCard from "./HeroCard";

const HeroSection = () => {
  const word = "< Hello World />";
  return (
    <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center mt-20 md:mt-0 px-5 md:pl-20 gap-10">
      <div className="">
        {/* Text Section */}
        <h1 className="md:text-left text-center text-3xl outfit-bold mb-5 textColor">
          Hi, I'm <span className="blueText">Allen Douglas 👋</span>
        </h1>
        <p className="text-2xl md:text-left text-center textColor mb-5 outfit-bold">
          A passionate Software Engineering student, Web Full-Stack and Mobile
          Dev.
        </p>
        <p className="text-xl md:text-left text-center textColor mb-5">
          I build efficient, user-focused solutions with a strong eye for design
          and performance.
        </p>
      </div>
      <div className="">
        <HeroCard />
      </div>
    </div>
  );
};

export default HeroSection;
