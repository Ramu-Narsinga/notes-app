export interface Note {
    id: number,
    title: string;
    timeStamp: string;
    description: string;
}

export interface DeleteNote {
    id: number
}

export interface AppState {
    notes: Note[];
}