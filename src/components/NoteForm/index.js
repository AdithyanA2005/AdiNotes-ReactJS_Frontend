import React, { useContext, useEffect } from "react";
import NoteContext from "../../context/Note/NoteContext";
import NoteFormContext from "../../context/NoteForm/NoteFormContext";
import { OPEN_NEW_NOTE_WITH_KEY } from "../KeyboardShortcuts/ShortCutList";
import InputContainer from "./InputContainer";
import TagInput from "./TagInput";

export default function CreateNew() {
  // Length config of title and desc
  const titleMaxLen = process.env.REACT_APP_NOTE_TITLE_MAXIMUM_LENGTH;
  const titleMinLen = process.env.REACT_APP_NOTE_TITLE_MINIMUM_LENGTH;
  const descMaxLen = process.env.REACT_APP_NOTE_DESCRIPTION_MAXIMUM_LENGTH;
  const descMinLen = process.env.REACT_APP_NOTE_DESCRIPTION_MINIMUM_LENGTH;
  const tagMaxLen = process.env.REACT_APP_NOTE_TAG_MINIMUM_LENGTH;

  // Context Variables
  const { addNote, updateNote } = useContext(NoteContext);
  const {
    formRef,
    noteDescriptionRef,
    isUpdateForm,
    openNewNoteForm,
    closeNewNoteForm,
    noteId,
    noteTag,
    noteTitle,
    setNoteTitle,
    noteDescription,
    setNoteDescription,
    formExpanded,
    noteTitleErr,
    setNoteTitleErr,
    noteDescriptionErr,
    setNoteDescriptionErr,
  } = useContext(NoteFormContext);

  // Closes the form if escape key is pressed
  const handleEscapeOnKeyDown = (event) => {
    if (event.key === "Escape") return closeNewNoteForm();
  };

  // Does the validations on the tile input
  const titleValidations = (value) => {
    if (value.length < titleMinLen)
      return setNoteTitleErr("Title should atleast contain " + titleMinLen + " characters");
    return setNoteTitleErr("");
  };

  // Does the validations on the description input
  const descValidations = (value) => {
    if (value.length < descMinLen)
      return setNoteDescriptionErr(
        "Description should atleast contain " + descMinLen + " characters"
      );
    return setNoteDescriptionErr("");
  };

  // Handle title change
  const titleOnChangeHandle = (event) => {
    setNoteTitle(event.target.value);
    titleValidations(event.target.value);
  };

  // Handle description change
  const descOnChangeHandle = (event) => {
    setNoteDescription(event.target.value);
    descValidations(event.target.value);
  };

  // Handle form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!isUpdateForm) await addNote(noteTitle, noteDescription, noteTag);
    if (isUpdateForm) await updateNote(noteId, noteTitle, noteDescription, noteTag);
    closeNewNoteForm();
  };

  useEffect(() => {
    // Close the form by clicking outside the form body
    const main_app = document.getElementById("main-app");
    const handleClick = (e) => !formRef.current.contains(e.target) && closeNewNoteForm();
    main_app.addEventListener("click", handleClick);
    return () => main_app.removeEventListener("click", handleClick);
  });

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleFormSubmit}
        onKeyDown={handleEscapeOnKeyDown}
        className="p-3.5 w-11/12 md:max-w-2xl mx-auto rounded-lg shadow-lg flex flex-col gap-5 border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700"
      >
        {/* Note Title Input When Expanded */}
        {formExpanded && (
          <InputContainer
            length={{
              current: noteTitle.length,
              max: titleMaxLen,
            }}
            validationErr={noteTitleErr}
            value={noteTitle}
            placeholder="Title"
            maxLength={titleMaxLen}
            className="flex-1 outline-0 bg-inherit font-medium text-lg text-sky-400 placeholder:text-sky-400"
            onChange={titleOnChangeHandle}
          />
        )}

        {/* Take Note Input */}
        <InputContainer
          keyComb={["Ctrl", OPEN_NEW_NOTE_WITH_KEY]}
          refference={noteDescriptionRef}
          length={{
            current: noteDescription.length,
            max: descMaxLen,
          }}
          validationErr={noteDescriptionErr}
          value={noteDescription}
          placeholder="Take a note"
          maxLength={descMaxLen}
          className="flex-1 outline-0 bg-inherit font-normal text-base text-slate-600 dark:text-slate-300 placeholder:text-slate-600 dark:placeholder:text-slate-300"
          onChange={descOnChangeHandle}
          onClick={openNewNoteForm}
        />

        {/* Show tag input when form is expanded */}
        {formExpanded && <TagInput maxLength={tagMaxLen} />}

        {/* Submit and close button when expanded */}
        {formExpanded && (
          <div className="flex justify-between mt-1.5">
            {/* Submit Button */}
            <button
              type="submit"
              disabled={!noteTitle || !noteDescription || noteTitleErr || noteDescriptionErr}
              className="disabled:cursor-not-allowed disabled:bg-opacity-50 text-white bg-teal-500 hover:bg-teal-600 text-sm font-medium rounded-md py-2 px-2.5"
            >
              Create Note
            </button>

            {/* Close Button */}
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
