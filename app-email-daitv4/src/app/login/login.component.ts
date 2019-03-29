import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username = '';
  public password = '123456';
  public errorLogin = '';
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.checkLogin();
  }

  login() {
    let user: User = this.userService.login(this.username, this.password);
    if (user == null) {
      this.errorLogin = 'Invalid username or password';
      this.username = '';
      this.password = '';
    } else {
      this.router.navigate(['/email/mymessage/inbox']);
      //location.href = '/email/mymessage/inbox';
    }
  }

  checkLogin() {
    const username = localStorage.getItem('UsernameLogin');
    if (username !== null) {
      this.router.navigateByUrl('/email/mymessage/inbox');
    }
  }

}
