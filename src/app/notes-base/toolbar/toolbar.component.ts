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

  constructor(@Inject(AppStore) private store: Store<AppState>) { }

  ngOnInit() {
  }

  addNote() {
    this.store.dispatch({
      type: NotesAppActions.ADD_NOTE, 
      payload: {
                  title: 'note 3', 
                  description: 'note3 description', 
                  timeStamp: 'Monday'
                }
    });
  }

}
