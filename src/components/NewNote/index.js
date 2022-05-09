import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../../context/Note/NoteContext";
import NoteFormContext from "../../context/NoteForm/NoteFormContext";
import InputContainer from "./InputContainer";

export default function CreateNew() {
  useEffect(() => {
    const main_app = document.getElementById("main-app");
    const handleClick = (e) => !formRef.current.contains(e.target) && closeNewNoteForm();
    main_app.addEventListener("click", handleClick);
    return () => main_app.removeEventListener("click", handleClick);
  }, []);

  const noteTitleRef = useRef();
  const { addNote } = useContext(NoteContext);
  const {
    NOTE_TITLE_MAXIMUM_LENGTH,
    NOTE_DESCRIPTION_MAXIMUM_LENGTH,
    formRef,
    noteDescriptionRef,
    openNewNoteForm,
    closeNewNoteForm,
    noteTitle,
    setNoteTitle,
    noteDescription,
    setNoteDescription,
    formExpanded,
  } = useContext(NoteFormContext);

  const handleEscape = (event) => {
    if (event.key == "Escape") return closeNewNoteForm();
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    addNote(noteTitle, noteDescription);
    closeNewNoteForm();
  };

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleFormSubmit}
        className="p-3.5 w-5/6 md:max-w-2xl mx-auto rounded-lg shadow-lg flex flex-col gap-3 border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700"
        method="post"
      >
        {formExpanded && (
          <InputContainer length={noteTitle.length} maxLength={NOTE_TITLE_MAXIMUM_LENGTH}>
            <input
              onKeyDown={handleEscape}
              onChange={(event) =>
                setNoteTitle(event.target.value.slice(0, NOTE_TITLE_MAXIMUM_LENGTH))
              }
              value={noteTitle}
              ref={noteTitleRef}
              className="flex-1 outline-0 bg-inherit font-medium text-lg text-green-400 placeholder:text-green-400"
              placeholder="Title"
              type="text"
            />
          </InputContainer>
        )}

        <InputContainer length={noteDescription.length} maxLength={NOTE_DESCRIPTION_MAXIMUM_LENGTH}>
          <input
            onKeyDown={handleEscape}
            onChange={(event) =>
              setNoteDescription(event.target.value.slice(0, NOTE_DESCRIPTION_MAXIMUM_LENGTH))
            }
            onClick={openNewNoteForm}
            value={noteDescription}
            ref={noteDescriptionRef}
            className="flex-1 outline-0 bg-inherit font-normal text-base text-slate-600 dark:text-slate-300 placeholder:text-slate-600 dark:placeholder:text-slate-300"
            placeholder="Take a note"
            type="text"
          />
        </InputContainer>

        {formExpanded && (
          <div className="flex justify-between mt-2.5">
            <button
              type="submit"
              className="text-white bg-purple-500 text-sm font-medium rounded-md py-2 px-2.5"
            >
              Create Note
            </button>
            <button
              onClick={closeNewNoteForm}
              className="text-slate-500 dark:text-slate-400 font-medium dark:text"
            >
              Close
            </button>
          </div>
        )}
      </form>
    </>
  );
}
