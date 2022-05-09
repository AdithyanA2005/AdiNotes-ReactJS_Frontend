import React, { useContext, useEffect, useRef, useState } from "react";
import { ReactComponent as BinIcon } from "../../assets/bin.svg";
import NoteContext from "../../context/Note/NoteContext";

export default function NoteItem({ id, title, description, tag }) {
  const [noteActive, setNoteActive] = useState(false);
  const truncate = (text, end) => (text.length > end ? text.slice(0, end) + "..." : text);
  const deleteRef = useRef();
  const { deleteNote } = useContext(NoteContext);

  return (
    <>
      <div className="group w-5/6 min-h-[13rem] md:max-w-[20rem] relative">
        <div
          onMouseOver={(event) => {
            if (deleteRef.current.contains(event.target)) return;
            return setNoteActive(true);
          }}
          onMouseLeave={() => setNoteActive(false)}
          className={`${
            noteActive && "scale-110 z-40 dark:shadow-purple-400"
          } w-full shadow-md min-h-[inherit] p-3 gap-3 absolute transition-all ease-in-out duration-500 flex flex-col rounded-md border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700`}
        >
          <h1 className="text-green-400 dark:text-green-400 font-semibold text-lg break-words">
            {noteActive ? title : truncate(title, 40)}
          </h1>
          <p className="dark:text-slate-300 transition-all text-slate-600 text-md break-words">
            {noteActive ? description : truncate(description, 120)}
          </p>
          <div className="w-full mt-auto flex gap-3 justify-between items-center ease-in-out duration-500">
            <div className="flex-1 ">
              <span className="bg-slate-100 dark:bg-slate-600 text-slate-600 dark:text-white rounded-lg py-[5px] px-2.5 text-xs  font-bold  =">
                {tag}
              </span>
            </div>

            <button
              ref={deleteRef}
              onClick={() => deleteNote(id)}
              className="group-hover:scale-100 scale-0 z-50 w-3.5 rounded-tl-xl transition-all duration-300 opacity-70 text-slate-500 hover:opacity-100 hover:text-red-500 hover:w-4"
            >
              <BinIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
