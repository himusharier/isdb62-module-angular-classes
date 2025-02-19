import { Component, OnInit } from '@angular/core';
import { User } from '../app.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  user: User = new User('', 0, '', '');
  isUpdate = false;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state && nav.extras.state['user']) {
      this.user = nav.extras.state['user'];
      this.isUpdate = true;
    }
  }

  ngOnInit(): void {
    /*console.log('create user component');

    localStorage.setItem('name', 'john');
    localStorage.setItem('age', '25');
    localStorage.setItem('phone', '123456789');
    localStorage.setItem('address', 'dhaka, bangladesh');*/
  }

  onSubmit() {
    //getting previous localstorage data.
    let users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    if (this.isUpdate) {
      users = users.map(x => (x.phone == this.user.phone ? this.user : x));

    } else {
      users.push(this.user);
    }

    //add new data.
    users.push(this.user);

    //set localstorage along with new data.
    localStorage.setItem('users', JSON.stringify(users));

    //reset form.
    this.user = new User('', 0, '', '');

    //success message.
    //alert('User added successfully');

    // window.location.href = '/list-user';
    this.router.navigate(['/list']);
  }

}

