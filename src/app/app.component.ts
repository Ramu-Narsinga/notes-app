import { Component, OnInit } from '@angular/core';

// import store and reducers
import {
  Store,
  reducer,
  initState,
} from '../utils/store';

import {
  AppState
} from '../utils/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'notes-app';
  ngOnInit() {
    
    let store = new Store<AppState>(reducer, initState);
    console.log(store.getState());
    
    // subscribe
    let unsubscribe = store.subscribe(() => {
      console.log('subscribed: ', store.getState());
    });
    
    store.dispatch({ 
      type: 'ADD_NOTE', 
      payload: {
        id: 1,
        title: "note 1",
        timeStamp: "Tuesday",
        description: "note 1 description"
      }});
    
    unsubscribe();
  }
}
