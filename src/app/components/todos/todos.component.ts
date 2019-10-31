import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {

    // delete in UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // delete from server
    this.todoService.deleteTodo(todo).subscribe();
  }
}
