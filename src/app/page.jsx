"use client";
import Image from "next/image";
import HeroSection from "@/app/components/HeroSection";
import VelocityText from "@/app/components/Hireme";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "./components/ui/Provider";

export default function Home() {
  return (
      <HeroSection />
  );
}
