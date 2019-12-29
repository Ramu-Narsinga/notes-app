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
          (<AddNoteAction>action).payload.id = len;
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
          let {
            notes,
            activeIndex
          } = newState;

          let activeNote: any = notes[activeIndex];
          debugger;
          if (activeNote.id != undefined) {
            newState.notes.splice(activeIndex, 1);
            newState.activeIndex = activeIndex > 1 ? activeIndex - 1 : 0;
            return newState;
          } else {
            return {
              error: true,
              errMsg: "Did not find the note with id::"+activeIndex,
              notes: [...state.notes]
            }
          }
        case 'SEARCH_NOTES':
          let sNotes = [...state.notes];
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
                notes: sNotes.filter(note => note.title.includes((<AddNoteAction>action).payload.keyword) || note.description.includes((<AddNoteAction>action).payload.keyword))
              });
          }
        case 'SET_ACTIVE_INDEX':
          let sActiveIndex = (<AddNoteAction>action).payload.id;
          return Object.assign(
            {}, 
            state,
            {
              activeIndex: sActiveIndex
            });
        case 'UPDATE_NOTE':
            let updateNoteState = {...state};
            console.log("updateNoteState", updateNoteState);
            updateNoteState.notes[updateNoteState.activeIndex] = (<AddNoteAction>action).payload.note
            return Object.assign(
              {}, 
              state,
              updateNoteState);
        default:
          return state;
    }
};

export {
    reducer
}