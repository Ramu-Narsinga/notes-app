import { InjectionToken } from '@angular/core';

import { Action, Reducer, ListenerCallback, UnsubscribeCallback, AppState } from '../interfaces';

import { createStore } from 'redux';

import { reducer } from '../store/reducers';

class Store<T> {
    private _state: T;
    private _listeners: ListenerCallback[] = [];

    constructor(
      private reducer: Reducer<T>,
      initialState: T
    ) {
      this._state = initialState;
    }
   
    getState(): T {
      return this._state;
    }
   
    dispatch(action: Action): void {
      this._state = this.reducer(this._state, action);
      this._listeners.forEach((listener: ListenerCallback) => listener());
    }

    subscribe(listener: ListenerCallback): UnsubscribeCallback {
        this._listeners.push(listener);
        return () => { // returns an "unsubscribe" function
          this._listeners = this._listeners.filter(l => l !== listener);
        };
    }
}

export const AppStore = new InjectionToken('App.store');

export function createAppStore(): Store<AppState> {
  return createStore<AppState, any, any, any>(
    reducer
  );
}
 
export const appStoreProviders = [
   { provide: AppStore, useFactory: createAppStore }
];

export { 
    Store
}
export * from './actions';
export * from './reducers';
export * from './initial-state';