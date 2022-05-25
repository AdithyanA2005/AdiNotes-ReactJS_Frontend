import React, { useRef, useState } from "react";
import { ReactComponent as BinIcon } from "../../../assets/bin.svg";
import { ReactComponent as EditIcon } from "../../../assets/edit.svg";
import DeleteModal from "../DeleteModal";
import Container from "./Container";

export default function NoteItem({ id, title, description, tag, openUpdateNoteHandle }) {
  // Refs

  // Note Active State
  const [noteActive, setNoteActive] = useState(false);

  // DeleteModal Active State
  const [deleteModalActive, setDeleteModalActive] = useState(false);

  // Truncate funtion to add ... to big text
  const truncate = (text, end) => (text.length > end ? text.slice(0, end) + "..." : text);

  return (
    <>
      {/* Asks conformation before deleting a note */}
      {deleteModalActive && <DeleteModal id={id} closeModal={() => setDeleteModalActive(false)} />}
      <Container
        mouseOverHandle={() => setNoteActive(true)}
        mouseLeaveHandle={() => setNoteActive(false)}
        openUpdateNoteHandle={openUpdateNoteHandle}
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

          <div className="flex gap-3">
            <button
              onClick={openUpdateNoteHandle}
              className="group-hover:scale-100 scale-0 w-4 hover:w-[18px] transition-all duration-300 opacity-70 hover:opacity-100 text-slate-500 hover:text-purple-500"
            >
              <EditIcon />
            </button>

            <button
              onClick={() => setDeleteModalActive(true)}
              className="group-hover:scale-100 scale-0 w-3.5 hover:w-4 transition-all duration-300 opacity-70 hover:opacity-100 text-slate-500 hover:text-red-500"
            >
              <BinIcon />
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}
