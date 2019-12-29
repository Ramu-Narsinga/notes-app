import { Component, OnInit, Inject } from '@angular/core';

import { NotesAppService } from '../../utils/services/notes-app.service';

import { Store } from 'redux';

import { AppStore } from '../../utils/store';

import { AppState, Note } from '../../utils/interfaces';

import * as NotesAppActions from '../../utils/store/actions';

import { setInitState } from '../../utils/store/initial-state';

@Component({
  selector: 'app-notes-base',
  templateUrl: './notes-base.component.html',
  styleUrls: ['./notes-base.component.scss']
})
export class NotesBaseComponent implements OnInit {

  constructor(
    @Inject(AppStore) private store: Store<AppState>,
    private notesAppService: NotesAppService
  ) { }

  ngOnInit() {
    let payload = this.notesAppService.getNotesAppData();
    this.store.dispatch({
      type: NotesAppActions.INIT_APP_DATA, 
      payload
    });
    setInitState(this.store.getState());
  }

}
