import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private quizData = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Mars',
    },
    {
      question: 'What is the largest mammal?',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Shark'],
      answer: 'Blue Whale',
    },
    {
      question: 'Who wrote "Romeo and Juliet"?',
      options: ['Charles Dickens', 'William Shakespeare', 'Mark Twain', 'Jane Austen'],
      answer: 'William Shakespeare',
    },
    {
      question: 'What is the smallest prime number?',
      options: ['1', '2', '3', '5'],
      answer: '2',
    },
  ];

  private currentQuestionIndex = 0;
  private score = 0;
  private timeLeft = 10;

  constructor() {
    this.loadProgress();
  }

  getQuizData() {
    return this.quizData;
  }

  getCurrentQuestion() {
    return this.quizData[this.currentQuestionIndex];
  }

  getCurrentQuestionIndex() {
    return this.currentQuestionIndex;
  }

  getTotalQuestions() {
    return this.quizData.length;
  }

  getScore() {
    return this.score;
  }

  getTimeLeft() {
    return this.timeLeft;
  }

  checkAnswer(selectedOption: string) {
    if (selectedOption === this.getCurrentQuestion().answer) {
      this.score++;
    }
    this.currentQuestionIndex++;
    this.saveProgress();
  }

  resetQuiz() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.timeLeft = 10;
    localStorage.removeItem('quizProgress');
  }

  private saveProgress() {
    const progress = {
      currentQuestionIndex: this.currentQuestionIndex,
      score: this.score,
    };
    localStorage.setItem('quizProgress', JSON.stringify(progress));
  }

  private loadProgress() {
    const progress = JSON.parse(localStorage.getItem('quizProgress') || '{}');
    this.currentQuestionIndex = progress.currentQuestionIndex || 0;
    this.score = progress.score || 0;
  }
}