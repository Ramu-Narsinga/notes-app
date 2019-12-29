import { Component, OnInit, Inject } from '@angular/core';

import { Store } from 'redux';

import { AppStore } from '../../../utils/store';

import { AppState } from '../../../utils/interfaces';

import * as NotesAppActions from '../../../utils/store/actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  searchKey: any;

  constructor(@Inject(AppStore) private store: Store<AppState>) { }

  ngOnInit() {
  }

  addNote() {
    this.store.dispatch({
      type: NotesAppActions.ADD_NOTE, 
      payload: {
                  title: '', 
                  description: '', 
                  timeStamp: Date.now()
                }
    });
  }

  deleteNote(note) {
    this.store.dispatch({
      type: NotesAppActions.DELETE_NOTE
    });
  }

  searchNotes() {
    // console.log("searchKey", this.searchKey);
    this.store.dispatch({
      type: NotesAppActions.SEARCH_NOTES,
      payload: {
        keyword: this.searchKey
      }
    })
  }

}
