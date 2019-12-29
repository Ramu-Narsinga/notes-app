import { AddNoteAction, DeleteNoteAction, AppState } from '../interfaces';

import { initState } from '../store/initial-state';

import {
  Action,
  Reducer
} from 'redux';

let reducer: Reducer<AppState> = (state: AppState = initState, action: Action): AppState => {
    switch (action.type) {
        case 'ADD_NOTE':
          let len = state.notes.length;
          (<AddNoteAction>action).payload.id = len+1;
          return Object.assign(
            {}, 
            state, 
            {
              notes: state.notes.concat(
                (<AddNoteAction>action).payload
              )
            });
        case 'DELETE_NOTE':
          let newState = {...state};
          let delNotes: any = newState.notes.filter(note => note.id !== (<DeleteNoteAction>action).payload.id);

          if (delNotes.length !== 0) {
            newState.notes.splice((<AddNoteAction>action).payload.id, 1);
            return newState;
          } else {
            return {
              error: true,
              errMsg: "Did not find the note with id::"+(<AddNoteAction>action).payload.id,
              notes: [...state.notes]
            }
          }
        case 'SEARCH_NOTES':
          let notes = [...state.notes];
          if (!(<AddNoteAction>action).payload.keyword) {
            return Object.assign(
              {}, 
              state,
              {
                notes: initState.notes
              });
          } else {
            return Object.assign(
              {}, 
              state,
              {
                notes: notes.filter(note => note.title.includes((<AddNoteAction>action).payload.keyword) || note.description.includes((<AddNoteAction>action).payload.keyword))
              });
          }
        case 'SET_ACTIVE_INDEX':
          let activeIndex = (<AddNoteAction>action).payload.id;
          return Object.assign(
            {}, 
            state,
            {
              activeIndex
            });
        default:
          return state;
    }
};

export {
    reducer
}