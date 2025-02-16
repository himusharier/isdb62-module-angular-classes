import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { GradeSystemComponent } from './grade-system/grade-system.component';
import { StudentDataTableComponent } from './student-data-table/student-data-table.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  imports: [/*RouterOutlet,*/ GradeSystemComponent, StudentDataTableComponent, HeaderComponent, FooterComponent, ContentComponent],
  //templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
  <div class="container">
    <app-header></app-header>
    <app-content></app-content>
    <app-grade-system></app-grade-system>
    <br><br><br>
    <app-student-data-table></app-student-data-table>
    <app-footer></app-footer>
  </div>
  `
})
export class AppComponent {
  title = 'Sharier Himu';

}
