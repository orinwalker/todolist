import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  // input properties
  @Input() todo: Todo;

  constructor() { 
  }

  ngOnInit() {
  }

  onToggle(todo) {
    console.log('toggle called');
  }

  onDelete(todo) {
    console.log('delete called');
  }

}
