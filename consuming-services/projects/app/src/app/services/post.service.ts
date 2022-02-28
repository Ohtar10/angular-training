import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timingSafeEqual } from 'crypto';

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
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post) {
    //patch if only a small portion of the element is going to be updated
    //and the API supports it
    return this.http.patch(`${this.url}/${post.id}` , JSON.stringify({isRead: true}));
    //post if we want to send the complete object to the server
    //return  this.http.put(`${this.url}/${post.id}`, JSON.stringify(post))
  }

  deletePost(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
