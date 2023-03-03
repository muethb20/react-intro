import React, {useState} from 'react';
import {IReminder} from "../models/interfaces";
import './ReminderList.css'

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

    return (
        <div>
            <ul>
                {
                    reminders.map((value) => {
                    return <li key={value.id} className={"liElement"}>{value.todo} : {value.when.toDateString()} {value.who}</li>
                })
                }
                <button onClick={onDelete}>Löschen</button>
            </ul>
        </div>
    );
}

export default Reminders;