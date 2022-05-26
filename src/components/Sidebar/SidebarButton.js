import PropTypes from "prop-types";
import { useContext } from "react";
import SidebarContext from "../../context/Sidebar/SidebarContext";
import Tooltip from "../Tooltip";
import ItemName from "./ItemName";

export default function SidebarButton({ children, tooltip, isDisabled, onClickHandle }) {
  const { sidebarExpanded } = useContext(SidebarContext);

  return (
    <>
      <button
        disabled={isDisabled}
        onClick={onClickHandle}
        className={`${
          sidebarExpanded ? "rounded-r-3xl w-full pl-2" : "rounded-3xl w-12 hover:rounded-xl"
        } group relative transition-all duration-300 ease-in-out cursor-pointer flex justify-start items-center shadow-lg h-12 dark:bg-slate-800 dark:text-green-500 dark:hover:bg-green-500 dark:hover:text-white text-green-500 bg-slate-50 hover:bg-green-500 hover:text-white`}
      >
        {/* Children (Probably the Icon) */}
        <span className="h-12 w-12 p-[0.825rem] flex items-center justify-center absolute">
          {children}
        </span>

        {/* Tooltip in sidebar collapse mode or for burger*/}
        {tooltip && !sidebarExpanded && <Tooltip text={`${tooltip} 💡`} />}

        {/* Item name when sidebar is expanded */}
        {sidebarExpanded && tooltip && <ItemName text={tooltip} />}
      </button>
    </>
  );
}

SidebarButton.propTypes = {
  children: PropTypes.node.isRequired,
  tooltip: PropTypes.string.isRequired,
  onClickHandle: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};

SidebarButton.defaultProps = {
  isDisabled: false,
};
