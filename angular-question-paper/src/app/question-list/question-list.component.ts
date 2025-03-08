import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Saved Questions</h3>
    <div *ngFor="let question of questions(); let i = index" class="question-box">
      <p><strong>Q{{i + 1}}: </strong>{{question.text}}</p>
      <ul>
        <li *ngFor="let option of question.options">{{option}}</li>
      </ul>
      <p><strong>Answer:</strong> {{question.answer}}</p>
    </div>
    <button (click)="clearQuestions()">Clear Questions</button>
  `,
  styles: [`
    .question-box {
      border: 1px solid #ddd;
      padding: 10px;
      margin: 10px 0;
    }
    button {
      margin-top: 10px;
      padding: 5px 10px;
      cursor: pointer;
    }
  `]
})
export class QuestionListComponent {
  private questionService = inject(QuestionService);
  questions = this.questionService.getQuestions();

  clearQuestions() {
    this.questionService.clearQuestions();
  }
}
