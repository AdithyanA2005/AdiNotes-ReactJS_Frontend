import React from "react";

export default function InputContainer(props) {
  return (
    <>
      <div className="relative w-full flex items-center gap-2 rounded-md">
        {props.children}
        <span className="font-semibold text-xs pl-1.5 pt-1.5 pr-0.5 pb-0.5 text-slate-600 dark:text-slate-50">
          {props.length}/{props.maxLength}
        </span>
      </div>
    </>
  );
}
