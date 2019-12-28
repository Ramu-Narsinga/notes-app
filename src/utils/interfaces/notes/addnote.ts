import { Action, Note } from '../index';

export interface AddNoteAction extends Action {
    note: Note;
}