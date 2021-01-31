import React from 'react';
import NotesList from './components/NotesList';
import NewNoteForm from './components/NewNoteForm';
import "./assets/App.css";
import "./assets/index.css";

const App: React.FC = () => {

	return (
		<section className="content">
			<NewNoteForm />
			<NotesList />
		</section>
	);
	
}

export default App;
