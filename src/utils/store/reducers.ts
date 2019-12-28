import { Reducer, Action, AddNoteAction, AppState } from '../interfaces';

let reducer: Reducer<AppState> = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case 'ADD_NOTE':
          return {
            notes: state.notes.concat(
              (<AddNoteAction>action).payload
            ),
          }
        default:
          return state;
    }
};

export {
    reducer
}