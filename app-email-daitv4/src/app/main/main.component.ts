import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public username: string;
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.checkLogin();
  }

  checkLogin() {
    const username = localStorage.getItem('UsernameLogin');
    if (username == null) {
      this.router.navigate(['/login']);
    }
    this.username = username;
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
