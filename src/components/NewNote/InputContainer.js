import React from "react";

export default function InputContainer(props) {
  return (
    <>
      <div className="relative w-full h-14 flex items-center gap-2 border rounded-md pl-3 border-slate-200 dark:border-slate-600">
        {props.children}
        <span className="absolute bottom-0 right-0 font-semibold text-xs shadow-md pl-1.5 pt-1.5 pr-0.5 pb-0.5 bg-opacity-20 dark:bg-opacity-20 rounded-tl-md text-slate-600 bg-slate-300 dark:text-slate-50 dark:bg-slate-500">
          {props.length}/{props.maxLength}
        </span>
      </div>
    </>
  );
}
