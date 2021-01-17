import React, { Component } from 'react';
import './NewNoteForm.css';

export default class NewNoteForm extends Component {

	render() {

        return (
            <form className="new-note-form">
				<input type="text" placeholder="Título" className="new-note-form_input" />
				<textarea rows={15} placeholder="Escreva sua nota..." className="new-note-form_input" />
				<button className="new-note-form_submit">Criar Nota</button>
			</form>
        );

    }

}