import React from 'react';
import NoteView, { Note } from '../Note';
import './NotesList.css';

interface Props {
	notes: Note[];
}

const NotesList: React.FC<Props> = (props) => {

	return (
		<ul className="notes-list">
			{props.notes.map((note, i) => (
				<li className="notes-list_item" key={i}>
					<NoteView note={note} />
				</li>
			))}
		</ul>
	);

}

export default NotesList;
