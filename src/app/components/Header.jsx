"use client"
import React from 'react'
const NavMenu = [
  { name: "Hero", href: "#hero" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];


const Header = () => {
  return (
    <div className="flex md:grid md:grid-cols-2 justify-center items-center md:justify-between backgroundButton md:px-20 w-full py-5 rounded-xl manrope-bold sticky top-5 z-100">
        <div className='flex justify-between md:justify-start gap-10 order-2 md:order-1 font'>
            {NavMenu.map((item, index) => {
                return <div key={index} className='flex items-center'><a href={item.href}>{item.name}</a></div>
            })}
        </div>
        <div className='md:justify-end order-1 md:order-2 md:flex hidden'>
            socials
        </div>
    </div>
)
}
export default Header
