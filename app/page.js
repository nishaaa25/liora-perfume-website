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
  const scrollCooldown = 1000; // in ms

  useGSAP(() => {
    let timeoutId;

    // Initial animation for section1 on page load
    const tlInit = gsap.timeline({
      scrub: true,
      duration: 1,
    });
    tlInit
      .from("#section1 .cont .navbar", {
        y: -100,
        opacity: 0,
        ease: "back.out",
      })
      .from("#section1 .left-cont", { x: -400, opacity: 0, ease: "back.out" })
      .from("#section1 .main-text", {
        y: 100,
        scale: 0,
        opacity: 0,
        ease: "power1",
        duration: 0.5
      })
      .from(bottleRef.current, {
        scale: 0,
        opacity: 0,
        ease: "power1",
      })
      .from("#section1 .bottom-cont div", {
        y: 100,
        opacity: 0,
        ease: "back.out",
        stagger: 0.1,
      });

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

      tl.to(containerRef.current, {
        y: -nextSection * window.innerHeight,
        duration: 1,
        ease: "power2.inOut",
      });

      const bottleAnimation = [
        { rotate: 0, x: 0, y: 0, scale: 1, opacity: 1 },
        { rotate: 30, x: 400, y: 60, scale: 0.7, opacity: 0.5 },
        { rotate: 0, x: -170, y: 143, scale: 0.57, opacity: 1 },
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

      // Only trigger animations when entering the section
      if (nextSection === 0) {
        tl.from("#section1 .cont .navbar", {
          y: -100,
          opacity: 0,
          ease: "back.out",
        })
          .from("#section1 .left-cont", {
            x: -200,
            opacity: 0,
            ease: "back.out",
          })
          .from("#section1 .main-text", {
            y: 100,
            opacity: 0,
            ease: "back.out",
          })
          .from("#section1 .bottom-cont div", {
            y: 100,
            opacity: 0,
            ease: "back.out",
            stagger: 0.1,
          });
      }

      if (nextSection === 1) {
        tl.from("#section2 #heading", {
          y: 80,
          opacity: 0,
          duration: 0.6,
          ease: "back.out",
        }).from("#section2 #table tr", {
          y: 80,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out",
        });
      }

      if (nextSection === 2) {
        tl.from("#section3 .heading", {
          y: 80,
          opacity: 0,
          ease: "back.out",
          duration: 0.6,
        });
      }
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
        className="w-[100vw] h-[100vh] fixed top-0 flex-center z-10"
        ref={bottleRef}
      >
        <Image
          src={PinkBottle}
          alt="perfume-bottle"
          width={450}
          height={450}
          priority
        />
      </div>

      {/* Sections container */}
      <div ref={containerRef}>
        <div className="h-screen w-screen" id="section1">
          <HomeComponent />
        </div>
        <div className="h-screen w-screen" id="section2">
          <AboutComponent isActive={currentSection.current === 1} />
        </div>
        <div className="h-screen w-screen" id="section3">
          <ProductsComponent />
        </div>
      </div>
    </main>
  );
}
