import getAxios from "../../axios/index";
import React, { useContext, useState } from "react";
import NoteContext from "./NoteContext";
import LoaderContext from "../Loader/LoaderContext";
import AuthContext from "../Auth/AuthContext";

const NoteState = (props) => {
  const { setProgress } = useContext(LoaderContext);
  const { auth } = useContext(AuthContext);
  const [notes, setNotes] = useState();
  const axios = getAxios(auth?.authToken);

  const getNotes = () => {
    setProgress(5);
    axios.get("/notes/getnotes").then((res) => {
      setProgress(50);
      setNotes(res.data.reverse());
      setProgress(100);
    });
  };

  const addNote = (title, description, tag = undefined) => {
    setProgress(5);
    if (!tag) tag = "General";
    axios
      .post("/notes/addnote", {
        title: title,
        description: description,
        tag: tag,
      })
      .then((res) => {
        setProgress(50);
        setNotes([res.data, ...notes]);
        setProgress(100);
      });
  };

  const updateNote = (id, title, description, tag = undefined) => {
    setProgress(5);
    console.log(id);
    if (!tag) tag = "General";
    axios
      .put(`/notes/updatenote/${id}`, {
        title: title,
        description: description,
        tag: tag,
      })
      .then((res) => {
        setProgress(50);
        // setNotes(notes.filter((note) => note._id !== id));
        setNotes([res.data, ...notes.filter((note) => note._id !== id)]);
        setProgress(100);
      });
  };

  const deleteNote = (id) => {
    setProgress(5);
    axios
      .delete(`/notes/deletenote/${id}`)
      .then((res) => {
        setNotes(notes.filter((note) => note._id !== id));
        setProgress(100);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          // TODO: HANDLE NOTE ALREADY DELETED POPUP
          console.log("Note Already Deleted");
        }
      });
  };

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, updateNote, deleteNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
