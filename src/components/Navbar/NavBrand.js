import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function NavBrand() {
  return (
    <>
      <NavLink to="/" className="flex items-center">
        <img src={logo} className="mr-2 h-6 sm:h-8" alt="Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          AdiNotes
        </span>
      </NavLink>
    </>
  );
}
