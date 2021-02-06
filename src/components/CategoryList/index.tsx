import React, { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../../store/action/categories';

import { MyAction, MyStore } from '../../store/store';
import "./style.css";

const CategoryList: React.FC = () => {

    const categories = useSelector<MyStore, string[]>(s => s.categories);
    const dispatch = useDispatch<Dispatch<MyAction>>();

    const inputHandle = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            dispatch(addCategory(event.currentTarget.value));
        }
    }

    return (
        <section className="category-list">
            <ul className="category-list_list">
                {categories.map((category, index) =>
                    <li key={index} className="category-list_item">{category}</li>
                )}
            </ul>
            <input className="category-list_input"
                placeholder="Add Category"
                onKeyUp={inputHandle} />
        </section>
    )

}

export default CategoryList;