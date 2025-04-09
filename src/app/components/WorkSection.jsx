import React from "react";
import { motion } from "framer-motion";

const PetPal = "../assets/images/petpal.png";
const WorkSection = () => {
  return (
    <motion.div
      // whileInView={{ opacity: 1 }}
      // initial={{ opacity: 0 }}
      // transition={{ duration: 5}}
      className="mt-20 h-screen w-full rounded-2xl"
    >
      <div className="grid grid-cols-1 ">
        <WorkCard />
      </div>
    </motion.div>
  );
};

const WorkCard = () => {
  return (
    <div className="grid grid-col-1 w-full p-5 yellow-card">
      <div className="w-full md:w-1/2">
        <img src={PetPal} alt="" />
      </div>
      <div className="">
        <h1></h1>
      </div>
    </div>
  );
};

export default WorkSection;
