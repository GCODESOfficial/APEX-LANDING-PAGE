"use client";

import Image from "next/image";

export default function Revolution() {
  return (
    <section id="uniqueness" className="relative w-full bg-black/20 text-white md:py-20 py-8 px-4 md:px-28 flex flex-col items-center overflow-hidden ">

<h1 className="text-center px-8 md:hidden">Your bet size, your side, and your identity stay private until the market settles.</h1>

      {/* ====== Headings ====== */}
      <div className="md:flex justify-between w-full md:border-t-[0.4px] border-[#00E6C3]/30 md:pt-16 pt-20 mb-16">
        <h2 className="text-2xl md:text-4xl font-extrabold leading-snug text-white text-center md:text-left"
        style={{
            textShadow:
              "0 1px 1px #00E6C3, 0 2px 1px #00E6C3"
          }}
        >
          The Anti Front <br className="hidden md:block" />
          Running Revolution
        </h2>
        <p className="mt-3 text-[#00E6C3] text-lg md:text-2xl font-medium md:max-w-sm md:text-right text-center px-10 md:px-0">
          We merged privacy, speed, and yield into one protocol.
        </p>
      </div>

      {/* ====== Feature Grid ====== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:border-b-[0.4px] border-[#00E6C3]/30 pb-16">
        {/* ---- Private Layer ---- */}
        <div className="bg-[#0F0F0F] rounded-2xl p-8 py-5 relative overflow-hidden hover:border-[#27272A] transition-all">
          <div className="flex flex-col items-start space-y-6">
            <div className="w-full flex justify-center md:justify-start">
              <Image
                src="/images/private-layer.svg"
                alt="Private Layer"
                width={220}
                height={160}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="md:-mt-35">
              <h3 className="text-xl font-semibold mb-2">Private Layer</h3>
              <p className="text-[#999999] text-sm md:text-base leading-relaxed">
                All trades are sealed with Zero Knowledge Proofs. No one, not even the protocol,
                can see your position until the outcome is verified.
              </p>
            </div>
          </div>
        </div>

        {/* ---- Double Yield Liquidity ---- */}
        <div className="bg-[#0F0F0F] rounded-2xl p-10 px-0 relative overflow-hidden hover:border-[#27272A] transition-all">
          <div className="flex flex-col items-start space-y-6">
            <div className="w-full flex justify-center md:justify-start">
              <Image
                src="/images/double-yield.svg"
                alt="Double Yield Liquidity"
                width={260}
                height={160}
                className="object-contain w-full h-auto"
              />
            </div>
            <div className="px-8 mt-8 md:mt-0">
              <h3 className="text-xl font-semibold mb-2">Double Yield Liquidity</h3>
              <p className="text-[#999999] text-sm md:text-base leading-relaxed">
                Liquidity Providers earn twice. Their collateral secures trades and also earns
                DeFi yield through the Yield Vault Contract (YVC).
              </p>
            </div>
          </div>
        </div>

        {/* ---- AI Powered Oracle Network ---- */}
        <div className="md:col-span-2 bg-[#0F0F0F] rounded-2xl p-8 relative overflow-hidden hover:border-[#27272A] transition-all">

        <div className="flex justify-center md:hidden md:justify-end w-full md:w-auto ">
              <Image
                src="/images/world-map.svg"
                alt="AI Oracle Network"
                width={380}
                height={220}
                className="object-cover w-full h-full"
              />
            </div>
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 mt-8 md:mt-0">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">AI Powered Oracle Network</h3>
              <p className="text-[#999999] text-sm md:text-base leading-relaxed max-w-md">
                Data is confirmed through an oracle system enhanced with AI checks. This keeps
                results fast, fair, and trusted.
              </p>
            </div>
            <div className="md:flex hidden justify-center md:justify-end w-full md:w-auto px-20">
              <Image
                src="/images/world-map.svg"
                alt="AI Oracle Network"
                width={380}
                height={220}
                className="object-cover w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
