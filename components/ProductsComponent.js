import Image from "next/image";
import blueBottle from "@/public/assets/blue.png";
import purpleBottle from "@/public/assets/purple.png";
import yellowBottle from "@/public/assets/yelllow.png";
// import bBottle from "@/public/assets/blue.png";

export default function ProductsComponent() {
  return (
    <section className="w-screen relative flex-center h-screen z-20">
      <div className="w-[85vw] mx-auto relative">
        <h2 className="text-[4.8vw] text-center leading-[4.8vw] uppercase w-10/12 mx-auto mb-16 heading">
          MEET THE WORLDS THINNEST FRAGRANCE BOTTLE
        </h2>
        <div className="w-full grid grid-cols-4 gap-14 relative ">
          <div className="w-full relative bg-[#fce9dc] h-[50vh] rounded-t-full flex-center pt-20 box">
            <div className="w-[35vw] h-[35vh] relative">
              <Image
                src={blueBottle}
                alt="blue"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="w-full relative bg-[#fce9dc] h-[50vh] rounded-t-full pt-20 box flex justify-center items-end pb-2">
            <div className="h-[40px] bg-[#fca89a] text-sm w-full flex-between px-5 font-bold">
                <h4 >Liora Roses</h4>
                <p>$924.0</p>
            </div>
          </div>
          <div className="w-full relative bg-[#fce9dc] h-[50vh] rounded-t-full flex-center pt-20 box">
            <div className="w-[35vw] h-[35vh] relative">
              <Image
                src={yellowBottle}
                alt="blue"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="w-full relative bg-[#fce9dc] h-[50vh] rounded-t-full flex-center pt-20 box">
            <div className="w-[35vw] h-[35vh] relative">
              <Image
                src={purpleBottle}
                alt="blue"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
