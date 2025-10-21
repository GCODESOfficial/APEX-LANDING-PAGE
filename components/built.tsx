"use client";

import Image from "next/image";

export default function Built() {
  return (
    <section id="technology" className="relative w-full bg-black text-white py-24 md:pb-60 px-4 md:px-14 flex flex-col items-center overflow-hidden">
      {/* --- Glow Underneath (behind everything) --- */}
      <Image
        src="/images/built-glow.svg"
        alt="Bottom Glow"
        width={1400}
        height={600}
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-auto z-0 opacity-90 pointer-events-none select-none hidden md:block"
      />

      {/* ===== Heading ===== */}
      <div className="text-center mb-14 relative z-10">
        <h2 className="text-3xl md:text-5xl font-semibold text-white">
          Built for{" "}
          <span className="text-[#00E6C3]">Traders</span>, LPs, <br /> and{" "}
          <span className="text-[#00E6C3]">Institutions</span>.
        </h2>
      </div>

      {/* ===== Unified Container ===== */}
      <div className="relative z-10 w-full max-w-6xl bg-[#0D0D0D] rounded-2xl border border-[#18181B] bg-black grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {/* === Row 1 === */}
        <div className="flex flex-col justify-center items-center p-10">
          <h3 className="md:text-lg text-xl font-semibold text-[#CCFFFF] mb-2">
            For Traders
          </h3>
          <p className="text-[#999999] md:text-base text-lg md:max-w-48">
            Take positions quietly. No bots, no watchers, no copy traders.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="/images/icon-institution.svg"
            alt="Institution Icon"
            width={130}
            height={130}
            className="object-contain md:w-auto w-full h-auto"
          />
        </div>

        <div className="flex flex-col justify-center items-center md:p-0 p-10">
          <h3 className="md:text-lg text-xl font-semibold text-[#CCFFFF] mb-2">
            For Institutions and Builders
          </h3>
          <p className="text-[#999999] md:text-base text-lg md:max-w-48">
            Create private markets with predictable depth and fast resolution.
          </p>
        </div>

        {/* === Row 2 === */}
        <div className="flex justify-center items-center">
          <Image
            src="/images/icon-trader.svg"
            alt="Trader Icon"
            width={130}
            height={130}
            className="object-contain md:rounded-bl-2xl md:w-auto w-full h-auto"
          />
        </div>

        <div className="flex flex-col justify-center items-center md:p-0 p-10">
          <h3 className="md:text-lg text-xl font-semibold text-[#CCFFFF] mb-2">
            For Liquidity Providers
          </h3>
          <p className="text-[#999999] md:text-base text-lg md:max-w-48">
            Earn from both market fees and DeFi yield. Your capital never sits
            idle.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="/images/icon-liquidity.svg"
            alt="Liquidity Icon"
            width={130}
            height={130}
            className="object-contain md:rounded-br-2xl rounded-b-2xl md:rounded-bl-none md:w-auto w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
