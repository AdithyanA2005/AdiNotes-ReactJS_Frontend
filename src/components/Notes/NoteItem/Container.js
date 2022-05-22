import PropTypes from "prop-types";
import React from "react";

export default function Container({
  children,
  mouseOverHandle,
  mouseLeaveHandle,
  noteActive,
  specialBorder,
  onClickHandle,
}) {
  return (
    <>
      <div
        onClick={onClickHandle}
        className={`group overflow-hidden relative w-full md:w-[49%] min-h-[13rem] md:max-w-[19.3rem] rounded-md shadow-md bg-white dark:bg-slate-700 transition-all ease-in-out duration-500
          ${specialBorder ? "cursor-pointer" : "border border-slate-200 dark:border-slate-600"}
          ${noteActive && !specialBorder && "dark:shadow-purple-400"}
          ${noteActive && specialBorder && "shadow-cyan-400"}
          ${noteActive && "scale-110 z-10"} 
        `}
      >
        <div
          className={`
          absolute -top-24 -bottom-24 -left-24 -right-24 group-hover:animate-spin
          ${specialBorder && "bg-gradient-to-r from-green-500 via-cyan-500 to-emerald-400"}`}
        ></div>
        <div
          onMouseOver={mouseOverHandle}
          onMouseLeave={mouseLeaveHandle}
          className={`absolute p-2.5 gap-3 top-1 bottom-1 left-1 right-1 flex flex-col justify-center bg-inherit rounded-sm 
          ${
            specialBorder &&
            "group-hover:ease-in-out group-hover:duration-300 group-hover:top-1.5 group-hover:bottom-1.5 group-hover:left-1.5 group-hover:right-1.5"
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  specialBorder: PropTypes.bool.isRequired,
  noteActive: PropTypes.bool.isRequired,
  mouseOverHandle: PropTypes.func,
  mouseLeaveHandle: PropTypes.func,
  onClickHandle: PropTypes.func,
};

Container.defaultProps = {
  noteActive: false,
  specialBorder: false,
};
