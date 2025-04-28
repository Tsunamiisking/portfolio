"use client";
import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

const NavMenu = [
  { name: "Hero", href: "#hero" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const SocialIcons = [
  {
    name: "LinkedIn",
    icon: <FiLinkedin color="white" />,
    href: "https://www.linkedin.com/in/yourprofile",
  },
  {
    name: "Instagram",
    icon: <FiInstagram color="white" />,
    href: "https://www.instagram.com/yourprofile",
  },
  {
    name: "GitHub",
    icon: <FiGithub color="white" />,
    href: "",
  },
  {
    name: "X",
    icon: <FiTwitter color="white" />,
    href: "https://twitter.com/yourprofile",
  },
];

const Header = () => {
  return (
      <div className="flex md:grid md:grid-cols-2 justify-center items-center md:justify-between md:px-20 w-full py-5 rounded-xl sticky z-100 top-5 manrope-bold card">
        <div className="flex justify-between md:justify-start gap-10 order-2 md:order-1 outfit-bold ">
          {NavMenu.map((item, index) => {
            return (
              <div key={index} className="flex items-center ">
                <a className="textColor" href={item.href}>
                  {item.name}
                </a>
              </div>
            );
          })}
        </div>


        <div className="order-1 md:order-2 md:flex md:gap-10 md:justify-end hidden">
          {SocialIcons.map((item, index) => {
            return (
              <div key={index} className="flex items-center">
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.icon}
                </a>
              </div>
            );
          })}
        </div>
      </div>
  );
};
export default Header;
