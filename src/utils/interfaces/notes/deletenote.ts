import { Action, DeleteNote } from '../index';

export interface DeleteNoteAction extends Action {
    id: DeleteNote;
}