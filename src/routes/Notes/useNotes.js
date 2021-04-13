import { useState } from 'react';
import Note from '../../models/note'

export default function useNotes() {
	const [notes, setNotes] = useState([])

	const addNote = (note) => {
	    if (note === "") {
	      return;
	    }
	    setNotes((notes) => [...notes, new Note(note)]);
	    setNote("");
  	};

  	const updateNote = async (note) => {
	    await note.handleStatusChange();
	    setNotes((notes) => {
	      let updateIndex = notes.findIndex((n) => n.id === note.id);
	      return [
	        ...notes.slice(0, updateIndex),
	        note,
	        ...notes.slice(updateIndex + 1, notes.length)
	      ];
	    });
  	};

  	const deleteNote = (note) => {
	    setNotes((notes) => {
	      let deleteIndex = notes.findIndex((n) => n.id === note.id);
	      return [
	        ...notes.slice(0, deleteIndex),
	        ...notes.slice(deleteIndex + 1, notes.length)
	      ];
	    });
 	 };

 	 return {
 	 	notes,
 	 	addNote,
 	 	updateNote,
 	 	deleteNote
 	 }
}