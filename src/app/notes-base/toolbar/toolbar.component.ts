import { Component, OnInit, Inject } from '@angular/core';

import { Store } from 'redux';

import { AppStore } from '../../../utils/store';

import { AppState } from '../../../utils/interfaces';

import * as NotesAppActions from '../../../utils/store/actions';

import { NotesAppService } from '../../../utils/services/notes-app.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  searchKey: any;

  appState: any;

  constructor(
    @Inject(AppStore) private store: Store<AppState>, 
    private notesAppService: NotesAppService) {}

  ngOnInit() {
  }

  addNote() {

    let payload = {
      title: '', 
      description: '', 
      timeStamp: Date.now()
    }

    // dispatch
    this.store.dispatch({
      type: NotesAppActions.ADD_NOTE, 
      payload
    });

    this.notesAppService.saveNotes();
  }

  deleteNote() {

    this.store.dispatch({
      type: NotesAppActions.DELETE_NOTE
    });

    this.notesAppService.deleteNotes();
  }

  searchNotes() {
    // console.log("searchKey", this.searchKey);

    let {
      notes
    } = this.store.getState();

    this.store.dispatch({
      type: NotesAppActions.SEARCH_NOTES,
      payload: {
        keyword: this.searchKey,
        notes
      }
    })
  }

}
