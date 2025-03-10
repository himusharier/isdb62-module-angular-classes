import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz-form-four',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './quiz-form-four.component.html',
  styleUrl: './quiz-form-four.component.css'
})
export class QuizFormFourComponent implements OnInit {
  questionForm: FormGroup;
  questions: any[] = []; // To store the generated questions

  constructor(private fb: FormBuilder) {
    this.questionForm = this.fb.group({
      question: ['', Validators.required],
      option1: ['', Validators.required],
      option2: ['', Validators.required],
      option3: ['', Validators.required],
      option4: ['', Validators.required],
      correctAnswer: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    // Get form values
    const newQuestion = this.questionForm.value;

    // Add the new question to the questions array
    this.questions.push({
      question: newQuestion.question,
      options: [
        newQuestion.option1,
        newQuestion.option2,
        newQuestion.option3,
        newQuestion.option4
      ],
      answer: newQuestion.correctAnswer
    });

    // Reset the form for the next question
    this.questionForm.reset();
  }
}
