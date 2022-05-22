import AddNewNote from "./AddNewNote";
import NoteItem from "./NoteItem";
import NotesContainer from "./NotesContainer";

export default function Notes({ notes }) {
  return (
    <>
      <NotesContainer>
        {/* New Note Card */}
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
              />
            );
          })}
      </NotesContainer>
    </>
  );
}
