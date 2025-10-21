"use client";

import { useState, useEffect } from "react";
import Built from "@/components/built";
import Confidential from "@/components/confidential";
import HomeHero from "@/components/home-hero";
import Revolution from "@/components/revolution";
import Tokenomics from "@/components/tokenomics";
import Zero from "@/components/zero";
import Image from "next/image";
import Matters from "@/components/matters";
import FAQ from "@/components/FAQ";

export default function Home() {
  // Hide-on-click (resets on refresh)
  const [showLauncher, setShowLauncher] = useState(true);

  // // If you want it to stay hidden for the whole session, uncomment below:
  // useEffect(() => {
  //   const hidden = sessionStorage.getItem("launcherHidden") === "1";
  //   if (hidden) setShowLauncher(false);
  // }, []);

  // const handleClick = () => {
  //   sessionStorage.setItem("launcherHidden", "1");
  //   setShowLauncher(false);
  // };

  const handleClick = () => {
    setShowLauncher(false); // disappears until refresh
    console.log("Launch App clicked");
  };

  return (
    <div className="">
      <HomeHero />
      <Revolution />
      <Confidential />
      <Zero />
      <Built />
      <Tokenomics />
      <Matters />
      <FAQ />

      {showLauncher && (
        <button
          type="button"
          onClick={handleClick}
          className="
            flex flex-col items-center justify-center gap-3
            font-medium w-36 h-36 px-6 py-6 rounded-xl transition-opacity duration-200
            fixed bottom-6 right-6 z-50
            animate-colorCycle
            md:hidden
          "
        >
          <Image
            src="/images/arrow-up-right.svg"
            alt="Launch"
            width={44}
            height={28}
            className="object-contain icon"
          />
          <span className="text-sm font-medium">Launch App</span>
        </button>
      )}
    </div>
  );
}
