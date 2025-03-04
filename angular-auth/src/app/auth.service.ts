import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  register(user: { username: string; password: string }) {
    localStorage.setItem(user.username, JSON.stringify(user));
    return true;
  }

  login(username: string, password: string): boolean {
    const user = localStorage.getItem(username);
    if (user) {
      const parsedUser = JSON.parse(user);
      if (parsedUser.password === password) {
        localStorage.setItem('loggedInUser', username);
        return true;
      }
    }
    return false;
  }

  logout() {
    localStorage.removeItem('loggedInUser');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedInUser') !== null;
  }
}
