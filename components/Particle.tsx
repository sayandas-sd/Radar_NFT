"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "./ui/particles";

export function ParticlesDemo() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff"); 

  useEffect(() => {
    setColor("#ffffff"); 
  }, [theme]);

  return (
    <div className="relative flex h-full w-full justify-start mt-20 justify-center overflow-hidden bg-black">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-300/90 to-gray-600 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
      Liquidating an NFT to any token
      </span>
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
