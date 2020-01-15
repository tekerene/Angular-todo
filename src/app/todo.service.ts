import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from './todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  base_url: string = 'http://localhost:3000';
  todos = [];
  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]>{
    console.log('getting all todos from the server');
    return this.http.get<Todo[]>(`${this.base_url}/todos`);
  }

  getTodo(_id: string): Observable<Todo>{
    return this.http.get<Todo>(`${this.base_url}/todos/${_id}`);
  }

  addTodo(newTodo:Todo): Observable<Todo>{
    return this.http.post<Todo>(`${this.base_url}/todos`, newTodo, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  updateTodo(editedTodo:Todo): Observable<Todo>{
    return this.http.put<Todo>(`${this.base_url}/todos/${editedTodo._id}`, editedTodo, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  deleteTodo(_id:string): Observable<Todo>{
    return this.http.delete<Todo>(`${this.base_url}/todos/${_id}`);
  }
}
