

import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  /*imports: [RouterOutlet],
  /*imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'*/
  // template: `
  //   Student Name: {{student.name}} <br/>
  //   Obtained Marks: {{student.marks}} <br/>
  //   Status:
  //     @if (student.marks >= 80) {
  //       <em>A+</em>
  //     } @else if (student.marks >= 70) {
  //       <em>A-</em>
  //     } @else if (student.marks >= 60) {
  //       <em>A</em>
  //     } @else if (student.marks >= 50) {
  //       <em>B</em>
  //     } @else {
  //       <em>F</em>
  //     }
  //     (@if (student.marks >= 50) {
  //     <i class="pass">Pass</i>
  //     } @else {
  //       <i class="fail">Fail</i>
  //     })
  // `,
  // styles: `
  // .pass {
  //   color: green;
  // }
  // .fail {
  //   color: red;
  // }
  // `,
  template: `
  <table>
    <thead>
      <tr>
        <th>profile picture</th>
        <th>name</th>
        <th>age</th>
        <th>city</th>
        <th>country</th>
      </tr>
    </thead>
    <tbody>
      @for (user of data; track user.name) {
      <tr>
        <td><img src="{{user.profile}}"></td>
        <td>{{user.name}}</td>
        <td>{{user.age}}</td>
        <td>{{user.city}}</td>
        <td>{{user.country}}</td>
      </tr>
      }
    </tbody>
  </table>
  `,
  styles: `
  img {
    width: 100px;
  }
  table {
    width: 50%;
    border-collapse: collapse;
  } 
  tr, th, td {
    border: 1px solid;
    text-align: center;
  }
  `
})
export class AppComponent {
  //title = 'Sharier Himu';
  
  // student = {
  //   name: 'rasel',
  //   marks: 80
  // }

  data = [
    {
      name: 'iqram',
      age: 25,
      city: 'narayangonj',
      country: 'bangladesh',
      // profile: 'https://placebeard.it/250/250'
      profile: 'https://eu.ui-avatars.com/api/?name=iqram'
    },
    {
      name: 'faruq',
      age: 26,
      city: 'dhaka',
      country: 'bangladesh',
      // profile: 'https://placebeard.it/250/250'
      profile: 'https://eu.ui-avatars.com/api/?name=faruq'
    },
    {
      name: 'himu',
      age: 27,
      city: 'jashore',
      country: 'bangladesh',
      // profile: 'https://placebeard.it/250/250'
      profile: 'https://eu.ui-avatars.com/api/?name=himu'
    },
    {
      name: 'rasel',
      age: 28,
      city: 'tangail',
      country: 'bangladesh',
      // profile: 'https://placebeard.it/250/250'
      profile: 'https://eu.ui-avatars.com/api/?name=rasel'
    }
  ]

}
