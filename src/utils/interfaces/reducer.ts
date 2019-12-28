import { Action } from './index';

export  interface Reducer<T> {
    (state: T, action: Action): T;
}