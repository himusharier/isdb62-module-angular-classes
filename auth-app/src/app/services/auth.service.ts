import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  register(email: string, password: string) {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.some((user: any) => user.email === email);
    
    if (userExists) {
      return { success: false, message: 'User already exists!' };
    }

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    return { success: true, message: 'Registration successful!' };
  }

  login(email: string, password: string) {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((user: any) => user.email === email && user.password === password);
    
    if (!user) {
      return { success: false, message: 'Invalid email or password!' };
    }

    localStorage.setItem('loggedInUser', email);
    return { success: true, message: 'Login successful!' };
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('loggedInUser') !== null;
  }
}
