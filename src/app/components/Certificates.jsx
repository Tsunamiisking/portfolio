"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const CS50 = "/assets/images/CS50x.png";
const UI = "/assets/images/UI.jpg";
const figma = "/assets/images/figma.png";

export const DragCards = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-primary">
      <h2 className="relative z-0 text-6xl font-black text-cursor md:text-[100px]">
        PROJECTS<span className="">.</span>
      </h2>
      <Cards />
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src={figma}
        alt="CS50x Certificate"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-36 md:w-56 object-contain"  // Added object-contain
      />
      <Card
        containerRef={containerRef}
        src={UI}
        alt="UI Certificate"
        rotate="12deg"
        top="45%"
        left="60%"
        className="w-24 md:w-48 object-contain"  // Added object-contain
      />
      <Card
        containerRef={containerRef}
        src={CS50}
        alt="Figma Certificate"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-52 md:w-80 object-contain"  // Added object-contain
      />
    </div>
  );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
    onMouseDown={updateZIndex}
    style={{
      top,
      left,
      rotate,
      zIndex,
    }}
    className={twMerge(
      "drag-elements absolute w-48 p-1 pb-4",
      className
    )}
    src={src}
    alt={alt}
    drag
    dragConstraints={containerRef}
    // Uncomment below and remove dragElastic to remove movement after release
      // dragMomentum={false}
    dragElastic={0.65}
  />
  );
};