import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Question } from '../model/question.model';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-question-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="question-form">
      <input type="text" placeholder="Enter Question" [(ngModel)]="newQuestion.text">
      <div *ngFor="let option of newQuestion.options; let i = index">
        <input type="text" [(ngModel)]="newQuestion.options[i]" placeholder="Option {{i + 1}}">
      </div>
      <input type="text" placeholder="Enter Answer" [(ngModel)]="newQuestion.answer">
      <button (click)="addQuestion()">Add Question</button>
    </div>
  `,
  styles: [`
    .question-form input {
      display: block;
      margin: 10px auto;
      padding: 5px;
      width: 80%;
    }
  `]
})
export class QuestionFormComponent {
  newQuestion: Question = { text: '', options: ['', '', '', ''], answer: '' };
  private questionService = inject(QuestionService);

  addQuestion() {
    if (this.newQuestion.text.trim() && this.newQuestion.answer.trim()) {
      this.questionService.addQuestion({ ...this.newQuestion });
      this.newQuestion = { text: '', options: ['', '', '', ''], answer: '' };
    }
  }
}
