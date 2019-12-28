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
    
    // store.dispatch({ 
    //   type: 'ADD_NOTE', 
    //   payload: {
    //     title: "note 3",
    //     timeStamp: "Tuesday",
    //     description: "note 1 description"
    //   }});

    // store.dispatch({ 
    //   type: 'ADD_NOTE', 
    //   payload: {
    //     title: "note 4",
    //     timeStamp: "Monday",
    //     description: "note 2 description"
    //   }});

    // store.dispatch({ 
    //   type: 'SEARCH_NOTES', 
    //   payload: {
    //     keyword: "note 2"
    // }});

    // store.dispatch({ 
    //   type: 'SEARCH_NOTES', 
    //   payload: {
    //     keyword: ""
    // }});

    // store.dispatch({ 
    //   type: 'SEARCH_NOTES', 
    //   payload: {
    //     keyword: "note 1"
    // }});

    store.dispatch({ 
      type: 'DELETE_NOTE', 
      payload: {
        id: 0
    }});
    
    store.dispatch({ 
      type: 'DELETE_NOTE', 
      payload: {
        id: 4
    }});

    store.dispatch({ 
      type: 'DELETE_NOTE', 
      payload: {
        id: 2
    }});

    unsubscribe();
  }
}
