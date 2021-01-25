import React, { Component, ChangeEvent, FormEvent } from 'react';
import { Note } from "../Note";
import './NewNoteForm.css';

interface Props {
	onNewNote: (newNote: Note) => void;
}

export default class NewNoteForm extends Component<Props> {

	private newNote: Note;

	constructor(props: Props) {
		super(props);
		this.newNote = new Note('', '');
	}

	private handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
		event.stopPropagation();
		this.newNote.title = event.target.value;
	}

	private handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		event.stopPropagation();
		this.newNote.text = event.target.value;
	}

	private createNote = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		event.stopPropagation();
		this.props.onNewNote(this.newNote);
	}

	render() {

        return (
            <form className="new-note-form" onSubmit={this.createNote}>
				<input type="text"
					placeholder="Título"
					className="new-note-form_input"
					onChange={this.handleTitleChange} />

				<textarea rows={15}
					placeholder="Escreva sua nota..."
					className="new-note-form_input"
					onChange={this.handleTextChange} />

				<button className="new-note-form_submit">Criar Nota</button>
			</form>
        );

    }

}
