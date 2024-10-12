"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "./ui/particles";
import { GoArrowUpRight } from "react-icons/go";

export function ParticlesDemo() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff"); 

  useEffect(() => {
    setColor("#ffffff"); 
  }, [theme]);

  return (
    <div className="relative flex h-full w-full justify-start mt-20 justify-center overflow-hidden bg-black">
      <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b text-white bg-clip-text text-center text-7xl font-semibold leading-none ">
      The <span className="bg-gradient-to-r from-blue-700 via-sky-400 to-blue-100 bg-clip-text text-transparent">Unified</span> Platform for
        <div>
            Everything
        <span className="bg-gradient-to-r from-blue-700 via-sky-400 to-blue-100 bg-clip-text text-transparent"> NFT</span>
        </div>
        <div className="text-xl text-neutral-400 mt-10">
            Liquidating an NFT to any token and Manage your NFT &
            <div>
                Easy to get a NFT Loan.
            </div>
        </div>
        <button className="bg-white text-black mt-18 text-lg px-3 py-2 rounded-xl cursor-pointer">
          Explore Zaffy
        </button>
      </div>
    
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color} 
        refresh
      />
    </div>
  );
}
