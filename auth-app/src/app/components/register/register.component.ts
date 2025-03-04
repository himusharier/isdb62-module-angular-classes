import { Component, NgModule } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [FormsModule, CommonModule]
})
export class RegisterComponent {
  email = '';
  password = '';
  message = '';

  constructor(private authService: AuthService) {}

  onRegister() {
    const result = this.authService.register(this.email, this.password);
    this.message = result.message;
  }
}
