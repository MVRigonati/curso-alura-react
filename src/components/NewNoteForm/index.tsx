import React, { FormEvent, Dispatch, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addNote } from '../../store/action/notes';
import { MyAction, MyStore } from '../../store/store';
import { Note } from "../Note";

import './NewNoteForm.css';

const NewNoteForm: React.FC = () => {

	const categoryRef = useRef<HTMLSelectElement>(null);
	const textRef = useRef<HTMLTextAreaElement>(null);
	const titleRef = useRef<HTMLInputElement>(null);
	
	const dispatch = useDispatch<Dispatch<MyAction>>();
	const categories = useSelector<MyStore, string[]>(s => s.categories);

	const createNote = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		event.stopPropagation();

		dispatch(addNote(new Note(titleRef.current!.value, textRef.current!.value, categoryRef.current!.value)));
	}

	return (
		<form className="new-note-form" onSubmit={createNote}>
			<select className="new-note-form_input" ref={categoryRef}>
				<option></option>
				{categories.map((cat, index) => <option key={index}>{cat}</option>)}
			</select>

			<input type="text"
				placeholder="Title"
				ref={titleRef}
				className="new-note-form_input" />

			<textarea rows={15}
				placeholder="Write your note..."
				ref={textRef}
				className="new-note-form_input" />

			<button className="new-note-form_submit">Criar Nota</button>
		</form>
	);

}

export default NewNoteForm;
