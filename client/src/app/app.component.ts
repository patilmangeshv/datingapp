import { Component, OnInit } from '@angular/core';

import { AccountService } from './_services/account.service';
import { IUser } from './_models/iuser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _accountService: AccountService) { }

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: IUser = JSON.parse(localStorage.getItem('user'));
    this._accountService.setCurrentUser(user);
  }
}
