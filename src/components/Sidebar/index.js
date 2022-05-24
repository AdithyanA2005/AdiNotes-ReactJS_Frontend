import { useContext, useState } from "react";
import { ReactComponent as BurgerIcon } from "../../assets/burger.svg";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import { ReactComponent as MoonIcon } from "../../assets/moon.svg";
import { ReactComponent as NoteIcon } from "../../assets/note.svg";
import { ReactComponent as PlusIcon } from "../../assets/plus.svg";
import { ReactComponent as SignInIcon } from "../../assets/signin.svg";
import { ReactComponent as SignOutIcon } from "../../assets/signout.svg";
import { ReactComponent as AngleUpIcon } from "../../assets/sortup.svg";
import { ReactComponent as SunIcon } from "../../assets/sun.svg";
import AuthContext from "../../context/Auth/AuthContext";
import NoteContext from "../../context/Note/NoteContext";
import NoteFormContext from "../../context/NoteForm/NoteFormContext";
import SidebarContext from "../../context/Sidebar/SidebarContext";
import ThemeContext from "../../context/Theme/ThemeContext";
import SidebarButton from "./SidebarButton";
import SidebarSeperator from "./SidebarSeperator";

export default function Sidebar() {
  // Scroll Back to Top Of The Page
  const backToTop = () => window.scroll(0, 0);
  const { sidebarActive, setSidebarActive, toggleSidebar } = useContext(SidebarContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { auth, setLogoutModalActive } = useContext(AuthContext);
  const { getNotes } = useContext(NoteContext);
  const { openNewNoteForm } = useContext(NoteFormContext);

  return (
    <>
      {/* HAMBURGER */}
      {/* This is a seperated button for sidebar which is represented as a part of navbar */}
      <div className="z-[41] fixed top-0 left-0 transition-all ease-in-out duration-300 ">
        <div className="p-2.5 -mt-[1px] flex border-b dark:border-slate-700 justify-center items-center bg-white dark:bg-slate-900 ">
          <SidebarButton title="Ctrl + ." onClick={toggleSidebar} isBurger>
            {sidebarActive ? <CloseIcon /> : <BurgerIcon />}
          </SidebarButton>
        </div>
      </div>

      {/* SIDEBAR */}
      <div
        className={`${
          sidebarActive ? "w-60" : "w-16"
        } z-40 fixed transition-all ease-in-out duration-300 h-screen max-h-screen top-0 left-0 mt-16 shadow-lg`}
        onMouseLeave={() => setSidebarActive(false)}
      >
        <div className="flex flex-col gap-4 p-2.5 pt-5 h-full  bg-white dark:text-white dark:bg-slate-900">
          {/* Create New Note */}
          <SidebarButton disabled={!auth} onClick={openNewNoteForm} tooltip="New Note">
            <PlusIcon />
          </SidebarButton>

          {/* Re-Fetch All Notes */}
          <SidebarButton disabled={!auth} onClick={() => getNotes()} tooltip="Refresh All Notes">
            <NoteIcon />
          </SidebarButton>

          {/* Add Seperator Line */}
          <SidebarSeperator />

          {/* Toggle App Theme */}
          <SidebarButton onClick={toggleTheme} tooltip="Toggle Theme">
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </SidebarButton>

          {/* Go to top of page */}
          <SidebarButton onClick={backToTop} tooltip="Back To Top">
            <AngleUpIcon />
          </SidebarButton>

          {/* Add Seperator Line */}
          <SidebarSeperator />

          {/* Sign out */}
          <SidebarButton
            disabled={!auth}
            onClick={() => setLogoutModalActive(true)}
            tooltip="Sign Out"
          >
            {auth ? <SignOutIcon /> : <SignInIcon />}
          </SidebarButton>
        </div>
      </div>
    </>
  );
}
