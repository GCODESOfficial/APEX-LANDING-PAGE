"use client";

import Image from "next/image";

export default function Matters() {
  return (
    <section id="community" className="relative w-full bg-gradient-to-r from-[#6A00FF]/20 to-[#00E6C3]/20 text-white py-24 px-6 md:px-14 flex flex-col items-center overflow-hidden">
      {/* ===== Heading Section ===== */}
      <div className="text-center max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-semibold mb-2">
          Why It{" "}
          <span className="text-[#00E6C3]">
            Matters
          </span>
        </h2>
        <p className="text-[#999999] text-sm md:text-base mb-6">
          The Future Belongs to the Invisible
        </p>
        <p className="text-white text-sm md:text-base leading-relaxed">
          Every visible trade leaks information. Apex closes that leak and gives control back to the
          trader. Privacy is not just safety, it is power. In a world built on transparency, Apex
          gives you silent dominance.
        </p>
      </div>

      {/* ===== Center Logo ===== */}
      <div className="relative w-full flex justify-center mt-20 mb-[-36px] z-20">
        <Image
          src="/images/matters-logo.svg"
          alt="Apex Logo"
          width={140}
          height={140}
          className="object-contain w-[140px] h-auto"
        />
      </div>

      {/* ===== Purple Card Section ===== */}
      <div className="relative bg-[#6A00FF] rounded-2xl text-center max-w-6xl w-full px-6 md:px-14 py-20 pb-10 md:pb-20 z-10">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
          Predict Confidentially. Earn Efficiently.
          <br className="hidden md:block" />
          Dominate The Future.
        </h3>
        <p className="text-gray-200 text-sm md:text-base max-w-2xl mx-auto mb-8">
          Apex is not just another prediction market. It is a movement for privacy, fairness, and
          smarter liquidity. Join the traders and institutions who value true confidentiality.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-white text-black font-medium px-6 py-3 rounded-md hover:bg-gray-200 transition">
            Launch App
          </button>
          <button className="bg-black text-white font-medium px-6 py-3 rounded-md hover:bg-[#111] transition">
            Join Community
          </button>
        </div>
      </div>
    </section>
  );
}
