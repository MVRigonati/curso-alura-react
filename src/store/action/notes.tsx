import { MyAction } from "../store";
import { Note } from "../../components/Note";

const addNote = (newNote: Note): MyAction => {
    return {
        type: 'ADD_NOTE',
        
        execute: state => {
            const newNotes = [...state.notes, newNote]
            const newState = {...state, notes: newNotes};
            return newState;
        }
    };
};

const removeNote = (index: number): MyAction => {
    return {
        type: 'REMOVE_NOTE',
        
        execute: state => {
            const newNotes = [...state.notes]

            newNotes.splice(index, 1);
            const newState = {...state, notes: newNotes};

            return newState;
        }
    };
};

export { addNote, removeNote };