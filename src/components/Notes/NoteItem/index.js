import React, { useRef, useState } from "react";
import { ReactComponent as BinIcon } from "../../../assets/bin.svg";
import DeleteModal from "../DeleteModal";
import Container from "./Container";

export default function NoteItem({ id, title, description, tag }) {
  // Refs
  const deleteRef = useRef();

  // Note Active State
  const [noteActive, setNoteActive] = useState(false);

  // DeleteModal Active State
  const [deleteModalActive, setDeleteModalActive] = useState(false);

  // Truncate funtion to add ... to big text
  const truncate = (text, end) => (text.length > end ? text.slice(0, end) + "..." : text);

  const mouseOverHandle = (event) => {
    if (deleteRef.current.contains(event.target)) return;
    return setNoteActive(true);
  };

  const mouseLeaveHandle = () => setNoteActive(false);

  return (
    <>
      {/* Asks conformation before deleting a note */}
      {deleteModalActive && <DeleteModal id={id} closeModal={() => setDeleteModalActive(false)} />}
      <Container
        mouseOverHandle={mouseOverHandle}
        mouseLeaveHandle={mouseLeaveHandle}
        noteActive={noteActive}
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
            onClick={() => setDeleteModalActive(true)}
            className="group-hover:scale-100 scale-0 w-3.5 rounded-tl-xl transition-all duration-300 opacity-70 text-slate-500 hover:opacity-100 hover:text-red-500 hover:w-4"
          >
            <BinIcon />
          </button>
        </div>
      </Container>
    </>
  );
}
