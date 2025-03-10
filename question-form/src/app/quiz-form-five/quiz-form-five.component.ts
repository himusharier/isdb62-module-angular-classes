import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz-form-five',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './quiz-form-five.component.html',
  styleUrl: './quiz-form-five.component.css'
})
export class QuizFormFiveComponent implements OnInit {
  questionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form with a question and options
    this.questionForm = this.fb.group({
      question: ['', Validators.required],
      options: this.fb.array([this.createOption()]), // Start with one option
      correctAnswer: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  // Create a new option form control
  createOption(): FormGroup {
    return this.fb.group({
      optionText: ['', Validators.required] // Create the form control for option text
    });
  }

  // Get the form array of options
  get options(): FormArray {
    return this.questionForm.get('options') as FormArray;
  }

  // Add a new option
  addOption(): void {
    this.options.push(this.createOption());
  }

  // Remove an option
  removeOption(index: number): void {
    if (this.options.length > 1) {
      this.options.removeAt(index);
    }
  }

  // Submit the form
  onSubmit(): void {

    if (this.questionForm.valid) {
      const formData = this.questionForm.value;

      interface Option {
        optionText: string;
      }
      // Create the new question object to store
      const newQuestion = {
        question: formData.question,
        options: formData.options.map((opt: Option) => opt.optionText), // Using Option interface
        correctAnswer: formData.correctAnswer
      };      

      // Get existing questions from localStorage, or create an empty array if not available
      let questions = JSON.parse(localStorage.getItem('questions') || '[]');

      // Add the new question to the list
      questions.push(newQuestion);

      // Store updated questions in localStorage
      localStorage.setItem('questions', JSON.stringify(questions));

      // Log the created question for demonstration
      console.log('New Question:', newQuestion);

      // Reset the form after submission
      this.questionForm.reset();
      this.options.clear(); // Clear options
      this.addOption(); // Add one option back after reset
    } else {
      console.error("Form is invalid.");
    }
  }
  
}
