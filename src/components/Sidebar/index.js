import React, { useEffect, useState } from "react";
import { ReactComponent as AngleUpIcon } from "../../assets/sortup.svg";
import { ReactComponent as BurgerIcon } from "../../assets/burger.svg";
import { ReactComponent as MoonIcon } from "../../assets/moon.svg";
import { ReactComponent as NoteIcon } from "../../assets/note.svg";
import { ReactComponent as PlusIcon } from "../../assets/plus.svg";
import { ReactComponent as SignOutIcon } from "../../assets/signout.svg";
import { ReactComponent as SunIcon } from "../../assets/sun.svg";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import SidebarButton from "./SidebarButton";
import SidebarSeperator from "./SidebarSeperator";

export default function Sidebar() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  const toggleSidebar = () => setSidebarActive((prev) => !prev);
  const backToTop = () => window.scroll(0, 0);

  useEffect(() => {
    localStorage.theme === "light" && setTheme("light");
  }, []);

  useEffect(() => {
    localStorage.theme = theme;
    if (theme === "dark") return document.documentElement.classList.add("dark");
    return document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <>
      {/* HamBurger */}
      <div className="z-[100] fixed top-0 left-0 p-2 flex justify-center items-center bg-white dark:bg-slate-900 dark:border-slate-700 transition-all ease-in-out duration-300 border-b">
        <SidebarButton onClick={toggleSidebar} sidebarActive={sidebarActive} isBurger>
          {sidebarActive ? <CloseIcon /> : <BurgerIcon />}
        </SidebarButton>
      </div>

      <div
        className={`${
          sidebarActive ? "w-60" : "w-16"
        } z-40 fixed transition-all ease-in-out duration-300 h-screen p-2.5 max-h-screen pt-5 top-0 left-0 mt-16 flex flex-col gap-4 shadow-lg bg-white dark:text-white dark:bg-slate-900`}
        onMouseLeave={() => setSidebarActive(false)}
      >
        {/* Create New Note */}
        <SidebarButton sidebarActive={sidebarActive} tooltip="New Note">
          <PlusIcon />
        </SidebarButton>

        {/* Fetch All Notes */}
        <SidebarButton sidebarActive={sidebarActive} tooltip="All Notes">
          <NoteIcon />
        </SidebarButton>

        {/* Add Hr */}
        <SidebarSeperator />

        {/* Toggle App Theme */}
        <SidebarButton sidebarActive={sidebarActive} onClick={toggleTheme} tooltip="Toggle Theme">
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </SidebarButton>

        {/* Go to top of page */}
        <SidebarButton sidebarActive={sidebarActive} onClick={backToTop} tooltip="Back To Top">
          <AngleUpIcon />
        </SidebarButton>

        {/* Add Hr */}
        <SidebarSeperator />

        {/* Sign out */}
        <SidebarButton sidebarActive={sidebarActive} tooltip="Sign Out">
          <SignOutIcon />
        </SidebarButton>
      </div>
    </>
  );
}
