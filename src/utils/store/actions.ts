import {
    Action,
    ActionCreator
} from 'redux';

export const ADD_NOTE: string = 'ADD_NOTE';
export const addNote: ActionCreator<Action> = () => ({
  type: ADD_NOTE
});

export const DELETE_NOTE: string = 'DELETE_NOTE';
export const deleteNote: ActionCreator<Action> = () => ({
  type: DELETE_NOTE
});

export const SEARCH_NOTES: string = 'SEARCH_NOTES';
export const searchNote: ActionCreator<Action> = () => ({
  type: SEARCH_NOTES
});

export const SET_ACTIVE_INDEX: string = 'SET_ACTIVE_INDEX';
export const activeIndex: ActionCreator<Action> = () => ({
  type: SET_ACTIVE_INDEX
});