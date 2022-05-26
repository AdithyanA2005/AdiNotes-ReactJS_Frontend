import PropTypes from "prop-types";
import { useContext } from "react";
import { toast } from "react-toastify";
import SidebarContext from "../../context/Sidebar/SidebarContext";
import Tooltip from "../Tooltip";
import ItemName from "./ItemName";

export default function SidebarButton({ children, tooltip, isDisabled, onClickHandle }) {
  // Contexts
  const { sidebarExpanded } = useContext(SidebarContext);

  // Only allow onClick function to run if button is not disabled
  const filteredOnClickHandle = () => {
    if (isDisabled)
      return toast.info("Please login to access it", {
        autoClose: 1000,
        hideProgressBar: false,
      });
    return onClickHandle();
  };

  // Button Classes
  const getButtonClasses = () => {
    const classes = [];

    // The base classes
    classes.push(
      "group relative h-12 shadow-lg flex justify-start items-center transition-all duration-300 ease-in-out text-sky-500 bg-slate-50 dark:text-sky-500 dark:bg-slate-800"
    );

    // Classes according to disabled state
    if (isDisabled) classes.push("cursor-not-allowed");
    else
      classes.push(
        "cursor-pointer hover:text-white dark:hover:text-white hover:bg-sky-500 dark:hover:bg-sky-500"
      );

    // Classes according to sidebar expanded state
    if (sidebarExpanded) classes.push("rounded-r-3xl w-full pl-2");
    else classes.push("rounded-3xl w-12 ");

    // If button is disabled and sidebar is not expanded
    if (!isDisabled && !sidebarExpanded) classes.push(" hover:rounded-xl");

    // Finally returning a conjoinedd string
    return classes.join(" ");
  };
  const buttonClasses = getButtonClasses();

  return (
    <>
      <button onClick={filteredOnClickHandle} className={buttonClasses}>
        {/* Children (Probably the Icon) */}
        <span className="h-12 w-12 p-[0.825rem] flex items-center justify-center absolute">
          {children}
        </span>

        {/* Tooltip in sidebar collapse mode */}
        {tooltip && !sidebarExpanded && (
          <Tooltip text={`${tooltip} ${isDisabled ? "| Please login to access " : ""} 💡`} />
        )}

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
