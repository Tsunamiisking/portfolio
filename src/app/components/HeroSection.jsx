import React from "react";
import Header from "./Header";
import HeroCard from "./HeroCard";
import { motion } from "framer-motion";

const wavingHand = "/assets/images/wavinghang.svg";
const HeroSection = () => {
  const word = "< Hello World />";
  return (
    <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center mt-20 md:mt-0 px-5 md:pl-20 gap-10">
      <div className="">
        {/* Text Section */}
        <div className="md:justify-start text-center flex justify-center items-center md:items-start">
        <h1 className="text-3xl outfit-bold textColor">
          Hello World{" "}
        </h1>
        <motion.img
            initial={{rotate: [0,0,0, 0]}}
            // animate={{rotate: [0, -45, 35, 0]}}
            whileHover={{rotate: [0, -45, 35, 0]}}
            exit={{rotate: [0, 0, 0, 0]}}
            transition={{duration: 1, repeat: false }}
            // transition={.2}
            src={wavingHand}
            alt="Waving Hand"
            height={40}
            width={40}
          > 
          </motion.img>
        </div>
        <h1 className="md:text-left text-center text-3xl outfit-bold mb-5 textColor">
        <span className="mt-5 block blueText"> I'm Allen Douglas</span>
        </h1>
        <p className="text-2xl md:text-left text-center text-gray-300 mb-5 outfit-bold">
          A passionate Software Engineering student, Web Full-Stack and Mobile
          Dev.
        </p>
        <p className="text-xl md:text-left text-center text-gray-300">
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
