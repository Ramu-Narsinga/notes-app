import { Component, OnInit, Inject } from '@angular/core';

import { Store } from 'redux';

import { AppStore } from '../../../utils/store';

import { AppState } from '../../../utils/interfaces';

import * as NotesAppActions from '../../../utils/store/actions';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  constructor(@Inject(AppStore) private store: Store<AppState>) {
    this.readState();
    store.subscribe(() => this.readState());
  }

  notesList: any;

  readState() {
    const state: AppState = this.store.getState() as AppState;
    // console.log("inside readState::", state);
    this.notesList = state.notes;
  }

  ngOnInit() {}

  setActiveNote(note) {
    this.store.dispatch({
      type: NotesAppActions.SET_ACTIVE_INDEX, 
      payload: {
                id: note.id
      }
    });
  }
}
