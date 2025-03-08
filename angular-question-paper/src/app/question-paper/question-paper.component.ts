import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionFormComponent } from '../question-form/question-form.component';
import { QuestionListComponent } from '../question-list/question-list.component';

@Component({
  selector: 'app-question-paper',
  standalone: true,
  imports: [CommonModule, QuestionFormComponent, QuestionListComponent],
  template: `
    <div class="container">
      <h2>Question Paper</h2>
      <app-question-form></app-question-form>
      <app-question-list></app-question-list>
    </div>
  `,
  styles: [`
    .container {
      width: 50%;
      margin: auto;
      text-align: center;
    }
  `]
})
export class QuestionPaperComponent {}
