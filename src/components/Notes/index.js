import { useContext } from "react";
import NoteFormContext from "../../context/NoteForm/NoteFormContext";
import AddNewNote from "./AddNewNote";
import NoteItem from "./NoteItem";
import NotesContainer from "./NotesContainer";

export default function Notes({ notes }) {
  const { openUpdateNoteForm } = useContext(NoteFormContext);

  return (
    <>
      <NotesContainer>
        {/* New Note Form */}
        <AddNewNote />

        {/* User Specific Note */}
        {notes &&
          notes.map((note) => {
            return (
              <NoteItem
                key={note._id}
                id={note._id}
                title={note.title}
                description={note.description}
                tag={note.tag}
                openUpdateNoteHandle={() => openUpdateNoteForm(note)}
              />
            );
          })}
      </NotesContainer>
    </>
  );
}
