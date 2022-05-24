import React, { useContext, useEffect } from "react";
import AuthenticatedShortcuts from "../components/KeyboardShortcuts/AuthenticatedShortcuts";
import LogoutForm from "../components/LogoutForm";
import NewNoteForm from "../components/NewNote";
import Notes from "../components/Notes";
import AuthContext from "../context/Auth/AuthContext";
import NoteContext from "../context/Note/NoteContext";

export default function Main() {
  // Contexts
  const { notes, getNotes } = useContext(NoteContext);
  const { logoutModalActive } = useContext(AuthContext);

  // Fetch User Notes on mounting
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <AuthenticatedShortcuts>
      <>
        {/* Conform Logout Modal */}
        {logoutModalActive && <LogoutForm />}

        <div className="flex flex-col gap-7">
          {/* Form to create new Note */}
          <NewNoteForm />

          {/* List of notes */}
          <Notes notes={notes} />
        </div>
      </>
    </AuthenticatedShortcuts>
  );
}
