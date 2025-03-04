import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (this.authService.register({ username: this.username, password: this.password })) {
      this.message = 'Registration successful! Please login.';
      this.router.navigate(['/login']);
    }
  }
}
