import { productsData } from "@/constant";
import Image from "next/image";
import arrowIcon from "@/public/assets/arrow.svg";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function AboutComponent() {
  return (
    <section
      className="w-screen relative flex-center h-screen z-20"
    >
      <div className="w-7/12 mx-auto relative">
        <div className="w-full mx-auto relative flex flex-col gap-20">
          <h2
            className="text-[4.8vw] text-center leading-[4.5vw] uppercase"
            id="heading"
          >
            Clean & glow around
          </h2>
          <table className="w-full table-auto " id="table">
            <tbody>
              {productsData &&
                productsData.map((product) => (
                  <tr key={product.id} className=" w-full relative flex">
                    <td className="w-1/12 py-8 flex justify-start relative border-t border-black/30">
                      <h4 className="text-sm font-bold">0{product.id}</h4>
                    </td>
                    <td className="w-3/12 py-8 relative border-t border-black/30">
                      <p className="text-[1.8vw] leading-[1.8vw] uppercase">
                        {product.name}
                      </p>
                    </td>
                    <td className="w-8/12 py-8 flex flex-col gap-1 justify-start border-t relative text-sm">
                      <p>{product.subText}</p>
                      <p>{product.desc}</p>
                      <Image
                        src={arrowIcon}
                        alt="arrow"
                        width={24}
                        height={24}
                        className="absolute right-0 top-[-1]"
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
