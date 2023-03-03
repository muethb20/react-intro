import React from 'react';
import {IReminder} from "../models/interfaces";
import './ReminderList.css'

function ReminderList() {
    const reminders: IReminder[] = [{
        todo: "saufen",
        when: new Date(),
        who: "mika"
    },
    {
        todo: "Schi fahren",
        when: new Date(2023,10,3),
        who: "Luka"
    },
    {
        todo: "Schi fahren",
        when: new Date(2023,10,3),
        who: "Luka"
    }]
    return (
        <div>
            <ul>
                {
                    reminders.map((value) => {
                    return <li className={"liElement"}>{value.todo} : {value.when.toDateString()} {value.who}</li>
                })
                }
            </ul>
        </div>
    );
}

export default ReminderList;