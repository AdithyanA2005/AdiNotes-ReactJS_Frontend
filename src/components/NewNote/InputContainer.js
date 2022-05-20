import React, { useContext } from "react";
import NoteFormContext from "../../context/NoteForm/NoteFormContext";

export default function InputContainer({ length, refference, validationErr, ...props }) {
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
          <span className="font-semibold text-xs pl-1.5 pt-1.5 pr-0.5 pb-0.5 text-slate-600 dark:text-slate-50">
            {length && `${length.current}/${length.max}`}
          </span>
        </div>
        {formExpanded && validationErr && (
          <span className="text-red-400 text-sm pl-2">{validationErr}</span>
        )}
      </div>
    </>
  );
}
