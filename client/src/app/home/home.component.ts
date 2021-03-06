import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: any;
  registerMode = false;

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  getUsers() {
    this._http.get('https://localhost:5001/api/users').subscribe(users => this.users = users);
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}
