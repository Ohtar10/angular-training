import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent{

  @Input("user-liked") userLiked: boolean = false;
  @Input("like-count") likeCount: number = 0;
  @Output("like") likeEvent: EventEmitter<string> = new EventEmitter<string>();

  onLike() {
    this.userLiked = !this.userLiked;
    if (this.userLiked) {
      this.likeCount += 1;
      this.emitEvent("liked")
    } else {
      this.emitEvent("unliked")
      this.likeCount -= 1;
    }
  }

  private emitEvent(eventName: string) {
    let message = `You ${eventName} this content`
    this.likeEvent.emit(message);
  }
}
