import { Injectable, signal } from '@angular/core';
import { Question } from '../model/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private questions = signal<Question[]>([]);

  constructor() {
    this.loadQuestions();
  }

  getQuestions() {
    return this.questions;
  }

  addQuestion(question: Question) {
    this.questions.update(qs => [...qs, question]);
    this.saveQuestions();
  }

  clearQuestions() {
    localStorage.removeItem('questionPaper');
    this.questions.set([]);
  }

  private saveQuestions() {
    localStorage.setItem('questionPaper', JSON.stringify(this.questions()));
  }

  private loadQuestions() {
    const storedQuestions = localStorage.getItem('questionPaper');
    if (storedQuestions) {
      this.questions.set(JSON.parse(storedQuestions));
    }
  }

}
