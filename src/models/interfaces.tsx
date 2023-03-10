export interface IReminder {
    id: number;
    todo: string;
    when: Date;
    who: string
}

export interface INewReminder {
    onRise : () => void;
    onClickAdd: (title: string) => void;
}