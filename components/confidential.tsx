"use client";

import Image from "next/image";

export default function Confidential() {
  return (
    <section id="how" className="relative w-full bg-black text-white py-10 px-4 md:px-14 overflow-hidden  flex flex-col items-center">
      {/* ====== Background Glow ====== */}
      <Image
        src="/images/confidential-glow.svg"
        alt="background glow"
        width={1800}
        height={1000}
        priority
        className="absolute -top-44 left-1/2 -translate-x-1/2 w-[1100px] h-auto pointer-events-none select-none md:block hidden"
      />

      {/* ====== Headings ====== */}
      <div className="relative text-center mb-14 z-10">
        <h2 className="text-3xl md:text-5xl font-semibold leading-snug">
          Confidential By Design.
          <br className="hidden md:block" />
          <span className="text-[#00E6C3]">
            {" "}Clear By Result.
          </span>
        </h2>
      </div>

      {/* ====== Cards ====== */}
      <div className="relative flex md:grid md:grid-cols-3 md:gap-6 gap-2 w-full  md:max-w-7xl overflow-x-auto md:overflow-visible scrollbar-hide pb-6">
         {/* ---- Step 01 ---- */}
        <div className="bg-[#141414] rounded-2xl border border-[#18181B] w-60 md:w-auto snap-center flex-shrink-0 p-0 md:py-5 py-3 overflow-hidden transition-all hover:border-[#27272A]">
          <div className="relative w-full md:h-[260px] h-[180px] bg-black flex justify-center items-center md:px-16 px-6">
            <Image
              src="/images/step1.svg"
              alt="Create or Join a Market"
              width={400}
              height={240}
              className="object-contain w-full md:w-[400px]"
            />
          </div>
          <div className="p-6">
            <div className="border border-[#262626]/60 rounded-full px-3 py-1 text-center w-20 mb-3">
            <p className="text-gray-400 text-sm">Step 01</p>
            </div>
            <h3 className="md:text-xl text-base font-semibold text-[#CCFFFF] mb-1">
              Create Or Join A Market
            </h3>
            <p className="text-[#999999] md:text-lg text-sm">
              Pick an event or choose from verified feeds.
            </p>
          </div>
        </div>

        {/* ---- Step 02 ---- */}
        <div className="bg-[#141414] rounded-2xl border border-[#18181B] w-60 md:w-auto snap-center flex-shrink-0 p-0 md:py-5 py-3 overflow-hidden transition-all hover:border-[#27272A]">
          <div className="relative w-full md:h-[260px] h-[180px] bg-black flex justify-center items-center md:px-16 px-6">
            <Image
              src="/images/step2.svg"
              alt="Prove Without Showing"
              width={400}
              height={240}
              className="object-contain w-full md:w-[400px]"
            />
          </div>
          <div className="p-6">
            <div className="border border-[#262626]/60 rounded-full px-3 py-1 text-center w-20 mb-3">
            <p className="text-gray-400 text-sm">Step 02</p>
            </div>
            <h3 className="md:text-xl text-base font-semibold text-[#CCFFFF] mb-1">
              Prove Without Showing
            </h3>
            <p className="text-[#999999] md:text-lg text-sm">
              Submit a Zero Knowledge Proof of your position.
            </p>
          </div>
        </div>

        {/* ---- Step 03 ---- */}
        <div className="bg-[#141414] rounded-2xl border border-[#18181B] min-w-[200px] w-60 md:w-auto flex-shrink-0 p-0 md:py-5 py-3 overflow-hidden transition-all hover:border-[#27272A]">
          <div className="relative w-full md:h-[260px] h-[180px] bg-black flex justify-center items-center md:px-16 px-6">
            <Image
              src="/images/step3.svg"
              alt="Earn and Settle"
              width={400}
              height={240}
              className="object-contain w-9/12 md:w-[400px]"
            />
          </div>
          <div className="p-6">
            <div className="border border-[#262626]/60 rounded-full px-3 py-1 text-center w-20 mb-3">
            <p className="text-gray-400 text-sm">Step 03</p>
            </div>
            <h3 className="md:text-xl text-base font-semibold text-[#CCFFFF] mb-1">
              Earn & Settle
            </h3>
            <p className="text-[#999999] md:text-lg text-sm">
              Earn double in YVC while AI Oracles confirm results.
            </p>
          </div>
        </div>
      </div>

      {/* ====== Footer Text ====== */}
      <p className="mt-10  ml-auto md:pr-22 pr-0 text-[#999999] text-base md:text-xl font-semibold text-right md:w-sm w-60 z-10">
        Your trade is invisible until the truth is proven.
      </p>
    </section>
  );
}
