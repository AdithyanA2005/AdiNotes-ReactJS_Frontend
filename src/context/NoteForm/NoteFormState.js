import React, { useRef, useState } from "react";
import NoteFormContext from "./NoteFormContext";

const NoteFormState = (props) => {
  const [formExpanded, setFormExpanded] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  const [noteTag, setNoteTag] = useState("General");
  const [noteTitleErr, setNoteTitleErr] = useState("");
  const [noteDescriptionErr, setNoteDescriptionErr] = useState("");
  const noteDescriptionRef = useRef();
  const formRef = useRef();

  const openNewNoteForm = () => {
    setFormExpanded(true);
    if (!formExpanded) return noteDescriptionRef.current.focus();
  };

  const closeNewNoteForm = () => {
    setFormExpanded(false);
    setNoteTitle("");
    setNoteDescription("");
    setNoteTitleErr("");
    setNoteDescriptionErr("");
    setNoteTag("General");
    noteDescriptionRef.current.blur();
  };

  return (
    <NoteFormContext.Provider
      value={{
        formRef,
        noteDescriptionRef,
        openNewNoteForm,
        closeNewNoteForm,
        formExpanded,
        setFormExpanded,
        noteTitle,
        setNoteTitle,
        noteDescription,
        setNoteDescription,
        noteTag,
        setNoteTag,
        noteTitleErr,
        setNoteTitleErr,
        noteDescriptionErr,
        setNoteDescriptionErr,
      }}
    >
      {props.children}
    </NoteFormContext.Provider>
  );
};

export default NoteFormState;
