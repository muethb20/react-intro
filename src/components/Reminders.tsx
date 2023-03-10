import React, {useState} from 'react';
import {IReminder} from "../models/interfaces";
import './ReminderList.css'
import Form from "./Form";

function Reminders() {
    //const reminders: IReminder[] = [{
    const [reminders, setReminders] = useState(
        [{id: 1,
        todo: "saufen",
        when: new Date(),
        who: "mika"
    },
    {
        id: 2,
        todo: "Schi fahren",
        when: new Date(2023,10,3),
        who: "Luka"
    },
    {
        id: 3,
        todo: "Schi fahren",
        when: new Date(2023,10,3),
        who: "Luka"
    }])

    const onDelete = () => {
        reminders.pop();
        setReminders(reminders.slice());
    }


    let [counter, setCounter] = useState(1)

    const rise = () => {
        ++counter;
        setCounter(counter);
    }

    const lower = () => {
        --counter;
        setCounter(counter);
    }

    const addReminder = (title:string, date:string, person:string) => {
        let newReminder:IReminder = {id:reminders.length+1, todo:title, when: new Date(date), who:person};

        setReminders([...reminders, newReminder]);
    }

    return (
        <div>
            <h2>Reminders List</h2>
            <ul>
                {
                    reminders.map((value) => {
                    return <li key={value.id} className={"liElement"}>{value.todo} : {value.when.toDateString()} {value.who}</li>
                })
                }
                <button onClick={onDelete}>Löschen</button>

                <h2>Form Component</h2>
                <p>{counter}</p>

                <Form onRise={rise} onLower={lower} onClickAdd={addReminder}/>


            </ul>
        </div>
    );


}

export default Reminders;