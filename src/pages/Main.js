import React, { useContext, useEffect } from "react";
import Notes from "../components/Notes";
import NoteContext from "../context/Note/NoteContext";
import NewNoteForm from "../components/NewNote";
export default function Main() {
  const { notes, getNotes } = useContext(NoteContext);
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-7">
        <NewNoteForm />
        <Notes notes={notes} />
      </div>
    </>
  );
}
