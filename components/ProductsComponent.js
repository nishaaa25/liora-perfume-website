import Image from "next/image";
import blueBottle from "@/public/assets/blue.png";
import purpleBottle from "@/public/assets/purple.png";
import yellowBottle from "@/public/assets/yelllow.png";
// import bBottle from "@/public/assets/blue.png";

export default function ProductsComponent() {
  return (
    <section className="w-screen relative flex-center h-screen z-20">
      <div className="w-[85vw] mx-auto relative">
        <h2 className="text-[4.8vw] text-center leading-[4.8vw] uppercase w-10/12 mx-auto mb-16">
          MEET THE WORLDS THINNEST FRAGRANCE BOTTLE
        </h2>
        <div className="w-full grid grid-cols-4 gap-14 relative ">
          <div className="w-full relative bg-[#fce9dc] h-[400px] rounded-t-full flex-center pt-20">
            <Image src={blueBottle} alt="blue" width={300} height={300} />
          </div>
          <div className="w-full relative bg-[#fce9dc] h-[400px] rounded-t-full flex-center pt-20">
           
          </div>
          <div className="w-full relative bg-[#fce9dc] h-[400px] rounded-t-full flex-center pt-20">
            <Image src={yellowBottle} alt="blue" width={300} height={300} />
          </div>
          <div className="w-full relative bg-[#fce9dc] h-[400px] rounded-t-full flex-center pt-20">
          <Image src={purpleBottle} alt="blue" width={300} height={300} />
          </div>
        </div>
      </div>
    </section>
  );
}
