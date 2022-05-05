import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

export default function SidebarButton({ children, tooltip, isBurger, sidebarActive, ...props }) {
  return (
    <>
      <button
        {...props}
        className={`${
          isBurger
            ? "h-12 w-12 bg-green-500 text-white hover:rounded-lg rounded-[0.9rem]"
            : "h-12 dark:bg-slate-800 dark:text-green-500 dark:hover:bg-green-500 dark:hover:text-white text-green-500 bg-green-100 hover:bg-green-500 hover:text-white"
        } ${
          !isBurger &&
          (sidebarActive ? "rounded-r-3xl w-full pl-2" : "rounded-3xl w-12 hover:rounded-xl")
        } group relative transition-all duration-300 ease-in-out cursor-pointer flex justify-start items-center shadow-lg`}
      >
        {/* Icon */}
        <span className="h-12 w-12 p-3 absolute">{children}</span>

        {/* Tooltip */}
        {tooltip && !sidebarActive && (
          <span className="group-hover:scale-100 absolute w-auto p-2 m-2 min-w-max left-14 rounded-md text-white dark:bg-slate-700 bg-slate-500 text-xs font-bold transition-all duration-100 scale-0 origin-left">
            {tooltip} 💡
          </span>
        )}

        {/* Item Text When sidebar is active */}
        {sidebarActive && tooltip && (
          <Slide duration={400} direction="left">
            <Fade duration={1200}>
              <span className="h-12 ml-12 min-w-max dark:text-slate-200 text-green-500 dark:group-hover:text-white group-hover:text-white bg-inherit text-sm font-bold">
                {tooltip}
              </span>
            </Fade>
          </Slide>
        )}
      </button>
    </>
  );
}
