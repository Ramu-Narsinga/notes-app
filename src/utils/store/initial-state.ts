import { AppState } from '../interfaces';

export const initState: AppState = {
    notes: [
        {
            id: 0,
            title: "note 1",
            timeStamp: 1077612485900,
            description: "note 1 description"
          },
          {
            id: 1,
            title: "note 2",
            timeStamp: 1577112465100,
            description: "note 2 description"
          },
          {
            id: 2,
            title: "note 3",
            timeStamp: 1577612485900,
            description: "note 3 description"
          }
    ],
    activeIndex: 0
}

// {
//     id: 1,
//     title: "notes 1",
//     timeStamp: "Saturday",
//     description: ""
// }