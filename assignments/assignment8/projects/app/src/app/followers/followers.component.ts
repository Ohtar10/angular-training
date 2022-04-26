import { Component, OnInit } from '@angular/core';
import { AppError, NotFoundError } from '../common/errors';
import { FollowersService } from '../services/followers.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent{

  followers: any[];
  user: string = "";

  constructor(private service: FollowersService) { }


  showFollowers(form): void {
    this.service.getFollowersOf(form.user)
    .subscribe(
      response => {
        this.followers = response as any[];
        console.log(this.followers);
      }, (error: AppError) => {
          if (error instanceof NotFoundError){
            alert(`The user '${form.user}' was not found`);
          }
      }
    );
  }

}
