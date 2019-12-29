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

    // console.log("aftr upadte what is in note", note);

    this.store.dispatch({
      type: NotesAppActions.SET_ACTIVE_INDEX, 
      payload: {
                id: note.id
      }
    });
  }

  sideBarOpen: any = false;

  openNav() {
    this.sideBarOpen = false;
    event.preventDefault();
    document.getElementById("notes-sidebar").style.width = "inherit";
    document.getElementById("notes-list-e").style.marginLeft = "inherit";
  }

  closeNav(event) {
    this.sideBarOpen = true;
    event.preventDefault();
    document.getElementById("notes-sidebar").style.width = "0";
    document.getElementById("notes-list-e").style.marginLeft= "0";
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
