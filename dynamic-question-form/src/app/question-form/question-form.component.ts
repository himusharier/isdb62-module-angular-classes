import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  questions: { text: string; options: string[] }[] = [];
  newQuestion = { text: '', options: [''] };

  constructor() {}

  ngOnInit() {
    this.loadFromLocalStorage();
  }

  addOption() {
    this.newQuestion.options.push('');
  }

  removeOption(index: number) {
    if (this.newQuestion.options.length > 1) {
      this.newQuestion.options.splice(index, 1);
    }
  }

  updateOption(index: number, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.newQuestion.options[index] = inputElement.value;
  }

  addQuestion() {
    if (this.newQuestion.text.trim()) {
      this.questions.push({ text: this.newQuestion.text, options: [...this.newQuestion.options] });
      this.saveToLocalStorage();
      this.newQuestion = { text: '', options: [''] };
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('questions', JSON.stringify(this.questions));
  }

  loadFromLocalStorage() {
    const storedData = localStorage.getItem('questions');
    if (storedData) {
      this.questions = JSON.parse(storedData);
    }
  }
}
