import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/Auth/AuthContext";
import NoteFormContext from "../../context/NoteForm/NoteFormContext";

export default function StartButton() {
  const { auth } = useContext(AuthContext);
  const { openNewNoteForm } = useContext(NoteFormContext);

  return (
    <>
      {/* TODO: Set this according to user | authenticated ? "create new Note" : "get started"  */}
      {auth ? (
        <button
          onClick={openNewNoteForm}
          className="hidden md:flex text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-[0.6rem] text-center mr-3 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        >
          Create New Note
        </button>
      ) : (
        <NavLink
          to="/auth/login"
          className="hidden md:flex text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-[0.6rem] text-center mr-3 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        >
          Login To Account
        </NavLink>
      )}
    </>
  );
}
