import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { TodoService } from '../todo.service';
import { Todo } from './../todo.interface';



@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddtaskComponent>,private myData: TodoService
  ){}

  todos = [];

    ngOnInit() {
        this.myData.getTodos()
        .subscribe(
          (data: Todo[]) =>  this.todos = data,
          (error: any)   => console.log(error),
          ()             => console.log('all todos gets')
        );
    }

    onCancel(): void {
      this.dialogRef.close();
    }
    
    onSave(formData: any){
      let newTodo: any = { title: formData.title, description: formData.description };
      this.myData.addTodo(newTodo);
      
      
        
      this.dialogRef.close();
    }
      result = this.todos.push(this.newTodo);
     
}
