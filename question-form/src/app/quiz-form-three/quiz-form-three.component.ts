import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz-form-three',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './quiz-form-three.component.html',
  styleUrl: './quiz-form-three.component.css'
})
export class QuizFormThreeComponent implements OnInit {
  // Define the quiz question bank
  qBank = [
    { id: 1, question: "What is the capital of Haryana?", 
      options: ["Yamunanagar", "Panipat", "Gurgaon", "Chandigarh"], 
      answer: "Chandigarh", selected: '', correct: false },
    { id: 2, question: "What is the capital of Punjab?", 
      options: ["Patiala", "Ludhiana", "Amritsar", "Chandigarh"],
      answer: "Chandigarh", selected: '', correct: false },
    { id: 3, question: "What is the capital of India?", 
      options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
      answer: "Delhi", selected: '', correct: false },
    { id: 4, question: "What is the capital of Uttarakhand?", 
      options: ["Roorkee", "Haridwar", "Dehradun", "Nainital"], 
      answer: "Dehradun", selected: '', correct: false },
    { id: 5, question: "What is the capital of Uttar Pradesh?",
      options: ["GB Nagar", "Lucknow", "Prayagraj", "Agra"],
      answer: "Lucknow", selected: '', correct: false }
  ];

  quizForm: FormGroup;
  score: number = 0;
  showResults: boolean = false;

  constructor(private fb: FormBuilder) {
    this.quizForm = this.fb.group({});
  }

  ngOnInit(): void {
    // Dynamically add controls for each question in the form
    this.qBank.forEach(q => {
      this.quizForm.addControl(q.id.toString(), new FormControl(''));
    });
  }

  // Submit handler to calculate the score
  onSubmit(): void {
    this.score = 0;

    this.qBank.forEach(q => {
      const controlValue = this.quizForm.get(q.id.toString())?.value;
      q.selected = controlValue;
      
      if (controlValue === q.answer) {
        q.correct = true;
        this.score++;
      } else {
        q.correct = false;
      }
    });

    this.showResults = true;
  }
}