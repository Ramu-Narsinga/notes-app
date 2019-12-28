import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  notesList: any = [
    {
      title: 'note 1',
      description: 'note 1 description',
      id: 0,
      timeStamp: "Monday"
    },
    {
      title: 'note 2',
      description: 'note 2 description',
      id: 0,
      timeStamp: "Monday"
    }
  ]

}
