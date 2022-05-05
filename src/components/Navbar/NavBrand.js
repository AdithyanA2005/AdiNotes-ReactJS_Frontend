import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function NavBrand() {
  return (
    <>
      <NavLink to="/">
        <div className="flex transition-all duration-300 ease-linear ">
          <img src={logo} className="mr-1 h-6" alt="Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-green-500">
            AdiNotes
          </span>
        </div>
      </NavLink>
    </>
  );
}
