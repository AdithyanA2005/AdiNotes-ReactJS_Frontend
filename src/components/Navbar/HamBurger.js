import { useContext } from "react";
import { ReactComponent as BurgerIcon } from "../../assets/burger.svg";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import Tooltip from "../Tooltip";
import SidebarContext from "../../context/Sidebar/SidebarContext";
import { TOGGLE_SIDEBAR_WITH_KEY } from "../KeyboardShortcuts/ShortCutList";

export default function HamBurger() {
  const { sidebarActive, toggleSidebar } = useContext(SidebarContext);

  return (
    <>
      <div className="absolute left-0 flex justify-center items-center h-full w-16">
        <button
          className="group relative h-11 w-11 bg-sky-500 text-white hover:rounded-md rounded-xl flex items-center justify-center transition-all ease-in-out duration-300"
          onClick={toggleSidebar}
        >
          {/* Burger Icon */}
          <span className="h-12 w-12 p-2.5 grid place-items-center">
            {sidebarActive ? <CloseIcon /> : <BurgerIcon />}
          </span>

          {/* Burger Tooltip */}
          <Tooltip text={`Ctrl + ${TOGGLE_SIDEBAR_WITH_KEY}`} />
        </button>
      </div>
    </>
  );
}
