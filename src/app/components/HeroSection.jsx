import React from "react";
import Header from "./Header";
import HeroCard from "./HeroCard";

const HeroSection = () => {
  const word = "< Hello World />";
  return (
    <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center">
      <div className="">
        {/* Text Section */}
        <h1 className="md:text-left text-center text-3xl outfit-bold mb-5 textColor">Hi, I'm Allen</h1>
        <p>
          A passionate Software Engineering student, Web Full-Stack and Mobile Dev. I
          build efficient, user-focused solutions with a strong eye for design
          and performance.
        </p>
      </div>
      <div className="hidden md:block">
        <HeroCard  />
      </div>
    </div>
  );
};

export default HeroSection;
