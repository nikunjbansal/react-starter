import "./styles.css";
import { useState } from "react";
import useNotes from "./useNotes";

import NoteForm from './NoteForm'
import NotesList from './NotesList'


export default function NotesApp() {
  const [note, setNote] = useState("");
  const { notes, addNote, deleteNote, updateNote } = useNotes()

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <NoteForm addNote={addNote} />
      <NotesList 
        notes={notes}
        deleteNote={deleteNote}
        updateNote={updateNote}
      />
    </div>
  );
}

const NoteRow = (props) => {
  const { note, onStatusChange, onDelete } = props;
  return (
    <tr>
      <td>{note.id.substr(0, 10)}</td>
      <td>{note.title}</td>
      <td>
        <button onClick={onStatusChange}>{note.status}</button>
      </td>
      <td>
        <button onClick={onDelete}>Delete</button>
      </td>
    </tr>
  );
};
