import React, { useRef, useState } from "react";
import NoteFormContext from "./NoteFormContext";

const NoteFormState = (props) => {
  const [formExpanded, setFormExpanded] = useState(false);
  const [isUpdateForm, setIsUpdateForm] = useState(false);
  const [noteId, setNoteId] = useState(null);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  const [noteTag, setNoteTag] = useState("General");
  const [noteTitleErr, setNoteTitleErr] = useState("");
  const [noteDescriptionErr, setNoteDescriptionErr] = useState("");
  const noteDescriptionRef = useRef();
  const formRef = useRef();

  const openNewNoteForm = () => {
    if (!formExpanded) noteDescriptionRef.current.focus();
    setFormExpanded(true);
    setIsUpdateForm(false);
    setNoteId(null);
  };

  const openUpdateNoteForm = (note) => {
    if (!formExpanded) noteDescriptionRef.current.focus();
    setIsUpdateForm(true);
    setFormExpanded(true);
    setNoteTitle(note.title);
    setNoteDescription(note.description);
    setNoteTag(note.tag);
    setNoteId(note._id);
  };

  const closeNewNoteForm = () => {
    setFormExpanded(false);
    setNoteTitle("");
    setNoteDescription("");
    setNoteTitleErr("");
    setNoteDescriptionErr("");
    setNoteTag("General");
    setIsUpdateForm(false);
    setNoteId(null);
    noteDescriptionRef.current.blur();
  };

  return (
    <NoteFormContext.Provider
      value={{
        formRef,
        noteDescriptionRef,
        isUpdateForm,
        setIsUpdateForm,
        openUpdateNoteForm,
        openNewNoteForm,
        closeNewNoteForm,
        formExpanded,
        setFormExpanded,
        noteId,
        setNoteId,
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
