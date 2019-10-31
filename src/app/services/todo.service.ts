import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];

  constructor() { }

  // for now we are hard-coding this data
  getTodos() {
    this.todos = [
      {
        id: 1,
        title: 'Todo One',
        completed: false,
      },
      {
        id: 2,
        title: 'Todo Two',
        completed: true,
      },
      {
        id: 3,
        title: 'Todo Three',
        completed: false,
      },
      {
        id: 4,
        title: 'Todo Four',
        completed: true,
      }
    ];
    return this.todos;
  }
  
}


