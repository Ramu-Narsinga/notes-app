import { Component, OnInit, Inject } from '@angular/core';

import { Store } from 'redux';

import { AppStore } from '../../../utils/store';

import { AppState, Note } from '../../../utils/interfaces';

import * as NotesAppActions from '../../../utils/store/actions';

import { NotesAppService } from '../../../utils/services/notes-app.service';
import { debug } from 'util';

import { setInitState } from '../../../utils/store/initial-state';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  note: Note;

  constructor(@Inject(AppStore) private store: Store<AppState>,
              private notesAppService: NotesAppService) { 

    this.setActiveNote();

    store.subscribe(() => {
      // console.log("detecting active index update, in toolbar component", this.store.getState());
      this.setActiveNote();
    });
  }

  activeIndex: any;
  notes: any = {
    title: "",
    description: "",
    timeStamp: ""
  };

  setActiveNote() {

    let {
      notes,
      activeIndex
    } = this.store.getState();

    this.activeIndex = activeIndex;

    this.notes = notes;

    if (!notes[activeIndex]) {
      this.note = {
        title: "",
        description: "",
        timeStamp: ""
      }
    } else {
      this.note = notes[activeIndex];
      this.note.id = activeIndex;
    }
  }

  onNoteChange(event) {

    // console.log("entered text", event);

    let {
      title,
      description, 
      id
    } = this.note;

    if (event.target.name == "title") {
      title = event.target.value;
    } else {
      description = event.target.value;
    }

    let payload= {
      note: {
        id,
        title: title,
        description: description,
        timeStamp: Date.now(),
      }
    };

    this.store.dispatch({
      type: NotesAppActions.UPDATE_NOTE, 
      payload
    });

    this.notesAppService.updateNotes();
    
    setInitState(this.store.getState());
  }

  ngOnInit() {
  }

  formatTSDate(dateInMs) {
    if (dateInMs) {
      let d = new Date(dateInMs);
      return d.toString().split("GMT")[0]; 
    } else {
      return "";
    }
  }
}
