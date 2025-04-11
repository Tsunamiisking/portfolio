import * as React from 'react';
import { motion } from "framer-motion";
import { PieChart } from '@mui/x-charts/PieChart';


const VALUEFORMATER = (item) => `${item.value}%`

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
   const technology = [
    {
      label: "Python",
      value: 72.72,
    },
    {
      label: "HTML",
      value: 16.38,
    },
    {
      label: "CSS",
      value: 3.83,
    },
    {
      label: "Chrome OS",
      value: 2.42,
    },
    {
      label: "Other",
      value: 4.65,
    },
  ];
  return (
    <div className="grid grid-col-1 w-full p-5 yellow-card">
      <div className="w-full md:w-1/2">
        <img src={PetPal} alt="" />
      </div>
      <div className="">
      {/* <PieChart
      series={[
        {
          data: technology,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          VALUEFORMATER,
        },
      ]}
      height={100}
    /> */}
      </div>
    </div>
  );
};

export default WorkSection;
