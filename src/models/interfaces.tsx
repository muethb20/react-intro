export interface IReminder {
    id: number;
    todo: string;
    when: Date;
    who: string
}

export interface INewReminder {
    onRise : () => void
    onLower : () => void;
    onClickAdd: (title: string, date: string, who:string) => void;
}