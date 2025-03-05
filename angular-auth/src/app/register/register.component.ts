import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule, CommonModule]
})
export class RegisterComponent {
  username = '';
  password = '';
  message = '';
  isError = false;

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    const success = this.authService.register({ username: this.username, password: this.password });

    if (success) {
      this.message = 'Registration successful! Please login.';
      this.isError = false;
      setTimeout(() => this.router.navigate(['/login']), 2000); // Redirect to login after 2s
    } else {
      this.message = 'User already exists. Try a different username.';
      this.isError = true;
    }
  }
}
