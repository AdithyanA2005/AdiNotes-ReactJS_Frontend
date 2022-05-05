import React from "react";
import { NavLink } from "react-router-dom";

export default function StartButton() {
  return (
    <>
      {/* TODO: Set this according to user | authenticated ? "create new Note" : "get started"  */}
      <NavLink
        to=""
        className="hidden md:flex text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-[0.6rem] text-center mr-3 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
      >
        Get started
      </NavLink>
    </>
  );
}
