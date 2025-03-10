import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz-form-six',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './quiz-form-six.component.html',
  styleUrl: './quiz-form-six.component.css'
})
export class QuizFormSixComponent implements OnInit {
  
  questionForm!: FormGroup;
  questions: any[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form
    this.questionForm = this.fb.group({
      question: ['', Validators.required],
      options: this.fb.array([this.createOption()]),  // Dynamic options array
      correctAnswer: ['', Validators.required]
    });

    // Load saved questions from localStorage if available
    const savedQuestions = localStorage.getItem('questions');
    if (savedQuestions) {
      this.questions = JSON.parse(savedQuestions);
    }
  }

  // Getter for options form array
  get options() {
    return (this.questionForm.get('options') as FormArray);
  }

  // Function to create an option form control
  createOption(): FormGroup {
    return this.fb.group({
      optionText: ['', Validators.required]
    });
  }

  // Add a new option
  addOption() {
    this.options.push(this.createOption());
  }

  // Remove an option
  removeOption(index: number) {
    this.options.removeAt(index);
  }

  // Submit the form and save the question
  onSubmit(): void {
    if (this.questionForm.invalid) {
      return;
    }

    const formData = this.questionForm.value;

    // Create a new question object
    const newQuestion = {
      question: formData.question,
      options: formData.options.map((opt: { optionText: string }) => opt.optionText),
      correctAnswer: formData.correctAnswer
    };

    // Add the new question to the list
    this.questions.push(newQuestion);

    // Save to localStorage
    localStorage.setItem('questions', JSON.stringify(this.questions));

    // Reset the form
    this.questionForm.reset();
    this.options.clear();
    this.addOption();
  }

}
