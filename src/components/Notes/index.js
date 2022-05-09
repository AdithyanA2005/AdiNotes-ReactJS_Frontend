import React from "react";
import NoteItem from "./NoteItem";
import NotesContainer from "./NotesContainer";

export default function Notes({ notes }) {
  return (
    <>
      <NotesContainer>
        {notes &&
          notes.map((note, index) => {
            return (
              <NoteItem
                key={note._id}
                id={note._id}
                title={note.title}
                description={note.description}
                tag={note.tag}
              />
            );
          })}
      </NotesContainer>
    </>
  );
}