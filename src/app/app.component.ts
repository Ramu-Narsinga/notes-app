import { Component, OnInit } from '@angular/core';

// import store and reducers
import {
  // Store,
  reducer,
  // initState,
} from '../utils/store';

import {
  AppState
} from '../utils/interfaces';

import {
  Store,
  createStore
} from 'redux';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'notes-app';
  ngOnInit() {
  }
}
