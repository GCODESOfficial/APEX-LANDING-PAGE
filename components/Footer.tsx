"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#00E6C3] to-[#6A00FF] md:py-10 py-4 flex justify-center items-center md:px-24 px-4">
      <div className="w-full  bg-black rounded-xl flex flex-col md:flex-row justify-between items-center px-8 py-10">
        {/* ===== Left Section ===== */}
        <div className="flex flex-col items-center md:items-start gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/footer-logo.svg"
              alt="Apex Logo"
              width={32}
              height={32}
              className="object-contain w-36 h-auto"
            />
          </div>
          {/* Tagline */}
          <p className="text-[#999999] text-sm  mt-2 md:mt-0">
            Where Intelligence Becomes Liquidity.
          </p>
        </div>

        {/* ===== Right Section ===== */}
        <div className="flex flex-col md:items-end items-center gap-3 mt-6 md:mt-0">
          <p className="text-[#A1A1A1] text-sm">Official Social Links</p>
          <div className="flex gap-4">
          <a
  href="https://x.com/_ApexPL?t=PT8vUjbQNNaC2EEIr5P0Tg&s=09" // <-- replace with your actual Telegram link
  target="_blank"
  rel="noopener noreferrer"
>
            <Image
              src="/images/social-x.svg"
              alt="X (Twitter)"
              width={26}
              height={18}
              className="object-cover w-[34px] h-[24px] cursor-pointer hover:opacity-80 transition"
            />
            </a>
          <a
  href="https://t.me/OfficialApexPL" // <-- replace with your actual Telegram link
  target="_blank"
  rel="noopener noreferrer"
>
  <Image
    src="/images/social-telegram.svg"
    alt="Telegram"
    width={26}
    height={18}
    className="object-contain cursor-pointer hover:opacity-80 transition"
  />
</a>

            <Image
              src="/images/social-mail.svg"
              alt="Email"
              width={26}
              height={18}
              className="object-contain cursor-pointer hover:opacity-80 transition"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
