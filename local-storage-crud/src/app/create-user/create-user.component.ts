import { Component, OnInit } from '@angular/core';
import { User } from '../app.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent implements OnInit {
  user: User = new User('', 0, '', '');

  ngOnInit(): void {
    /*console.log('create user component');

    localStorage.setItem('name', 'john');
    localStorage.setItem('age', '25');
    localStorage.setItem('phone', '123456789');
    localStorage.setItem('address', 'dhaka, bangladesh');*/
  }

  onSubmit() {
    //getting previous localstorage data.
    let users = JSON.parse(localStorage.getItem('users') || '[]');

    //add new data.
    users.push(this.user);

    //set localstorage along with new data.
    localStorage.setItem('users', JSON.stringify(users));

    //reset form.
    this.user = new User('', 0, '', '');

    //success message.
    //alert('User added successfully');

    window.location.href = '/list';
  }

}
