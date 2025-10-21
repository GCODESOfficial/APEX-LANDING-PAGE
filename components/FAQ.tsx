"use client";

import { useState } from "react";
import Image from "next/image";

export default function FAQ() {
  const faqs = [
    {
      question: "How does Apex keep my trades private?",
      answer:
        "Every transaction on Apex is protected with Zero Knowledge Proofs. This means your position, amount, and identity stay hidden until the market closes. No one, not even the protocol, can see your moves.",
    },
    {
      question: "What makes Apex different from other prediction markets?",
      answer:
        "Apex combines privacy with efficiency. It hides your order flow using ZK-SNARKs and turns idle liquidity into yield through the Yield Vault Contract (YVC). So you trade privately and earn more at the same time.",
    },
    {
      question: "Can liquidity providers really earn double?",
      answer:
        "Yes. LPs earn fees from prediction markets and also generate DeFi returns from YVC. Your collateral is always at work, multiplying profit potential.",
    },
    {
      question: "How is front running or MEV stopped?",
      answer:
        "Apex eliminates public order flow. Since trades are sealed proofs, there’s nothing for bots or MEV attackers to target. It’s completely invisible until resolution.",
    },
    {
      question: "Is the platform audited and secure?",
      answer:
        "All contracts go through third party security audits and formal verification. The system is non custodial, so you stay in full control of your funds at every stage.",
    },
    {
      question: "What blockchains does Apex support?",
      answer:
        "Apex starts with EVM compatible networks and will expand to multi chain support soon. The same privacy layer will work seamlessly across all connected chains.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-black text-white py-24 px-4 md:px-26 flex flex-col md:flex-row justify-between gap-10 relative overflow-hidden">


<div className=" text-center md:hidden block">
          <p className="text-white text-2xl font-semibold">
            Frequently Asked <br /> <span className="text-[#00E6C3] text-2xl">Questions</span>
          </p>
          <p className="text-[#999999] text-lg">Learn more about Apex</p>
        </div>


      {/* ===== Left Section ===== */}
      <div className="flex flex-col w-full md:w-[45%]">
        <h2 className="text-5xl font-extrabold mb-8 hidden md:block">FAQ</h2>

        <div className="flex flex-col space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full">
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className={`w-full text-left px-5 py-4 rounded-md font-medium transition-all ${
                  activeIndex === index
                    ? "bg-[#6A00FF] text-white"
                    : "bg-[#1A1A1A] text-gray-400 hover:bg-[#222]"
                }`}
              >
                {faq.question}
              </button>

              {/* Mobile Answer Display */}
              <div className="md:hidden">
                {activeIndex === index && (
                  <div className="mt-6 px-5 flex flex-col items-center justify-center">
                    <Image
                      src="/images/quote-icon.svg"
                      alt="Quote Icon"
                      width={60}
                      height={60}
                      className="mb-10 select-none pointer-events-none"
                    />
                    <p className="text-[#CCFFFF] text-xl mb-10">
                      {faq.answer}
                    </p>
                    <hr className="border-[#242424]" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Right Section (Desktop) ===== */}
      <div className="w-full md:w-[45%] flex flex-col justify-center relative hidden md:block">
        <div className="absolute top-0 right-0 text-right">
          <p className="text-[#00E6C3] text-lg font-semibold">
            Frequently Asked Questions
          </p>
          <p className="text-[#999999] text-base">Learn more about Apex</p>
        </div>

        <div className="mt-16">
          <Image
            src="/images/quote-icon.svg"
            alt="Quote Icon"
            width={60}
            height={60}
            className="mb-10 select-none pointer-events-none"
          />
          <p className="text-white text-2xl mb-20">
            {activeIndex !== null && faqs[activeIndex].answer}
          </p>
          <hr className="border-[#242424]" />
        </div>
      </div>
    </section>
  );
}
