import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz-form-two',
  imports: [FormsModule, CommonModule],
  templateUrl: './quiz-form-two.component.html',
  styleUrl: './quiz-form-two.component.css'
})
export class QuizFormTwoComponent implements OnInit {
  // Fields for question, options, and correct answer
  questionText: string = '';
  modelOptions: string[] = ['', '', '', '']; // Temporary array for binding input fields
  options: string[] = ['', '', '', '']; // Actual options array to be saved
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
    if (!this.questionText || this.modelOptions.some(option => !option) || !this.correctAnswer) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // Sync modelOptions to options array
    this.updateOptions();

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

  // Method to update the options array from modelOptions
  updateOptions() {
    this.options = [...this.modelOptions];
  }

  // Method to reset the form fields
  resetForm() {
    this.questionText = '';
    this.modelOptions = ['', '', '', ''];
    this.correctAnswer = '';
  }
}