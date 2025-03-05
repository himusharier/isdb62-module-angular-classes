import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  private generateUserId(): string {
    return Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit random ID
  }

  register(user: { username: string; password: string }): boolean {
    let users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if user already exists
    if (users.some((u: any) => u.username === user.username)) {
      return false; // User already exists
    }

    // Assign unique 6-digit user ID
    const newUser = {
      id: this.generateUserId(),
      ...user,
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return true; // Registration successful
  }

  login(username: string, password: string): boolean {
    let users = JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find((u: any) => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem('loggedInUser');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedInUser') !== null;
  }

  getLoggedInUser(): any {
    return JSON.parse(localStorage.getItem('loggedInUser') || 'null');
  }
}
