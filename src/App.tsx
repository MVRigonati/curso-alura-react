import React from 'react';
import NotesList from './components/NotesList';
import NewNoteForm from './components/NewNoteForm';
import "./assets/App.css";
import "./assets/index.css";
import CategoryList from './components/CategoryList';

const App: React.FC = () => {

	return (
		<section className="content">
			<NewNoteForm />
			<main className="main-content">
				<CategoryList />
				<NotesList />
			</main>
		</section>
	);
	
}

export default App;
