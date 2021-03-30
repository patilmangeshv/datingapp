import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _accountService: AccountService, private _toaster: ToastrService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._accountService.currentUser.pipe(
      map(user => {
        if (user) return true;

        this._toaster.error('You shall not pass!');
      })
    );
  }

}
