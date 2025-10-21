"use client";

import Image from "next/image";

export default function HomeHero() {
  // Smooth scroll to section
  const handleScroll = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[55rem] overflow-hidden bg-black flex flex-col items-center md:pt-60 pt-36">
      {/* ===== Background Glows (CSS-based) ===== */}
      <div className="absolute inset-0">
        {/* Left purple/blue glow */}
        <div className="absolute tmd:top-60 top-80 left-1/3 -translate-x-1/3 md:w-[600px] w-[300px] md:h-[600px] h-[400px] rounded-full blur-[120px] bg-gradient-to-br from-[#6A00FF]/60 via-[#6A00FF]/80 to-[#00E6C3]"></div>
        {/* Right teal/green glow */}
        <div className="absolute -md:-bottom-80 bottom-10 md:right-0 right-[-50%] md:w-[700px] w-[400px] md:h-[700px] h-[400px] rounded-full blur-[140px] bg-[#00E6C3]"></div>
      </div>

      {/* ===== Left Vertical Menu (Desktop Only) ===== */}
      <div className="hidden lg:flex flex-col space-y-3 absolute top-32 left-20 text-gray-300/90 text-sm bg-[#0AA38C]/20 px-6 py-4 rounded-xl">
        <span
          onClick={() => handleScroll("#uniqueness")}
          className="hover:text-white transition-colors cursor-pointer"
        >
          Our Uniqueness
        </span>
        <span
          onClick={() => handleScroll("#how")}
          className="hover:text-white transition-colors cursor-pointer"
        >
          How it works
        </span>
        <span
          onClick={() => handleScroll("#technology")}
          className="hover:text-white transition-colors cursor-pointer"
        >
          Our Technology
        </span>
        <span
          onClick={() => handleScroll("#tokenomics")}
          className="hover:text-white transition-colors cursor-pointer"
        >
          Tokenomics
        </span>
        <span
          onClick={() => handleScroll("#community")}
          className="hover:text-white transition-colors cursor-pointer"
        >
          Join Community
        </span>
      </div>

      {/* ===== Floating Pins ===== */}
      <Image
        src="/images/pin-1.svg"
        alt="floating pin"
        width={84}
        height={84}
        className="hidden lg:block absolute top-[22%] right-[38%]"
      />
      <Image
        src="/images/pin-2.svg"
        alt="floating pin"
        width={50}
        height={50}
        className="hidden lg:block absolute bottom-[22%] right-[12%]"
      />
      <Image
        src="/images/pin-1.svg"
        alt="floating pin"
        width={50}
        height={50}
        className="block lg:hidden absolute top-[56%] right-[34%]"
      />

      {/* ====== Floating Arrow (Both Views) ====== */}
      <Image
        src="/images/arrow-glow.svg"
        alt="arrow glow"
        width={80}
        height={80}
        className="absolute md:bottom-[8%] bottom-[34%] md:left-[22%] left-[12%] animate-pulse"
      />

      {/* ===== Hero Text ===== */}
      <div className="relative text-center px-6 z-40 max-w-4xl">
        <h1
          className="text-[38px] md:text-6xl font-extrabold leading-tight text-[#CCFFFF]"
          style={{
            textShadow:
              "0 1px 2px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)",
          }}
        >
          The Pinnacle of Privacy{" "}
          <span className="text-[#00E6C3]">Prediction</span> Markets
        </h1>

        <p className="mt-5 text-base md:text-lg text-white max-w-lg mx-auto">
          Apex is built for the next era of decentralized forecasting using Zero Knowledge Proofs.
        </p>
      </div>

      {/* ===== Coins ===== */}
      <Image
        src="/images/coin-desktop.svg"
        alt="Apex coin"
        width={900}
        height={900}
        className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-0 w-[700px] h-auto"
      />

      <Image
        src="/images/coin-mobile.svg"
        alt="Apex coin mobile"
        width={420}
        height={420}
        className="block lg:hidden mt-auto w-full z-20 h-auto"
      />

      <h1 className="text-right text-lg max-w-60 md:block hidden absolute bottom-[10%] right-[7%]">
        Your bet size, your side, and your identity stay private until the market settles.
      </h1>
    </section>
  );
}
