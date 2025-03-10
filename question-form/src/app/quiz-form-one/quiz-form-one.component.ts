import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz-form-one',
  imports: [FormsModule, CommonModule],
  templateUrl: './quiz-form-one.component.html',
  styleUrl: './quiz-form-one.component.css'
})
export class QuizFormOneComponent implements OnInit {
  // Fields for question, options, and correct answer
  questionText: string = '';
  options: string[] = ['', '', '', '']; // Four options
  correctAnswer: string = '';

  // Array to hold saved questions
  savedQuestions: any[] = [];

  // ngOnInit lifecycle hook to load questions from localStorage if any
  ngOnInit(): void {
    const storedQuestions = localStorage.getItem('questions');
    if (storedQuestions) {
      this.savedQuestions = JSON.parse(storedQuestions);
    }
  }

  // Method to save the new question to localStorage
  saveQuestion() {
    if (!this.questionText || this.options.some(option => !option) || !this.correctAnswer) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const newQuestion = {
      question: this.questionText,
      options: this.options,
      correctAnswer: this.correctAnswer
    };

    this.savedQuestions.push(newQuestion);

    // Save the updated list of questions to localStorage
    localStorage.setItem('questions', JSON.stringify(this.savedQuestions));

    // Reset the form
    this.resetForm();
  }

  // Method to reset the form fields
  resetForm() {
    this.questionText = '';
    this.options = ['', '', '', ''];
    this.correctAnswer = '';
  }
}