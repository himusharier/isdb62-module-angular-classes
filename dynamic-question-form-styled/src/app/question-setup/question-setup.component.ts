import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question-setup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './question-setup.component.html',
  styleUrls: ['./question-setup.component.css']
})
export class QuestionSetupComponent implements OnInit {
  questions: { text: string; options: string[] }[] = [];
  newQuestion = { text: '', options: [''] };

  constructor() {}

  ngOnInit() {
    this.loadFromLocalStorage();
  }

  addOption() {
    this.newQuestion.options = [...this.newQuestion.options, ''];
  }

  removeOption(index: number) {
    if (this.newQuestion.options.length > 1) {
      this.newQuestion.options = this.newQuestion.options.filter((_, i) => i !== index);
    }
  }

  updateOption(index: number, value: string) {
    this.newQuestion.options = this.newQuestion.options.map((opt, i) => (i === index ? value : opt));
  }

  addQuestion() {
    if (this.newQuestion.text.trim()) {
      this.questions = [...this.questions, { text: this.newQuestion.text, options: [...this.newQuestion.options] }];
      this.newQuestion = { text: '', options: [''] };
      this.saveToLocalStorage();
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