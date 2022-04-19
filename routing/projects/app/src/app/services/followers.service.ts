import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';

@Injectable({
  providedIn: 'root'
})
export class FollowersService {

  private base_url: string = "https://api.github.com"

  constructor(private http: HttpClient) { }

  getFollowersOf(user: string) {
    return this.http.get(`${this.base_url}/users/${user}/followers`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
    if (error.status === 404)
      return throwError(new NotFoundError());

    return throwError(new AppError(error));

  }
}
