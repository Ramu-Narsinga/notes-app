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
    store.subscribe(() => this.readState());
    this.readState();
  }

  readState() {
    const state: AppState = this.store.getState() as AppState;
    console.log("inside readState::", state);
    this.notesList = state.notes;
  }

  ngOnInit() {

  }

  notesList: any = [
    {
      title: 'note 1',
      description: 'note 1 description',
      id: 0,
      timeStamp: "Monday"
    },
    {
      title: 'note 2',
      description: 'note 2 description',
      id: 0,
      timeStamp: "Monday"
    }
  ]

}
