import { Component, OnInit, Inject } from '@angular/core';

import { Store } from 'redux';

import { AppStore } from '../../../utils/store';

import { AppState, Note } from '../../../utils/interfaces';

import * as NotesAppActions from '../../../utils/store/actions';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  note: Note;

  constructor(@Inject(AppStore) private store: Store<AppState>) { 

    this.setActiveNote();

    store.subscribe(() => {
      // console.log("detecting active index update, in toolbar component", this.store.getState());
      this.setActiveNote();
    });
  }

  setActiveNote() {
    let {
      notes,
      activeIndex
    } = this.store.getState();

    this.note = notes[activeIndex];
  }

  ngOnInit() {
  }

}
