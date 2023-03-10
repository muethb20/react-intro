import React, {ReactFragment, useState} from 'react';
import {INewReminder} from "../models/interfaces";

function Form( {onRise, onLower ,onClickAdd}: INewReminder) {
    const [title, setTitle] = useState("title");
    const [date, setDate] = useState("date");
    const [who, setPerson] = useState("me");

    const submitForm = (e: React.FormEvent) => {
        console.log(title);
        e.preventDefault();
    }

    return (
        <div>
            <button onClick={onRise}> + </button>
            <button onClick={onLower}> - </button>


            <form onSubmit={submitForm}>
                <label htmlFor="title">Titel:</label>
                <input placeholder={title} type="text"
                        onChange={e => setTitle(e.target.value)}/>

                <br/>
                <label htmlFor="title">Wann:</label>
                <input placeholder={date} type="date"
                        onChange={e => setDate(e.target.value)}/>

                <br/>
                <label htmlFor="title">Wer:</label>
                <input placeholder={who} type="text"
                        onChange={e => setPerson(e.target.value)}/>

                <br/>
                <button type="submit" onClick={() => onClickAdd(title, date, who)}> Hinzufügen </button>
            </form>
        </div>
    );
}

export default Form;