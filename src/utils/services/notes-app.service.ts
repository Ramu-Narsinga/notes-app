import { Injectable, Inject } from '@angular/core';

import { Store } from 'redux';

import { AppStore } from '../store/index';

import { AppState, Note } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class NotesAppService {

  appState: any;

  constructor(
    @Inject(AppStore) private store: Store<AppState>
  ) {
  }

  getNotesAppData() {
    return JSON.parse(localStorage.getItem('notesAppData'));
  }

  saveNotes() {
    this.registerAndUpdateLS('save');
  }

  updateNotes() {
    this.registerAndUpdateLS('update');
  }

  deleteNotes() {
     this.registerAndUpdateLS('delete');
  }

  setActiveIndex() {
    this.registerAndUpdateLS('active');
  }

  registerAndUpdateLS(type: any) {
    // console.log("inside:", type, "state value:", this.store.getState());
    this.appState = this.store.getState();
    // store in local storage for now
    localStorage.setItem('notesAppData', JSON.stringify(this.appState));
  }
}
