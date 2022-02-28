import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  private url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private service: PostService) { 
    
  }

  ngOnInit(): void {
    this.service.getPosts()
      .subscribe(response => {
          this.posts = response as any[]; 
      });
  }

  createPost(input: HTMLInputElement): void {
    let post = {title: input.value};
    input.value = "";
    this.service.createPost(post)
      .subscribe(response => {
        post['id'] = response['id'];
        this.posts.splice(0, 0, post);
        console.log(post);
      });
    
  }

  updatePost(post) {
    this.service.updatePost(post)
    .subscribe(response => {
      console.log(response);
    });
  }

  deletePost(post) {
    this.service.deletePost(post.id)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }

}
