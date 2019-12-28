import { Reducer, Action, AddNoteAction, DeleteNoteAction, AppState } from '../interfaces';

import { initState } from '../store';

let reducer: Reducer<AppState> = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case 'ADD_NOTE':
          let len = state.notes.length;
          (<AddNoteAction>action).payload.id = len+1;
          return {
            notes: state.notes.concat(
              (<AddNoteAction>action).payload
            ),
          }
        case 'DELETE_NOTE':
          let newState = {...state};
          let delNotes: any = newState.notes.filter(note => note.id !== (<DeleteNoteAction>action).payload.id);

          if (delNotes.length !== 0) {
            newState.notes.splice(action.payload.id, 1);
            return newState;
          } else {
            return {
              error: true,
              errMsg: "Did not find the note with id::"+action.payload.id,
              notes: [...state.notes]
            }
          }
        case 'SEARCH_NOTES':
          let notes = [...state.notes];
          if (!action.payload.keyword) {
            return {
              notes: initState.notes
            }
          } else {
            return {
              notes: notes.filter(note => note.title.includes(action.payload.keyword) || note.description.includes(action.payload.keyword))
            }
          }
        default:
          return state;
    }
};

export {
    reducer
}