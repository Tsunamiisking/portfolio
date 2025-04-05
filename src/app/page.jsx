"use client";
import Image from "next/image";
import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "./components/ui/Provider";
import { DragCards } from "./components/Certificates";
// import Hire

export default function Home() {
  return (
    <main className="px-5 lg:px:10">
           <Header />
      <HeroSection />
      {/* <DragCards /> */}
    </main>
  );
}
