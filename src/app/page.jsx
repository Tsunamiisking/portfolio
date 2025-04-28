"use client";
import { useEffect, useRef, useState } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";
import Image from "next/image";
import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import WorkSection from "@/app/components/WorkSection";
import AboutSection from "@/app/components/AboutSection";
import { DragCards } from "./components/Certificates";
import HeroCard from "./components/HeroCard";

// import Hire

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  const constraintsRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);

  const handleClick = () => {
    if (!isDragging) {
      console.log("Ball clicked!");
      // your click logic here
    }
  };
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);
  return (
    <main
      ref={constraintsRef}
      className="px-5 md:px-20 relative w-full min-h-screen overflow-hidden"
    >
      {/* <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-blue-900 rounded-full pointer-events-none z-1000"
        style={{ x: springX, y: springY }}
      /> */}
      <Header />
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <motion.div 
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        dragMomentum={true}
        onClick={handleClick}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setTimeout(() => setIsDragging(false), 100)}
        className="dragable-ball absolute bg-white rounded-full z-[1000] w-10 h-10 lg:hidden cursor-grab active:cursor-grabbing right-10 bottom-[100px]"
      />
      {/* <DragCards /> */}
    </main>
  );
}
