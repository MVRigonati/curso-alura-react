import React, { useState } from 'react';
import NotesList from './components/NotesList';
import NewNoteForm from './components/NewNoteForm';
import { Note } from "./components/Note";
import "./assets/App.css";
import "./assets/index.css";

const App: React.FC<{}> = (props) => {

	const notesInit: Note[] = [];
	const [notes, setNotes] = useState(notesInit);

	const newNote = (newNote: Note) => {
		const notesUpdated = [...notes];
		notesUpdated.push(newNote);
		setNotes(notesUpdated);
	};

	return (
		<section className="content">
			<NewNoteForm onNewNote={newNote} />
			<NotesList notes={notes} />
		</section>
	);
}

export default App;
