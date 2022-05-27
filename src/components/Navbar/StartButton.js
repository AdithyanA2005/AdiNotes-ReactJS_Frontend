import { useContext } from "react";
import AuthContext from "../../context/Auth/AuthContext";
import NoteFormContext from "../../context/NoteForm/NoteFormContext";

export default function StartButton() {
  const { auth, setLoginModalActive } = useContext(AuthContext);
  const { openNewNoteForm } = useContext(NoteFormContext);

  return (
    <>
      {/* Conditionaly: authenticated ? "create new Note" : "get started" */}
      {auth ? (
        <button
          onClick={openNewNoteForm}
          className="hidden md:flex font-semibold text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 rounded-lg text-sm px-4 py-[0.6rem] text-center mr-3 md:mr-0 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-700"
        >
          Create New Note
        </button>
      ) : (
        <button
          onClick={() => setLoginModalActive(true)}
          className="hidden md:flex font-semibold text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 rounded-lg text-sm px-4 py-[0.6rem] text-center mr-3 md:mr-0 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-700"
        >
          Login To Account
        </button>
      )}
    </>
  );
}
