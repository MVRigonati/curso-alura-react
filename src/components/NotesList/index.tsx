import React, { Component } from 'react';
import NoteView, { Note } from '../Note';
import './NotesList.css';

interface Props {
	notes: Note[];
}

export default class NotesList extends Component<Props> {

	render() {
		return (
			<ul className="notes-list">
				{this.props.notes.map((note, i) => (
					<li className="notes-list_item" key={i}>
						<NoteView note={note}/>
					</li>
				))}
			</ul>
		);
	}
}

