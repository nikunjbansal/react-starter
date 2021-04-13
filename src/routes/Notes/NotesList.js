import React from 'react'
// import Datagrid from '../../components/Datagrid';

// export default NotesList = (props) => {

// 	const { notes, addNote, updateNote } = props
// 	const columns = [
// 	  { key: "id", name: "ID" },
// 	  { key: "title", name: "Title" },
// 	  { key: "status", name: "Status" }
// 	  { key: "action", name: "Delete" }
// 	];

// 	return <Datagrid  />

// 	return (
// 		<table className="Table">
// 	        <thead>
// 	          <tr>
// 	            <th>id</th>
// 	            <th>title</th>
// 	            <th>status</th>
// 	            <th>action</th>
// 	          </tr>
// 	        </thead>
// 	        <tbody>
// 	          {notes.map((note) => (
// 	            <NoteRow
// 	              key={note.id}
// 	              note={note}
// 	              onStatusChange={_handleStatusChange.bind(null, note)}
// 	              onDelete={_handleNoteDelete.bind(null, note)}
// 	            />
// 	          ))}
// 	        </tbody>
//       	</table>
// 	)
// }

// export const getRows = (notes) => {
// 	notes.map(note => ({
// 		id: note.id,
// 		title: note.title,
// 		status: note.status,
// 		action: 'Delete'
// 	}))
// }

export default (props) => {

	const { notes, updateNote, deleteNote } = props

	return (
		<table className="Table">
	        <thead>
	          <tr>
	            <th>id</th>
	            <th>title</th>
	            <th>status</th>
	            <th>action</th>
	          </tr>
	        </thead>
	        <tbody>
	        	{
	        		notes.map(note => (
	        			<tr>
					      <td>{note.id.substr(0, 10)}</td>
					      <td>{note.title}</td>
					      <td>
					        <button onClick={updateNote.bind(null, note)}>{note.status}</button>
					      </td>
					      <td>
					        <button onClick={deleteNote.bind(null, note)}>Delete</button>
					      </td>
					    </tr>
        			))
	        	}
	        </tbody>
      	</table>
	)

}