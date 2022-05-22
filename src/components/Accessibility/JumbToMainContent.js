import React, { useContext, useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import AuthContext from "../../context/Auth/AuthContext";
import NoteFormContext from "../../context/NoteForm/NoteFormContext";

export default function JumbToMainContent() {
  const buttonRef = useRef();
  const [active, setActive] = useState(false);
  const { openNewNoteForm } = useContext(NoteFormContext);
  const { auth, setLoginModalActive } = useContext(AuthContext);
  const handleButtonFocus = () => setActive(true);
  const handleOnKeyDown = (event) => {
    if (event.key === "Tab") return setActive(false);
    if (event.key === "Escape") return setActive(false);
  };

  // Handle opening and closing with focusin adn focusout event listeners
  useEffect(() => {
    const handleClick = (event) => {
      // Hide button if click is outside the button
      if (!buttonRef.current.contains(event.target)) return setActive(false);

      // If User is authenticated open the create new note form
      if (auth) {
        openNewNoteForm();
        setActive(false);
        return;
      }

      // If User is note authenticated open the login form
      if (!auth) {
        setLoginModalActive(true);
        setActive(false);
        return;
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      onFocus={handleButtonFocus}
      onKeyDown={handleOnKeyDown}
      className={`fixed z-[1000] pl-3 pr-6 py-2 border-0 outline-0 rounded-br-[1rem] transition-all ease-in-out duration-300 shadow-lg font-semibold text-lg focus:ring-4 focus:ring-purple-400 text-white bg-purple-500 ${
        active ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {auth ? "Create New Note" : "Login To Account"}
    </button>
  );
}
