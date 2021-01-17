import React, { Component } from 'react';
import Note from '../Note';
import './NotesList.css';

export default class NotesList extends Component {

	notesList: string[] = ["Work", "Work", "Study"];

	render() {
		return (
			<ul className="notes-list">
				{this.notesList.map((category, i) => (
					<li className="notes-list_item" key={i}>
						<div>{category}</div>
						<Note />
					</li>
				))}
			</ul>
		);
	}
}

