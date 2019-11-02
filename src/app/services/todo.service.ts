import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Todo } from '../models/todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  todos: Todo[];
  todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=7';

  constructor(private http: HttpClient) {
  }

  // get todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    console.log(`calling delete for ${url}`);
    return this.http.delete<Todo>(url, httpOptions);
  }

  // add todo
  addTodo(todo: Todo): Observable<Todo> {
    console.log('calling post to add a todo item');
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }

  // toggle completed
  // Json Placeholder will not actually persist the data, but we do get back a true/false based on the toggle
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    console.log(`calling put for ${url}`);
    return this.http.put(url, todo, httpOptions);
  }

}


