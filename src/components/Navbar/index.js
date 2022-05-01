import { useEffect, useRef, useState } from "react";
import NavBrand from "./NavBrand";

export default function Navbar() {
  const navbarRef = useRef();

  return (
    <>
      <nav
        ref={navbarRef}
        className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800"
      >
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <NavBrand />
        </div>
      </nav>
    </>
  );
}
