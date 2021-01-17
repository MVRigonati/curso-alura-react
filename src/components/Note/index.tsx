import React, { Component } from 'react';
import "./Note.css";

export default class NotesList extends Component {
	render() {
        return (
            <section className="note">
                <header className="note_header">
                    <h3 className="note_text">Título</h3>
                </header>
                <p className="note_title">Escreva sua nota</p>
            </section>
        );
    }
}