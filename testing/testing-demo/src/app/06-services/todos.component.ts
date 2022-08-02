
import { Component } from '@angular/core';
import { TodoService } from './todo.service'

@Component({
  selector: 'app-totos',
  template: './todos.component.html'
})
export class TodosComponent { 
  todos: any[] = [];
  message: any; 

  constructor(private service: TodoService) {}

  ngOnInit() { 
    this.service.getTodos().subscribe(t => this.todos = t as any[]);
  }

  add() { 
    var newTodo = { title: '... ' };
    this.service.add(newTodo).subscribe(
      t => this.todos.push(t),
      err => this.message = err);
  }

  delete(id: any) {
    if (confirm('Are you sure?'))
      this.service.delete(id).subscribe();
  }  
}
