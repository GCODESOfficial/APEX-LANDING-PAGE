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

      {/* Launch App Button (Mobile Fixed) */}
<button
  className="
    flex flex-col items-center justify-center gap-3
    font-medium w-36 h-36 px-6 py-6 rounded-xl transition-all
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


    </div>
  );
}
