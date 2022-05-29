import { useContext, useEffect } from "react";
import { ReactComponent as MoonIcon } from "../../assets/moon.svg";
import { ReactComponent as NoteIcon } from "../../assets/note.svg";
import { ReactComponent as PlusIcon } from "../../assets/plus.svg";
import { ReactComponent as SignInIcon } from "../../assets/signin.svg";
import { ReactComponent as SignOutIcon } from "../../assets/signout.svg";
import { ReactComponent as AngleUpIcon } from "../../assets/sortup.svg";
import { ReactComponent as SunIcon } from "../../assets/sun.svg";
import AuthContext from "../../context/Auth/AuthContext";
import NavigationContext from "../../context/Navigation/NavigationContext";
import NoteContext from "../../context/Note/NoteContext";
import NoteFormContext from "../../context/NoteForm/NoteFormContext";
import ThemeContext from "../../context/Theme/ThemeContext";
import SidebarButton from "./SidebarButton";
import SidebarSeperator from "./SidebarSeperator";

export default function Sidebar() {
  // Contexts
  const { sidebarRef, sidebarExpanded, setSidebarExpanded } = useContext(NavigationContext);
  const { auth, setLogoutModalActive } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { openNewNoteForm } = useContext(NoteFormContext);
  const { navigationRef } = useContext(NavigationContext)
  const { getNotes } = useContext(NoteContext);

  // Function to scroll back to top of the page
  const backToTop = () => window.scroll(0, 0);

  // Set sidebar collapse on pointer leave
  const handleSidebarPointerLeave = () => setSidebarExpanded(false);

  useEffect(() => {
    // Set sidebar collapsed when clicking outside navbar or sidebar
    const handleClick = (event) => { if (!navigationRef.current.contains(event.target)) return setSidebarExpanded(false) }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  });
  
  return (
    <>
      <div
        ref={sidebarRef}
        onPointerLeave={handleSidebarPointerLeave}
        className={`${
          sidebarExpanded ? "w-60" : "w-16"
        } z-40 fixed transition-all ease-in-out duration-300 h-screen max-h-screen top-0 left-0 mt-16 shadow-lg`}
      >
        <div className="flex flex-col gap-4 p-2.5 pt-5 h-full  bg-white dark:text-white dark:bg-slate-900">
          {/* Create New Note */}
          <SidebarButton isDisabled={!auth} onClickHandle={openNewNoteForm} tooltip="New Note">
            <PlusIcon />
          </SidebarButton>

          {/* Refresh All Notes */}
          <SidebarButton
            isDisabled={!auth}
            onClickHandle={() => getNotes()}
            tooltip="Refresh All Notes"
          >
            <NoteIcon />
          </SidebarButton>

          {/* Add Seperator Line */}
          <SidebarSeperator />

          {/* Toggle App Theme */}
          <SidebarButton onClickHandle={toggleTheme} tooltip="Toggle Theme">
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </SidebarButton>

          {/* Go to top of page */}
          <SidebarButton onClickHandle={backToTop} tooltip="Back To Top">
            <AngleUpIcon />
          </SidebarButton>

          {/* Add Seperator Line */}
          <SidebarSeperator />

          {/* Sign out */}
          <SidebarButton
            isDisabled={!auth}
            onClickHandle={() => setLogoutModalActive(true)}
            tooltip="Sign Out"
          >
            {auth ? <SignOutIcon /> : <SignInIcon />}
          </SidebarButton>
        </div>
      </div>
    </>
  );
}
