"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

import HomeComponent from "@/components/HomeComponent";
import AboutComponent from "@/components/AboutComponent";
import ProductsComponent from "@/components/ProductsComponent";
import PinkBottle from "@/public/assets/pink-main.png";

export default function Home() {
  const containerRef = useRef(null);
  const bottleRef = useRef(null);
  const currentSection = useRef(0);
  const isAnimating = useRef(false);
  const totalSections = 3;
  const scrollCooldown = 600; // in ms

  useGSAP(() => {
    let timeoutId;

    const handleWheel = (e) => {
      if (isAnimating.current) {
        e.preventDefault();
        return;
      }

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = currentSection.current + direction;

      if (nextSection < 0 || nextSection >= totalSections) return;

      e.preventDefault();
      isAnimating.current = true;

      const tl = gsap.timeline({
        onComplete: () => {
          currentSection.current = nextSection;
          timeoutId = setTimeout(() => {
            isAnimating.current = false;
          }, scrollCooldown);
        },
      });

      // Animate scroll container
      tl.to(containerRef.current, {
        y: -nextSection * window.innerHeight,
        duration: 1,
        ease: "power2.inOut",
      });

      // Animate perfume bottle
      const bottleAnimation = [
        { rotate: 0, x: 0, y: 0, scale: 1, opacity: 1 },
        { rotate: 30, x: 500, y: 140, scale: 0.7, opacity: 0.5 },
        { rotate: 0, x: -210, y: 240, scale: 0.56, opacity: 1 },
      ];

      tl.to(
        bottleRef.current,
        {
          ...bottleAnimation[nextSection],
          duration: 1,
          ease: "back.out",
        },
        "<"
      );
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <main className="w-screen h-screen overflow-hidden relative">
      {/* Perfume Bottle */}
      <div
        className="w-[29vw] h-[29vh] absolute z-10 left-[35.5vw] top-[18vh]"
        ref={bottleRef}
      >
        <Image
          src={PinkBottle}
          alt="perfume-bottle"
          width={1200}
          height={1200}
          priority
        />
      </div>

      {/* Sections container */}
      <div ref={containerRef}>
        <div className="h-screen w-screen" id="section1">
          <HomeComponent />
        </div>
        <div className="h-screen w-screen" id="section2">
          <AboutComponent />
        </div>
        <div className="h-screen w-screen" id="section3">
          <ProductsComponent />
        </div>
      </div>
    </main>
  );
}
