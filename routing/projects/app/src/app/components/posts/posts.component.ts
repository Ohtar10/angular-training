import { Component, OnInit } from '@angular/core';
import { AppError } from '../../common/app-error';
import { BadInput } from '../../common/bad-input';
import { NotFoundError } from '../../common/not-found-error';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];

  constructor(private service: PostService) { 
    
  }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(
        response => {
          this.posts = response as any[]; 
      // }, --> this is no longer needed here thanks to the AppErrorHandler 
      //   error => {
      //   alert('An unexpected error occurred.');
      //   console.log(error);
      // });
    });
  }

  createPost(input: HTMLInputElement): void {
    let post = {title: input.value};
    input.value = "";
    this.service.create(post)
      .subscribe(
        response => {
        post['id'] = response['id'];
        this.posts.splice(0, 0, post);
        console.log(post);
      },
        (error: AppError) => {
          if (error instanceof BadInput) {
            alert(`Error creating post: ${error.originalError}`);
          }
          else throw error; //Rethrow if not expected to let AppErrorHandler to handle it
        });
    
  }

  updatePost(post) {
    this.service.update(post)
    .subscribe(response => {
      console.log(response);
    });
  }

  deletePost(post) {
    this.service.delete(post.id)
    .subscribe(
      response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    },
      (error: AppError) => {
        if (error instanceof NotFoundError)
          alert("This post has already been deleted");
        else throw error;
      });
  }

}
