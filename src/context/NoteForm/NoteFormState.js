import React, { useRef, useState } from "react";
import NoteFormContext from "./NoteFormContext";

const NoteFormState = (props) => {
  const [formExpanded, setFormExpanded] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  const noteDescriptionRef = useRef();
  const noteTitleRef = useRef();
  const formRef = useRef();

  const PASSWORD_MINIMUM_LENGTH = 8;
  const PASSWORD_MAXIMUM_LENGTH = 100;
  const USERNAME_MINIMUM_LENGTH = 5;
  const USERNAME_MAXIMUM_LENGTH = 100;
  const NAME_MAXIMUM_LENGTH = 50;

  const NOTE_TITLE_MINIMUM_LENGTH = 3;
  const NOTE_TITLE_MAXIMUM_LENGTH = 50;

  const NOTE_DESCRIPTION_MINIMUM_LENGTH = 5;
  const NOTE_DESCRIPTION_MAXIMUM_LENGTH = 200;

  const openNewNoteForm = () => {
    setFormExpanded(true);
    if (!formExpanded) return noteDescriptionRef.current.focus();
  };

  const closeNewNoteForm = () => {
    setFormExpanded(false);
    setNoteTitle("");
    setNoteDescription("");
    noteDescriptionRef.current.blur();
  };

  return (
    <NoteFormContext.Provider
      value={{
        PASSWORD_MINIMUM_LENGTH,
        PASSWORD_MAXIMUM_LENGTH,
        USERNAME_MINIMUM_LENGTH,
        USERNAME_MAXIMUM_LENGTH,
        NAME_MAXIMUM_LENGTH,
        NOTE_TITLE_MINIMUM_LENGTH,
        NOTE_TITLE_MAXIMUM_LENGTH,
        NOTE_DESCRIPTION_MINIMUM_LENGTH,
        NOTE_DESCRIPTION_MAXIMUM_LENGTH,
        formRef,
        noteTitleRef,
        noteDescriptionRef,
        openNewNoteForm,
        closeNewNoteForm,
        formExpanded,
        setFormExpanded,
        noteTitle,
        setNoteTitle,
        noteDescription,
        setNoteDescription,
      }}
    >
      {props.children}
    </NoteFormContext.Provider>
  );
};

export default NoteFormState;
