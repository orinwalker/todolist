import { TodoService } from './../../services/todo.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  // input properties
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  
  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
  }

  onToggle(todo) {
    // toggle in UI
    todo.completed = !todo.completed;

    // toggle on Server
    this.todoService.toggleCompleted(todo).subscribe(todo =>
      console.log(todo));
  }


  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }

}
