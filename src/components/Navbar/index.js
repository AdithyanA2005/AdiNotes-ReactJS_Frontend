import SidebarButton from "../Sidebar/SidebarButton";
import NavBrand from "./NavBrand";

import StartButton from "./StartButton";
import { useContext } from "react";
import SidebarContext from "../../context/Sidebar/SidebarContext";
import HamBurger from "./HamBurger";

export default function Navbar() {
  return (
    <>
      <nav className="z-40 h-16 fixed top-0 right-0 left-0 transition-all ease-in-out duration-300 shadow-sm">
        <div className="relative h-full w-full grid place-items-center border-b dark:border-slate-700 bg-white dark:bg-slate-900 ">
          <div className="container px-10 flex items-center justify-center md:justify-between">
            <HamBurger />
            <NavBrand />

            {/* [Get Started / New Note] btn on basis of auth */}
            <StartButton />
          </div>
        </div>
      </nav>
    </>
  );
}
