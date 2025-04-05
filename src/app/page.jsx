"use client";
import Image from "next/image";
import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import WorkSection from "@/app/components/WorkSection";
import { DragCards } from "./components/Certificates";

// import Hire

export default function Home() {
  return (
    <main className="px-5 lg:px:10">
           <Header />
      <HeroSection />
      <WorkSection />
      {/* <DragCards /> */}
    </main>
  );
}
