import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { IUser } from '../_models/iuser';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseURL = 'https://localhost:5001/api/';
  private currentUserSource = new ReplaySubject<IUser>(1);
  currentUser = this.currentUserSource.asObservable();

  constructor(private _http: HttpClient) { }

  login(model: any) {
    return this._http.post(this.baseURL + 'account/login', model)
      .pipe(
        map((response: IUser) => {
          const user = response;

          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUserSource.next(user);
          }
        })
      );
  }

  register(model: any){
    return this._http.post(this.baseURL + 'account/register', model)
    .pipe(
      map((user: IUser) => {
        if (user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
        return user;
      })
    );
  }

  setCurrentUser(user: IUser){
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
