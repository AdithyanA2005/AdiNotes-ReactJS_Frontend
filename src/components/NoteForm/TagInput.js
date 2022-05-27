import React, { useContext } from "react";
import { useRef } from "react";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import NoteFormContext from "../../context/NoteForm/NoteFormContext";

export default function TagInput() {
  // Contexts
  const { noteTag, setNoteTag } = useContext(NoteFormContext);

  // Handle tag input onChange
  const handlOnChange = (event) => setNoteTag(event.target.value);

  // Handle tag clear
  const clearTagHandle = () => setNoteTag("General");

  // Classes for hidden span and input
  const fontClasses = "text-[0.9rem] font-medium";

  return (
    <div className="h-7 w-fit max-w-[10rem] px-2.5 rounded-xl overflow-clip flex gap-1 justify-center items-center text-slate-600 bg-slate-100 dark:text-slate-300 dark:bg-slate-600">
      {/* The Input area with auto changing with according to content functionality */}
      <div className="relative flex bg-inherit min-w-[3.2rem] h-[inherit] overflow-hidden">
        {/* The input tag */}
        <input
          type="text"
          value={noteTag}
          onChange={handlOnChange}
          placeholder="General"
          className={`${fontClasses} absolute top-0 bottom-0 left-0 right-0  h-full w-full border-0 outline-0 bg-inherit grid place-items-center`}
        />

        {/* A hidden span tag that takes the same of input tag, which helps in  changing the tag width automatically */}
        <span className={`${fontClasses}`}>{noteTag}</span>
      </div>

      {/* Close Icon */}
      <span
        onClick={clearTagHandle}
        className="flex w-4 h-inherit text-slate-500 dark:text-slate-400 dark:hover:text-slate-300"
      >
        <CloseIcon />
      </span>
    </div>
  );
}
