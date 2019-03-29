import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[];
  constructor(
    private http: HttpClient
  ) { 
    this.getAllUser();
  }

  getAllUser() {
    return this.http.get<User[]>('assets/api/user.json').pipe(tap(x =>  x)).subscribe(users => this.users = users);
  }

  login(username: string, password: string): User {
    let userLogin: User = null;
    this.users.forEach(user => {
      if (user.username === username && user.password === password) {
        localStorage.setItem('UsernameLogin', user.username);
        userLogin = user;
      }
    });
    return userLogin;
  }

  logout() {
    localStorage.clear();
  }
}
