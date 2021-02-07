import React from 'react';
import { ReactComponent as DeleteImage } from "../../assets/img/delete-24px.svg";

import { removeNote } from '../../store/action/notes';
import NotesListStore from '../../store/store';

import "./Note.css";

export class Note {
    public title: string;
    public text: string;
    public category: string;

    constructor(title: string, text: string, category: string) {
        this.title = title;
        this.text = text;
        this.category = category;
    }
}

interface Props {
    note: Note;
    index: number;
}

const NoteView: React.FC<Props> = (props) => {

    return (
        <section className="note">
            <header className="note_header">
                <h3 className="note_text">{props.note.title}</h3>
                <DeleteImage onClick={() => NotesListStore.dispatch(removeNote(props.index))} />
                <h4>{props.note.category}</h4>
            </header>
            <p className="note_title">{props.note.text}</p>
        </section>
    );

}

export default NoteView;
