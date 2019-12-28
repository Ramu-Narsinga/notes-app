import { AppState } from '../interfaces';

export const initState: AppState = {
    notes: [
        {
            id: 0,
            title: "note 1",
            timeStamp: "Tuesday",
            description: "note 1 description"
          },
          {
            id: 1,
            title: "note 2",
            timeStamp: "Tuesday",
            description: "note 2 description"
          }
    ]
}

// {
//     id: 1,
//     title: "notes 1",
//     timeStamp: "Saturday",
//     description: ""
// }