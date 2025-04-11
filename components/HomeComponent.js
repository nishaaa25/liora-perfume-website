import { useGSAP } from "@gsap/react";
import Navbar from "./Navbar";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeComponent() {
  const sectionRef = useRef(null);

  return (
    <section
      className="w-[90vw] mx-auto relative h-screen flex flex-col justify-between gap-12 pt-[20vh] pb-6 cont"
      ref={sectionRef}
    >
      <Navbar />
      <div className="left-cont">
        <p className="uppercase font-bold">New Fragnances</p>
        <p className="text-sm mb-4">Premium Smell, Roses</p>
        <div className="w-[80px] bg-black h-[2px] rounded-full opacity-70"></div>
      </div>
      <div className="flex-center relative main-text">
        <h1 className="text-[24vw] leading-[10vw] uppercase tracking-[1px] text-[#F0452A]">
          LIORAM
        </h1>
      </div>
      <div className="flex items-end justify-between w-full relative bottom-cont">
        <div className="w-3/12 text-sm leading-[16px] pr-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim enim ad minim enim ad minim
        </div>
        <div className="w-6/12 relative flex-center flex-col">
          <h3 className="mb-2 text-2xl">C 120</h3>
          <button className="bg-white py-2 w-[18vw] text-black font-bold text-sm cursor-pointer">
            BUY NOW
          </button>
        </div>
        <div className="w-3/12 relative flex justify-end items-end">
          <p className="text-xs font-semibold">PRODUCTS | COLLECTIONS</p>
        </div>
      </div>
    </section>
  );
}
