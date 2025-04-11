import * as React from "react";
import { motion } from "framer-motion";
import { PieChart } from "@mui/x-charts/PieChart";

const VALUEFORMATER = (item) => `${item.value}%`;

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
      value: 500,
    },
    {
      label: "HTML/CSS",
      value: 200,
    },
    {
      label: "Sqlite3",
      value: 200,
    },
    {
      label: "Others",
      value: 100,
    },
  ];
  return (
    <div className="grid grid-cols-1 w-full p-5 yellow-card">
      <div className="w-full md:px-30 mb-5">
        <img src={PetPal} alt="" />
      </div>
      <div className="">
        <div>
          <h1>PetPal</h1>
        </div>
        <div>
          <PieChart
            colors={["#2a9d8f", "#0d2833", "#e76f51", "#e9c46a"]}
            series={[
              {
                // paddingAngle: 5,
                innerRadius: 30,
                outerRadius: 20,
                data: technology,
              },
            ]}
            margin={{ right: 5 }}
            width={80}
            height={80}
            legend={{ hidden: true }}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
