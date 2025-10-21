"use client";

import Image from "next/image";

export default function Zero() {
  return (
    <section className="relative w-full bg-black text-white py-24 px-4 md:px-24 overflow-hidden flex flex-col items-center">
      {/* ===== Background + Apex Logo Image ===== */}
      <div className="relative flex justify-center items-center w-full mb-12">
        <Image
          src="/images/zero-bg.svg"
          alt="Zero Knowledge Logo Background"
          width={900}
          height={600}
          priority
          className=" w-full hidden lg:block pointer-events-none select-none"
        />

<Image
          src="/images/zero-bg-mob.svg"
          alt="Zero Knowledge Logo Background"
          width={900}
          height={600}
          priority
          className="block lg:hidden w-full  pointer-events-none select-none"
        />

      </div>

      <div className="relative z-10 md:-mt-[40rem] -mt-40" >

{/* ===== Section Label ===== */}
<div className="relative z-10 bg-[#121212] text-gray-400 text-xs font-medium px-4 py-2 w-32 text-center mx-auto rounded-full mb-4 border border-[#1E1E1E] ">
        The Technology
      </div>

      {/* ===== Heading ===== */}
      <h2 className="text-center text-3xl md:text-5xl font-semibold leading-snug mb-14 z-10 drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">
        Zero Knowledge.{" "} <br className="md:hidden" />
        <span className="text-[#00E6C3]">
          Real Power.
        </span>
      </h2>

      {/* ===== Technology Grid ===== */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center w-full z-10">
        {/* ZK Engine */}
        <div className="flex flex-col text-left text-gray-300 pl-6 md:pl-0">
          <Image
            src="/images/icon-zk.svg"
            alt="ZK Engine"
            width={28}
            height={28}
            className="mb-3"
          />
          <h3 className="text-[#CCFFFF] text-lg font-semibold mb-1">ZK Engine</h3>
          <p className="text-[#999999] text-base">
            Built with ZK tech that proves accuracy without showing trade data.
          </p>
        </div>

        {/* MEV Protection */}
        <div className="flex flex-col text-left text-gray-300 md:border-l border-t md:border-t-0 md:border-[#262626]/60 md:pl-6 ml-6 mr-6 md:mr-0 pt-6 md:pt-0">
          <Image
            src="/images/icon-mev.svg"
            alt="MEV Protection"
            width={28}
            height={28}
            className="mb-3"
          />
          <h3 className="text-[#CCFFFF] text-lg font-semibold mb-1">MEV Protection</h3>
          <p className="text-[#999999] text-base">
            No one can front-run what they can’t see. Apex blocks all MEV attacks.
          </p>
        </div>

        {/* Yield Vault Contract */}
        <div className="flex flex-col text-left text-gray-300 md:border-l border-t md:border-t-0 md:border-[#262626]/60 md:pl-6 ml-6 mr-6 md:mr-0 pt-6 md:pt-0">
          <Image
            src="/images/icon-vault.svg"
            alt="Yield Vault Contract"
            width={28}
            height={28}
            className="mb-3"
          />
          <h3 className="text-[#CCFFFF] text-lg font-semibold mb-1">Yield Vault Contract</h3>
          <p className="text-[#999999] text-base">
            Your funds earn while securing markets, using trusted DeFi strategies.
          </p>
        </div>

        {/* AI Oracles */}
        <div className="flex flex-col text-left text-gray-300 md:border-l border-t md:border-t-0 md:border-[#262626]/60 md:pl-6 ml-6 mr-6 md:mr-0 pt-6 md:pt-0">
          <Image
            src="/images/icon-oracle.svg"
            alt="AI Oracles"
            width={28}
            height={28}
            className="mb-3"
          />
          <h3 className="text-[#CCFFFF] text-lg font-semibold mb-1">AI Oracles</h3>
          <p className="text-[#999999] text-base">
            AI filters verify data to keep every market fair and accurate.
          </p>
        </div>

        {/* Highlight Quote */}
        <div className="flex flex-col text-left text-gray-300 md:border-l border-t md:border-t-0 md:border-[#262626]/60 md:pl-6 ml-6 mr-6 md:mr-0 pt-6 md:pt-0">
          <Image
            src="/images/icon-quote.svg"
            alt="Highlight Quote"
            width={28}
            height={28}
            className="mb-3"
          />
          <h3 className="text-[#CCFFFF] text-lg font-semibold mb-1">Highlight Quote</h3>
          <p className="text-[#999999] text-base">
            Markets stay private until math reveals the truth.
          </p>
        </div>
      </div>




      </div>

          </section>
  );
}
