import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit, OnDestroy {
  question: string = '';
  options: string[] = [];
  currentQuestionIndex: number = 0;
  totalQuestions: number = 0;
  timeLeft: number = 10;
  timer: any;

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.loadQuestion();
    this.startTimer();
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  loadQuestion() {
    const currentQuestion = this.quizService.getCurrentQuestion();
    this.question = currentQuestion.question;
    this.options = currentQuestion.options;
    this.currentQuestionIndex = this.quizService.getCurrentQuestionIndex();
    this.totalQuestions = this.quizService.getTotalQuestions();
  }

  startTimer() {
    this.timeLeft = this.quizService.getTimeLeft();
    this.timer = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        this.selectOption(null);
      }
    }, 1000);
  }

  selectOption(option: string | null) {
    clearInterval(this.timer);
    if (option !== null) {
      this.quizService.checkAnswer(option);
    }
    if (this.currentQuestionIndex + 1 < this.totalQuestions) {
      this.loadQuestion();
      this.startTimer();
    } else {
      this.router.navigate(['/result']);
    }
  }
}