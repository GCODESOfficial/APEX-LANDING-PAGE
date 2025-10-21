"use client";

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="relative w-full bg-black text-white py-24 px-4 md:px-40 overflow-hidden">
      {/* ===== Top Text Section ===== */}
      <div className="mx-auto flex flex-col md:flex-row justify-between items-center md:items-center mb-24">
        {/* Left Heading */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight hidden md:block">
            Token
            <br />
            Economics
          </h2>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight md:hidden block text-center">
            Token
            Economics
          </h2>
        </div>

        {/* Right Description */}
        <div className="md:text-right text-center mt-8 md:mt-0 max-w-lg">
          <h3 className="text-[#00E6C3] font-semibold text-xl mb-2">
            The Power Behind Privacy And Profit
          </h3>
          <p className="text-[#999999] md:text-lg md:leading-relaxed">
            APX is the core utility token of Apex. It drives fees, rewards,
            governance, and incentives across the ecosystem.
          </p>
        </div>
      </div>

      {/* ===== Cards Section ===== */}
      <div className=" mx-auto flex justify-between items-end gap-4 md:gap-16">

        

        
        {/* === Card 1: Uses === */}
        <div className="flex flex-col items-center w-3/5">
          <p className="text-[#999999] md:text-base text-xs text-center mb-5">
            Fee discounts, LP yield boosts, oracle rewards
          </p>
          <div className="w-full bg-gradient-to-b from-[#151515] to-[#0B0B0B] rounded-md ">
            <div className="h-[10px] bg-[#2E2E2E] " />
            <div className="text-center pb-14 pt-6 text-base font-medium text-[#CCFFFF] ">Uses</div>
          </div>
        </div>

        {/* === Card 2: Staking === */}
        <div className="flex flex-col items-center w-4/5 ">
          <p className="text-[#999999] md:text-base text-xs text-center mb-5">
            Supports governance and liquidity
          </p>
          <div className="w-full bg-gradient-to-b from-[#151515] to-[#0B0B0B] rounded-md ">
            <div className="h-[10px] bg-[#2E2E2E] " />
            <div className="text-center pb-24 pt-6 text-base font-medium text-[#CCFFFF]">
              Staking
            </div>
          </div>
        </div>

        {/* === Card 3: Allocation === */}
        <div className="flex flex-col items-center w-4/5">
          <p className="text-[#999999] md:text-base text-xs text-center mb-5">
            LP rewards, oracle incentives, treasury, team
          </p>
          <div className="w-full bg-gradient-to-b from-[#151515] to-[#0B0B0B] rounded-md ">
            <div className="h-[10px] bg-[#2E2E2E] " />
            <div className="text-center pb-34 pt-6 text-base font-medium text-[#CCFFFF]">
              Allocation
            </div>
          </div>
        </div>

        {/* === Card 4: Total Supply === */}
        <div className="md:flex flex-col items-center w-full hidden">
          <h3 className="text-2xl md:text-5xl font-semibold text-center text-[#CCFFFF] mb-3">
            100,000,000&nbsp;APX
          </h3>
          <div className="w-10/12 bg-gradient-to-b from-[#241C3A] to-[#0C0C0C] rounded-md pb-6 flex flex-col items-center">
            <div className="h-[10px] bg-[#6A00FF] w-full" />
            <div className="text-center pb-48 pt-6 text-base font-medium text-[#CCFFFF]">
              Total Supply
            </div>
            <button className="bg-[#6A00FF] text-white text-base font-medium px-6 py-3 rounded-md">
              View Tokenomics
            </button>
          </div>
        </div>
      </div>

      {/* === Card 4: Total Supply === */}
      <div className="flex flex-col items-center w-full md:hidden mt-10">
          <h3 className="text-4xl md:text-5xl font-semibold text-center text-[#CCFFFF] mb-3">
            100,000,000&nbsp;APX
          </h3>
          <div className="w-full bg-gradient-to-b from-[#241C3A] to-[#0C0C0C] rounded-md pb-6 flex flex-col items-center">
            <div className="h-[10px] bg-[#6A00FF] w-full" />
            <div className="text-center pb-28 pt-6 text-base font-medium text-[#CCFFFF]">
              Total Supply
            </div>
            <button className="bg-[#6A00FF] text-white text-base font-medium px-6 py-3 rounded-md">
              View Tokenomics
            </button>
          </div>
        </div>
    </section>
  );
}
