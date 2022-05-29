import { useContext, useState } from "react";
import AuthContext from "../../context/Auth/AuthContext";
import NoteFormContext from "../../context/NoteForm/NoteFormContext";

export default function JumbToMainContent() {
  // Accessiblity Button
  const [buttonActive, setButtonActive] = useState(false);

  // Contexts
  const { openNewNoteForm } = useContext(NoteFormContext);
  const { auth, setLoginModalActive } = useContext(AuthContext);

  // Show button focus
  const handleButtonFocusIn = () => setButtonActive(true);
  const handleButtonFocusOut = () => setButtonActive(false);

  // Handle Button Click
  const handleButtonClick = () => {
    // Onclick open create new note form if user is authenticated
    if (auth) openNewNoteForm();

    // Onclick open login form if user is not authenticated
    if (!auth) setLoginModalActive(true);

    // Also hide the button on button click
    return setButtonActive(false);
  };

  // Handle escape on esc key down
  const handleOnKeyDown = (event) => {
    if (event.key === "Escape") return setButtonActive(false);
  };

  return (
    <button
      onFocus={handleButtonFocusIn}
      onBlur={handleButtonFocusOut}
      onClick={handleButtonClick}
      onKeyDown={handleOnKeyDown}
      className={`fixed z-[1000] pl-3 pr-6 py-2 border-0 outline-0 rounded-br-3xl transition-all ease-in-out duration-300 shadow-lg font-semibold text-lg focus:ring-1 focus:ring-cyan-400 text-white bg-cyan-500 ${
        buttonActive ? "translate-x-0" : "-translate-x-[110%]"
      }`}
    >
      {auth ? "Create New Note" : "Login To Account"}
    </button>
  );
}
