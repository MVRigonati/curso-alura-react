import React, { Component } from 'react';
import NotesList from './components/NotesList';
import NewNoteForm from './components/NewNoteForm';
import { Note } from "./components/Note";
import "./assets/App.css";
import "./assets/index.css";

interface State {
	notes: Note[];
}

export default class App extends Component<{}, State> {

	constructor(props: {}) {
		super(props);
		this.state = { notes: [] };
	}

	private newNote = (newNote: Note)  => {
		const notesUpdated = [...this.state.notes];
		notesUpdated.push(newNote);
		this.setState({ notes: notesUpdated });
	};

	render() {
		return (
			<section className="content">
				<NewNoteForm onNewNote={this.newNote} />
				<NotesList notes={this.state.notes} />
			</section>
		);
	}
}
