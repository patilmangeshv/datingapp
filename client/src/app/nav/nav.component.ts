import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { IUser } from '../_models/iuser';

import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService, private _router: Router, private _toaster: ToastrService) { }

  ngOnInit() {
  }

  login() {
    this.accountService.login(this.model)
      .subscribe(response => {
        this._router.navigate(['members']);
        console.log(response);
      });
  }

  logout() {
    this._router.navigate(['/']);
    this.accountService.logout();
  }
}
