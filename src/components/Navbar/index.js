import { useEffect, useRef, useState } from "react";
import { ReactComponent as BurgerIcon } from "../../assets/burger.svg";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import NavBrand from "./NavBrand";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const navbarRef = useRef();
  const burgerRef = useRef();
  const navigation = [{ title: "Home", url: "/" }];

  useEffect(() => {
    const handleClick = (event) => {
      if (burgerRef.current.contains(event.target)) return setSidebarActive((prev) => !prev);
      return setSidebarActive(false);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <nav
        ref={navbarRef}
        className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800"
      >
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <NavBrand />

          <div className="flex md:order-2">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>
            <button
              ref={burgerRef}
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              {sidebarActive ? <CloseIcon /> : <BurgerIcon />}
            </button>
          </div>
          <div
            className={`${
              sidebarActive ? "" : "hidden"
            } justify-between items-center w-full md:flex md:w-auto md:order-1`}
          >
            <NavLinks links={navigation} />
          </div>
        </div>
      </nav>
    </>
  );
}
