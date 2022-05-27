import React, { useContext } from "react";
import NoteFormContext from "../../context/NoteForm/NoteFormContext";

export default function InputContainer({ length, refference, validationErr, keyComb, ...props }) {
  const { formExpanded } = useContext(NoteFormContext);
  return (
    <>
      <div>
        <div
          className={`relative w-full px-3 flex items-center gap-2 ${
            formExpanded && "pb-2 border-b border-slate-400"
          }`}
        >
          <input ref={refference} type="text" {...props} />

          {!formExpanded && keyComb && (
            <span
              title="Open New Note Form"
              className="absolute right-3 font-bold text-xs px-2.5 py-1.5 rounded-md text-sky-500 bg-sky-100 dark:text-sky-400 dark:bg-slate-600"
            >
              {keyComb.join(" + ")}
            </span>
          )}

          {formExpanded && (
            <span className="font-semibold text-xs pl-1.5 pt-1.5 pr-0.5 pb-0.5 text-slate-600 dark:text-slate-50">
              {length && `${length.current}/${length.max}`}
            </span>
          )}
        </div>
        {formExpanded && validationErr && (
          <span className="text-red-400 text-sm pl-2">{validationErr}</span>
        )}
      </div>
    </>
  );
}
