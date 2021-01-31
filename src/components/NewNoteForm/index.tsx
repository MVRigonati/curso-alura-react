import React, { ChangeEvent, FormEvent, useState } from 'react';
import NotesListStore, { addNote } from '../../store';
import { Note } from "../Note";
import './NewNoteForm.css';

const NewNoteForm: React.FC = () => {

	const [title, setTitle] = useState('');
	const [text, setText] = useState('');

	const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
		event.stopPropagation();
		setTitle(event.target.value);
	}

	const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		event.stopPropagation();
		setText(event.target.value);
	}

	const createNote = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		event.stopPropagation();
		NotesListStore.dispatch(addNote(new Note(title, text)));
	}

	return (
		<form className="new-note-form" onSubmit={createNote}>
			<input type="text"
				placeholder="Título"
				value={title}
				className="new-note-form_input"
				onChange={handleTitleChange} />

			<textarea rows={15}
				placeholder="Escreva sua nota..."
				value={text}
				className="new-note-form_input"
				onChange={handleTextChange} />

			<button className="new-note-form_submit">Criar Nota</button>
		</form>
	);

}

export default NewNoteForm;
