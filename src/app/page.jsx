"use client";
import { useEffect } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";
import Image from "next/image";
import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import WorkSection from "@/app/components/WorkSection";
import { DragCards } from "./components/Certificates";
import HeroCard from "./components/HeroCard";

// import Hire

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);
  return (
    <main className="px-5 lg:px:10">
      {/* <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-cursor rounded-full pointer-events-none z-1000"
        style={{ x: springX, y: springY }}
      /> */}
      <Header />
      <HeroSection />
      <WorkSection />
      {/* <DragCards /> */}
    </main>
  );
}
