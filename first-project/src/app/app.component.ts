import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { GradeSystemComponent } from './grade-system/grade-system.component';
import { StudentDataTableComponent } from './student-data-table/student-data-table.component';

@Component({
  selector: 'app-root',
  imports: [/*RouterOutlet,*/ GradeSystemComponent, StudentDataTableComponent],
  //templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    <app-grade-system></app-grade-system>
    <br><br><br>
    <app-student-data-table></app-student-data-table>
  `
})
export class AppComponent {
  title = 'Sharier Himu';

}
