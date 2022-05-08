import axios from "../../axios/index";
import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const [notes, setNotes] = useState();
  const [createNewModal, setCreateNewModal] = useState(true);

  const getNotes = () => {
    axios.get("/notes/getnotes").then((res) => setNotes(res.data.reverse()));
  };

  const addNote = (title, description, tag = undefined) => {
    console.log("Fuck");
    axios
      .post("/notes/addnote", {
        title: title,
        description: description,
        tag: tag,
      })
      .then((res) => setNotes([res.data, ...notes]));
  };

  const deleteNote = (id) => {
    axios
      .delete(`/notes/deletenote/${id}`)
      .then((res) => {
        setNotes(notes.filter((note) => note._id !== id));
      })
      .catch((err) => {
        if (err.response.status === 404) {
          // TODO: HANDLE NOTE ALREADY DELETED POPUP
          console.log("Note Already Deleted");
        }
      });
  };

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
