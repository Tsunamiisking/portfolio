import * as React from "react";
import { motion } from "framer-motion";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { PieChart } from "@mui/x-charts/PieChart";
import {
  messagingstack,
  petpalstack,
  logbookstack,
  marketmobilestack,
} from "../data/stacks";
import NorthEastIcon from "@mui/icons-material/NorthEast";
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
      <div className="flex w-full ">
        <WorkCard
          src={PetPal}
          title="PetPal"
          description="A Django-based web application designed to simplify pet adoption.
            Built with Django, SQLite, HTML, and CSS, the platform allows users
            to create an account, browse a variety of pets, and adopt their
            perfect companion with ease."
          stackdata={petpalstack}
        />
      </div>
    </motion.div>
  );
};

const WorkCard = ({ stackdata, src, title, description }) => {
  return (
    <div className="flex justify-center flex-col md:flex-row  w-full p-5 no-border-card">
      {/* Image DIV */}
      <div className="w-full mb-5 md:w-90 md:mb-0 lg:w-full flex-1/3">
        <img src={src} alt="" />
      </div>

      <div className="flex md:ml-5 flex-2/3 align-middle">
        <div className="">
          <a href="">
            <h1 className="text-xl md:text-left text-left text-gray-300 mb-5 outfit-bold">
              {/* PetPal */}
              {title} <OpenInNewIcon sx={{ fontSize: 21 }} />
            </h1>
          </a>
          <p className="text-md text-left text-gray-300">
            {description}
          </p>
        </div>
        <div className="flex flex-col justify-center ml-2">
          <PieChart
            colors={["#2a9d8f", "#0d2833", "#e76f51", "#e9c46a"]}
            series={[
              {
                paddingAngle: 5,
                innerRadius: 30,
                outerRadius: 20,
                data: stackdata,
                highlightScope: { fade: "global", highlight: "item" },
                faded: {
                  innerRadius: 40,
                  additionalRadius: -30,
                  color: "gray",
                },
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
