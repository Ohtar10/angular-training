
import { HttpClient } from '@angular/common/http';
import {from} from 'rxjs';

export class TodoService { 
  constructor(private http?: HttpClient) { 
  }

  add(todo: any) {
    if (this.http)
      return this.http.post('...', JSON.stringify(todo));
    return from([]);
  }

  getTodos() { 
    if (this.http)
      return this.http.get('...');
    return from([]);
  }

  delete(id: any) {
    if (this.http)
      return this.http.delete('...');
    return from([]);
  }
}