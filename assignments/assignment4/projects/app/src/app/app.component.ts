import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  post = {
    userLiked: Math.round((Math.random() * 10)) % 2 == 0? true : false,
    likeCount: Math.round((Math.random() * 100))
  }
  eventMessage = "";

  onLikeEvent(message) {
    this.eventMessage = message;
  }
}
