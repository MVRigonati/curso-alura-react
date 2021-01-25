import React, { Component } from 'react';
import "./Note.css";

export class Note {
    public title: string;
    public text: string;

    constructor(title: string, text: string) {
        this.title = title;
        this.text = text;
    }
}

interface Props {
    note: Note;
}

export default class NoteView extends Component<Props> {
    
	render() {
        return (
            <section className="note">
                <header className="note_header">
                    <h3 className="note_text">{this.props.note.title}</h3>
                </header>
                <p className="note_title">{this.props.note.text}</p>
            </section>
        );
    }
}