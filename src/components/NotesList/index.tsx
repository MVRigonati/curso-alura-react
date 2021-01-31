import React from 'react';
import { useSelector } from 'react-redux';
import NoteView, { Note } from '../Note';
import './NotesList.css';

const NotesList: React.FC = () => {

	let notes = useSelector<Note[], Note[]>(s => s);

	return (
		<ul className="notes-list">
			{notes.map((note, i) => (
				<li className="notes-list_item" key={i}>
					<NoteView note={note} index={i} />
				</li>
			))}
		</ul>
	);

}

export default NotesList;
