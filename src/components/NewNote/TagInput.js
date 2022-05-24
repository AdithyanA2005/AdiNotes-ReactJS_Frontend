import React from "react";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";

export default function TagInput({ closeBtnHandle, ...props }) {
  return (
    <div className="flex gap-2 px-2 py-1 max-w-[8rem] rounded-lg dark:text-slate-100 dark:bg-slate-500">
      <input
        className="border-0 outline-0  w-full text-sm font-semibold bg-inherit rounded-[inherit]"
        {...props}
        type="text"
      />
      <span
        onClick={closeBtnHandle}
        className="grid place-items-center dark:text-slate-300 dark:hover:text-slate-400 scale-75 hover:scale-90"
      >
        <CloseIcon />
      </span>
    </div>
  );
}
