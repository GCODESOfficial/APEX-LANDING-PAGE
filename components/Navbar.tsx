"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // Handle scroll and close
  const handleScroll = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="w-full fixed top-0 z-50 bg-black">
      {/* Desktop */}
      <div className="hidden relative md:flex items-center justify-between px-26 py-8 bg-[#080808]">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/apex-logo.svg"
            alt="Apex"
            width={38}
            height={38}
            className="w-32 h-auto object-contain"
          />
        </div>

       {/* Launch App Button */}
<Link
  href="https://app.apexpl.xyz"
  target="_blank"
  rel="noopener noreferrer"
  className="
    flex flex-col absolute right-26 top-10 items-center justify-center gap-3
    font-medium w-36 h-36 px-6 py-6 rounded-xl transition-all
    animate-colorCycle
  "
>
  <Image
    src="/images/arrow-up-right.svg"
    alt="Launch"
    width={44}
    height={28}
    className="object-contain icon"
  />
  <span className="text-sm">Launch App</span>
</Link>
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <Image
            src="/images/apex-logo.svg"
            alt="Apex"
            width={34}
            height={34}
            className="w-26 h-auto"
          />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-white p-2 focus:outline-none"
        >
          <Image
            src={open ? "/images/close-icon.svg" : "/images/menu-icon.svg"}
            alt="Menu"
            width={28}
            height={28}
            className="object-contain"
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-black z-40 flex flex-col px-8 pt-28 py-10 justify-between space-y-8"
          >
            {/* Logo */}
            <div className="absolute top-5 left-4 flex items-center space-x-2">
              <Image
                src="/images/apex-logo.svg"
                alt="Apex"
                width={24}
                height={24}
                className="w-26 h-auto"
              />
            </div>

            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-4 text-white"
            >
              <Image
                src="/images/close-icon.svg"
                alt="Close"
                width={36}
                height={36}
                className="object-contain"
              />
            </button>

            {/* Menu links */}
<ul className="flex flex-col text-[#999999] text-xl space-y-10 font-medium">
  <li>
    <button
      onClick={() => handleScroll("#uniqueness")}
      className="hover:text-white transition-colors"
    >
      Our Uniqueness
    </button>
  </li>
  <li>
    <button
      onClick={() => handleScroll("#how")}
      className="hover:text-white transition-colors"
    >
      How it works
    </button>
  </li>
  <li>
    <button
      onClick={() => handleScroll("#technology")}
      className="hover:text-white transition-colors"
    >
      Our Technology
    </button>
  </li>
  <li>
    <button
      onClick={() => handleScroll("#tokenomics")}
      className="hover:text-white transition-colors"
    >
      Tokenomics
    </button>
  </li>
  <li>
    <button
      onClick={() => handleScroll("#community")}
      className="hover:text-white transition-colors"
    >
      Join Community
    </button>
  </li>

  {/* Whitepaper Link */}
  <li>
    <Link
      href="https://apexpl.xyz/whitepaper.pdf" // <-- replace with your actual whitepaper URL or path
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition-colors"
    >
      Whitepaper
    </Link>
  </li>
</ul>

           {/* Launch App Button */}
<Link
  href="https://app.apexpl.xyz"
  target="_blank"
  rel="noopener noreferrer"
  className="flex flex-col items-center justify-center gap-3 bg-[#6A00FF] hover:bg-[#7d4fff] text-white font-medium w-full h-24 px-6 py-6 rounded-md mt-10 transition-all"
>
  <Image
    src="/images/arrow-up-right.svg"
    alt="Launch"
    width={36}
    height={28}
    className="object-contain"
  />
  <span className="text-sm font-medium">Launch App</span>
</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
