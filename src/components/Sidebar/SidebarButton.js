import PropTypes from "prop-types";
import { useContext } from "react";
import SidebarContext from "../../context/Sidebar/SidebarContext";
import ItemName from "./ItemName";
import Tooltip from "./Tooltip";

export default function SidebarButton({ children, tooltip, isBurger, ...props }) {
  const { sidebarActive } = useContext(SidebarContext);
  return (
    <>
      {/* Sidebar Item Button */}
      <button
        {...props}
        className={`${
          isBurger
            ? "h-11 w-11 bg-green-500 text-white hover:rounded-lg rounded-[0.7rem] flex items-center justify-center"
            : "h-12 dark:bg-slate-800 dark:text-green-500 dark:hover:bg-green-500 dark:hover:text-white text-green-500 bg-slate-50 hover:bg-green-500 hover:text-white"
        } ${
          !isBurger &&
          (sidebarActive ? "rounded-r-3xl w-full pl-2" : "rounded-3xl w-12 hover:rounded-xl")
        } group relative transition-all duration-300 ease-in-out cursor-poi nter flex justify-start items-center shadow-lg`}
      >
        {/* Children (Probably the Icon) */}
        <span
          className={`${
            isBurger ? "h-12 w-12 p-3" : "h-12 w-12 p-[0.825rem]"
          } flex  items-center justify-center absolute`}
        >
          {children}
        </span>

        {/* Tooltip in sidebar shrik mode*/}
        {tooltip && !sidebarActive && <Tooltip text={`${tooltip} 💡`} />}

        {/* Item name when sidebar is expanded */}
        {sidebarActive && tooltip && <ItemName text={tooltip} />}
      </button>
    </>
  );
}

SidebarButton.propTypes = {
  children: PropTypes.node.isRequired,
  isBurger: PropTypes.bool,
  tooltip: PropTypes.string,
};

SidebarButton.defaultProps = {
  isBurger: false,
};
