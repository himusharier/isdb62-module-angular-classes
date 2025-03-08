import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuestionPaperComponent } from "./question-paper/question-paper.component";

@Component({
  selector: 'app-root',
  imports: [QuestionPaperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-question-paper';
}
