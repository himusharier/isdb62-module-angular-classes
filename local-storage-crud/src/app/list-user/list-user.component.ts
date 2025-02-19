import { Component, OnInit } from '@angular/core';
import { User } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  imports: [],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit {
  users: User[] = [];

  constructor(private router: Router) {} // dependency injection

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
  }

  updateUser(user: User) {
    this.router.navigate(['/user'], {state: { user }});
  }

  deleteUser(singleUser: User) {
    if (confirm('Delete this user?')) {
      this.users = this.users.filter(x => x !== singleUser);
      localStorage.setItem('users', JSON.stringify(this.users))
    }
  }

}
