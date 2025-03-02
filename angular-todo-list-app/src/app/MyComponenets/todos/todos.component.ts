import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: "this is title 1",
        desc: "description 1",
        active: true
      },
      {
        sno: 2,
        title: "this is title 2",
        desc: "description 2",
        active: true
      },
      {
        sno: 3,
        title: "this is title 3",
        desc: "description 3",
        active: true
      }
    ]
  }

  ngOnInit(): void {
  }


}
