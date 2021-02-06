import { Reducer, Action, createStore } from "redux";
import { Note } from "../components/Note";

export interface MyStore {
    notes: Note[],
    categories: string[]
}

export interface MyAction extends Action<string> {
    execute: (state: MyStore) => MyStore;
}

const initialState: MyStore = {
    notes: [],
    categories: []
}

const reducer: Reducer<MyStore, MyAction> = (state = initialState, action): MyStore => {
    return (action.execute) ? action.execute(state) : state;
}

const Store = createStore(reducer);

export default Store;