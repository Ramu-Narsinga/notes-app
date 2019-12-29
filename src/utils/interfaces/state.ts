export interface Note {
    id?: number,
    title: string;
    timeStamp: any;
    description: string;
}

export interface DeleteNote {
    id: number
}

export interface AppState {
    error?: boolean;
    notes: Note[];
    errMsg?: string;
    activeIndex?: number;
}