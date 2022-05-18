import React, { useEffect, useRef, useState } from "react";

export default function SignUpInput({ children, message, currentLen, maxLen, ...props }) {
  const inputRef = useRef();
  const [inputDisabled, setInputDisabled] = useState(false);

  useEffect(() => {
    setInputDisabled(inputRef.current.disabled);
  }, []);

  return (
    <>
      <div className="w-full">
        <div className={`${inputDisabled && "opacity-60"} relative`}>
          <input
            ref={inputRef}
            className="disabled:cursor-not-allowed w-full border-0 outline-0 p-3.5 rounded-lg font-normal z-10 text-base text-slate-600 dark:text-slate-300 placeholder:text-slate-600 dark:placeholder:text-slate-300 bg-slate-100 dark:bg-slate-700"
            {...props}
          />
          {maxLen && (
            <span className="absolute bottom-1 right-1 font-semibold text-xs text-slate-600 dark:text-slate-400">
              {currentLen}/{maxLen}
            </span>
          )}
        </div>
        {message && <span className=" text-red-500  max-h-[inherit] w-fit z-50">{message}</span>}
      </div>
    </>
  );
}
