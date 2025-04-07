import React from "react";
import { motion } from "framer-motion";

const WorkSection = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 5}}
      className="h-screen w-full flex justify-center items-center yellow-card opacity-40 rounded-2xl"
    ></motion.div>
  );
};

export default WorkSection;
