
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {from, firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
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

  getTodosPromise(): Promise<Object> {
    if (this.http)
      // return this.http.get('...').map(r => r.json()).toPromise();
      return firstValueFrom(this.http.get('...'));
    return Promise.resolve([]);
  }

  delete(id: any) {
    if (this.http)
      return this.http.delete('...');
    return from([]);
  }
}

