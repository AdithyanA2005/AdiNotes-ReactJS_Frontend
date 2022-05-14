import React, { useContext, useEffect } from "react";
import Notes from "../components/Notes";
import NoteContext from "../context/Note/NoteContext";
import NewNoteForm from "../components/NewNote";
import LogoutForm from "../components/LogoutForm";
import AuthContext from "../context/Auth/AuthContext";
export default function Main() {
  const { notes, getNotes } = useContext(NoteContext);
  const { logoutModalActive } = useContext(AuthContext);

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      {logoutModalActive && <LogoutForm />}
      <div className="flex flex-col gap-7">
        <NewNoteForm />
        <Notes notes={notes} />
      </div>
    </>
  );
}
