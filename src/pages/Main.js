import React from "react";
import NoteItem from "../components/Notes/NoteItem";
import NotesContainer from "../components/Notes/NotesContainer";

export default function Main() {
  const notes = [];
  return (
    <>
      <div className="p-4">
        <NotesContainer>
          {notes.map((note) => {
            return (
              <NoteItem
                id={note.id}
                title={note.title}
                description={note.description}
                tag="Hello"
                key={note.id}
              />
            );
          })}
        </NotesContainer>
      </div>
    </>
  );
}
