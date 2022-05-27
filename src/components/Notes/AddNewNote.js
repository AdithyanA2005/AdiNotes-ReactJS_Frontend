import React, { useContext, useState } from "react";
import { ReactComponent as PlusIcon } from "../../assets/plus.svg";
import NoteFormContext from "../../context/NoteForm/NoteFormContext";
import Container from "./NoteItem/Container";

export default function AddNewNote() {
  const [noteActive, setNoteActive] = useState(false);
  const { openNewNoteForm } = useContext(NoteFormContext);
  const mouseOverHandle = () => setNoteActive(true);
  const mouseLeaveHandle = () => setNoteActive(false);

  return (
    <>
      <Container
        specialBorder
        onClickHandle={openNewNoteForm}
        noteActive={noteActive}
        mouseOverHandle={mouseOverHandle}
        mouseLeaveHandle={mouseLeaveHandle}
      >
        <div className="h-16 flex justify-center text-cyan-500/60 dark:text-teal-400/80">
          <PlusIcon />
        </div>
      </Container>
    </>
  );
}
