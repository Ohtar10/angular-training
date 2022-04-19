import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppError } from '../../common/app-error';
import { NotFoundError } from '../../common/not-found-error';
import { FollowersService } from '../../services/followers.service';
import { Observable } from 'rxjs';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit{

  followers: any[];
  user: string = "";

  constructor(
    private route: ActivatedRoute,
    private service: FollowersService
    ) { }

  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).subscribe(combined => {
        let page = combined[1].get('page');
        let order = combined[1].get('order');
        console.log(`Page #${page}, order '${order}'`);
    });
  }

  showFollowers(form): void {
    this.service.getFollowersOf(form.user)
    .subscribe(
      response => {
        this.followers = response as any[];
      }, (errror: AppError) => {
        if (errror instanceof NotFoundError) {
          alert(`The user '${form.user}' was not found`);
        }
      }
    )
  }
}
