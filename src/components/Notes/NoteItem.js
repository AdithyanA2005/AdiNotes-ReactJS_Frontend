import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as BinIcon } from "../../assets/bin.svg";

export default function NoteItem({ title, description, tag }) {
  const [noteActive, setNoteActive] = useState(false);
  const truncate = (text, end) => (text.length > end ? text.slice(0, end) + "..." : text);
  const deleteRef = useRef();

  return (
    <>
      <div className="w-full sm:w-72 min-h-[13rem] relative ">
        <div
          onMouseOver={(event) => {
            if (deleteRef.current.contains(event.target)) return;
            return setNoteActive(true);
          }}
          onMouseLeave={() => setNoteActive(false)}
          className={`${
            noteActive && "scale-110 z-40 dark:shadow-purple-400 shadow-md"
          } w-full min-h-[inherit] p-3 gap-3 absolute transition-all ease-in-out duration-500 flex flex-col rounded-md border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700`}
        >
          <h1 className="text-green-400 dark:text-green-400 font-semibold text-lg">
            {noteActive ? title : truncate(title, 40)}
          </h1>
          <p className="dark:text-slate-300 transition-all text-slate-600 text-md">
            {noteActive ? description : truncate(description, 100)}
          </p>
          <div className="w-full mt-auto flex gap-3 justify-start ease-in-out duration-500">
            <span className="bg-slate-100 dark:bg-slate-600 text-slate-600 dark:text-white rounded-lg py-[5px] px-2.5 text-xs  font-bold  =">
              {tag}
            </span>
          </div>

          <button ref={deleteRef} className="h-11 w-11 absolute -bottom-2 -right-2">
            <div className="z-50 h-9 w-9 pr-2 p-2.5 mr-3 mb-3 rounded-tl-xl transition-all duration-300 opacity-50 hover:opacity-100 text-purple-400 bg-slate-600">
              <BinIcon />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
