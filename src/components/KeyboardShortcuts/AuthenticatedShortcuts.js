import { useContext, useEffect } from "react";
import NoteFormContext from "../../context/NoteForm/NoteFormContext";
import { OPEN_NEW_NOTE_FORM_KEY } from "./ShortCutList";

function AuthenticatedShortcuts(props) {
  const { openNewNoteForm } = useContext(NoteFormContext);

  useEffect(() => {
    // Open Form by pressing keycombination `ctrl + ;`
    const handleKeyDown = (event) => {
      if (event.key.length !== 1) return;
      if (event.key === OPEN_NEW_NOTE_FORM_KEY && event.ctrlKey) return openNewNoteForm();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <>{props.children}</>;
}

export default AuthenticatedShortcuts;
