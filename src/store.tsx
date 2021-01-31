import { createStore, Reducer, Action } from "redux";
import { Note } from "./components/Note";

const addNote = (newNote: Note): MyAction => {
    return {
        type: 'ADD_NOTE',
        
        execute: state => {
            const newState = [...state, newNote];
            return newState;
        }
    };
};
const removeNote = (index: number): MyAction => {
    return {
        type: 'REMOVE_NOTE',
        
        execute: state => {
            const newState = [...state];
            newState.splice(index, 1);
            return newState;
        }
    };
};

interface MyAction extends Action<string> {
    execute: (state: Note[]) => Note[];
}

const updateNotes: Reducer<Note[], MyAction> = (state = [], action): Note[] => {
    return (action.execute) ? action.execute(state) : state;
}

const notesListStore = createStore(updateNotes);

export { addNote, removeNote }
export default notesListStore;