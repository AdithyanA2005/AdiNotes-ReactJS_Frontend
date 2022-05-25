import { useState } from "react";
import DeleteModal from "../DeleteModal";
import Container from "./Container";
import NoteActionBtns from "./NoteActionBtns";
import NoteDescription from "./NoteDescription";
import NoteTag from "./NoteTag";
import NoteTitle from "./NoteTitle";

export default function NoteItem({ id, title, description, tag, openUpdateNoteHandle }) {
  // Note Active State
  const [noteActive, setNoteActive] = useState(false);

  // DeleteModal Active State
  const [deleteModalActive, setDeleteModalActive] = useState(false);

  // Truncate funtion to add ... to big text
  const truncate = (text, end) => (text.length > end ? text.slice(0, end) + "..." : text);

  return (
    <>
      {/* Modal that asks conformation before deleting a note */}
      {deleteModalActive && <DeleteModal id={id} closeModal={() => setDeleteModalActive(false)} />}

      <Container
        mouseOverHandle={() => setNoteActive(true)}
        mouseLeaveHandle={() => setNoteActive(false)}
        openUpdateNoteHandle={openUpdateNoteHandle}
        noteActive={noteActive}
      >
        {/* Note Title */}
        <NoteTitle text={noteActive ? title : truncate(title, 40)} />

        {/* Note Description */}
        <NoteDescription text={noteActive ? description : truncate(description, 120)} />

        {/* Note Edit and Delete Btns */}
        <div className="w-full mt-auto flex gap-3 justify-between items-center ease-in-out duration-500">
          <NoteTag text={tag} />
          <NoteActionBtns
            openUpdateNoteHandle={openUpdateNoteHandle}
            deleteHandle={() => setDeleteModalActive(true)}
          />
        </div>
      </Container>
    </>
  );
}
