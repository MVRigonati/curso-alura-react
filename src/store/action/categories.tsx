import { MyAction, MyStore } from "../store";

const addCategory = (newCategory: string): MyAction => {
    return {
        type: 'ADD_CAT',
        
        execute: state => {
            const newCategories = [...state.categories, newCategory]
            const newState: MyStore = {...state, categories: newCategories};
            return newState;
        }
    };
};

const removeCategory = (index: number): MyAction => {
    return {
        type: 'REMOVE_CAT',
        
        execute: state => {
            const newCategories = [...state.categories]

            newCategories.splice(index, 1);
            const newState: MyStore = {...state, categories: newCategories};

            return newState;
        }
    };
};

export { addCategory, removeCategory };