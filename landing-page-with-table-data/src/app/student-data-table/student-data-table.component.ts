import { Component } from '@angular/core';

@Component({
  selector: 'app-student-data-table',
  imports: [],
  templateUrl: './student-data-table.component.html',
  styleUrl: './student-data-table.component.css'
})
export class StudentDataTableComponent {
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
