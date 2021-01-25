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
		const notesUpdated = [...notes, newNote];
		setNotes(notesUpdated);
	};

	const removeNote = (index: number) => {
		const notesUpdated = [...notes];
		notesUpdated.splice(index, 1);
		setNotes(notesUpdated);
	};

	return (
		<section className="content">
			<NewNoteForm onNewNote={newNote} />
			<NotesList notes={notes} onRemoveNote={removeNote} />
		</section>
	);
}

export default App;
