import React from 'react';
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

const NoteView: React.FC<Props> = (props) => {

    return (
        <section className="note">
            <header className="note_header">
                <h3 className="note_text">{props.note.title}</h3>
            </header>
            <p className="note_title">{props.note.text}</p>
        </section>
    );

}

export default NoteView;
