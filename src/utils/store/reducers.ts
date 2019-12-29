import { AddNoteAction, DeleteNoteAction, AppState } from '../interfaces';

import { initState } from '../store/initial-state';

import {
  Action,
  Reducer
} from 'redux';

let reducer: Reducer<AppState> = (state: AppState = initState, action: Action): AppState => {
    switch (action.type) {
        case  'INIT_APP_DATA':
          return Object.assign({}, state, (<AddNoteAction>action).payload)  
        case 'ADD_NOTE':
          let len = state.notes.length;
          (<AddNoteAction>action).payload.id = len;
          return Object.assign(
            {}, 
            state, 
            {
              notes: state.notes.concat(
                (<AddNoteAction>action).payload
              ),
              activeIndex: len
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
            // newState.notes.splice(activeIndex, 1);
            newState.notes = [...state.notes.slice(0, activeIndex),
              ...state.notes.slice(activeIndex + 1)]
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
          if (!(<AddNoteAction>action).payload.keyword) {
            return Object.assign(
              {}, 
              state,
              {
                notes: initState.notes
              });
          } else {
            // let sNotes = [...state.notes];
            let sNotes = [...initState.notes]; // get latest list of updated notes from local storage
            // let sNotes = [...(<AddNoteAction>action).payload.notes];
            // debugger;
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
            // console.log("updateNoteState", updateNoteState);
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