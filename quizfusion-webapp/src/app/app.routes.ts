import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: 'home', pathMatch: 'full', component: HomeComponent},
    {path: 'quiz', pathMatch: 'full', component: QuizComponent},
    {path: 'create-quiz', pathMatch: 'full', component: CreateQuizComponent},
    {path: '**', component: ErrorComponent}
];
