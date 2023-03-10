import React, {ReactFragment, useState} from 'react';
import {INewReminder} from "../models/interfaces";

function Form( {onRise, onClickAdd}: INewReminder) {
    const [title, setTitle] = useState("title ");
    const submitForm = (e: React.FormEvent) => {
        console.log(title);
        e.preventDefault();
    }

    return (
        <div>
            <button onClick={onRise}> + </button>

            <form onSubmit={submitForm}>
                <label htmlFor="title">Titel:</label>
                <input placeholder={title} type="text"
                        onChange={e => setTitle(e.target.value)}/>
                <button type="submit" onClick={() => onClickAdd(title)}> + </button>
            </form>
        </div>
    );
}

export default Form;