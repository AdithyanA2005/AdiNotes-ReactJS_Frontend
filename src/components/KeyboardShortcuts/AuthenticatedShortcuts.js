import { useContext, useEffect } from "react";
import NoteFormContext from "../../context/NoteForm/NoteFormContext";
import NavigationContext from "../../context/Navigation/NavigationContext";
import { OPEN_NEW_NOTE_WITH_KEY, TOGGLE_SIDEBAR_WITH_KEY } from "./ShortCutList";

function AuthenticatedShortcuts(props) {
  const { openNewNoteForm } = useContext(NoteFormContext);
  const { toggleSidebar } = useContext(NavigationContext);

  useEffect(() => {
    // Shortcuts by pressing keycombination `ctrl + <key>}`
    const handleKeyDown = (event) => {
      if (event.key.length !== 1) return;

      // KEY => ; | Open create new note form
      if (event.key === OPEN_NEW_NOTE_WITH_KEY && event.ctrlKey) return openNewNoteForm();

      // KEY => . | Toggle Sidebar
      if (event.key === TOGGLE_SIDEBAR_WITH_KEY && event.ctrlKey) return toggleSidebar();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return <>{props.children}</>;
}

export default AuthenticatedShortcuts;
