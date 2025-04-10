import Image from "next/image";
import menuIcon from "@/public/assets/menu.png";

export default function Navbar() {
  return (
    <div className="w-full absolute top-0">
      <nav className="flex-center gap-32 w-full mx-auto relative py-8 ">
        <h1 className="logo text-[2vw] leading-[2vw] tracking-[1px] font-[800] ">
          LIORA
        </h1>
        <ul className="nav-links uppercase text-sm flex-between w-full font-bold">
          <li className="link">Fragrances</li>
          <li className="link">Contact</li>
          <li className="link">About</li>
          <li className="link">Collections</li>
        </ul>
        <div className="menu-bar flex-center">
          <Image src={menuIcon} alt="img" width={30} height={30} />
        </div>
      </nav>
    </div>
  );
}
