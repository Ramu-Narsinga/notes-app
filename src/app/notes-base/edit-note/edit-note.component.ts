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

    if (!notes[activeIndex]) {
      this.note = {
        title: "",
        description: "",
        timeStamp: ""
      }
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

    this.store.dispatch({
      type: NotesAppActions.UPDATE_NOTE, 
      payload: {
                note: {
                  id,
                  title: title,
                  description: description,
                  timeStamp: Date.now(),
                }
      }
    });
  }

  ngOnInit() {
  }

  _MS_PER_DAY = 1000 * 60 * 60 * 24;

  // a and b are javascript Date objects
  dateDiffInDays(a, b) {
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / this._MS_PER_DAY);
  }

  dayDifference: any;
  weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  parseTSDate(dateInMs) {
    let d = new Date(dateInMs);
    let currentDate = new Date();
    // show week day name if it is in past and falls with in a week
    this.dayDifference = this.dateDiffInDays(d, currentDate);
    // console.log("this.dayDifference", this.dayDifference);
    if ( this.dayDifference > 1 && this.dayDifference <= 7 ) {
      return  this.weekDays[d.getDay()]
    } else if (this.dayDifference > 7) {
      return d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear();
    } else {
      // current Date
      return d.toLocaleTimeString();
    }
  }
}
