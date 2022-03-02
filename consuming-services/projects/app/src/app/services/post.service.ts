import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post)).pipe(
      catchError((error: Response) => {
        if (error.status === 400)
          return throwError(new BadInput(error.json()));

        return throwError(new AppError(error.json()));
      })
    );
  }

  updatePost(post) {
    //patch if only a small portion of the element is going to be updated
    //and the API supports it
    return this.http.patch(`${this.url}/${post.id}` , JSON.stringify({isRead: true}));
    //post if we want to send the complete object to the server
    //return  this.http.put(`${this.url}/${post.id}`, JSON.stringify(post))
  }

  deletePost(id) {
    return this.http.delete(`${this.url}/${id}`).pipe(
      catchError((error: Response) => {
        if (error.status === 404)
          return throwError(new NotFoundError());

        return throwError(new AppError(error));
      })
    );
  }
}
