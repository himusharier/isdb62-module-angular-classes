import { Routes } from '@angular/router';
import { QuizFormOneComponent } from './quiz-form-one/quiz-form-one.component';
import { QuizFormTwoComponent } from './quiz-form-two/quiz-form-two.component';
import { QuizFormThreeComponent } from './quiz-form-three/quiz-form-three.component';
import { QuizFormFourComponent } from './quiz-form-four/quiz-form-four.component';
import { QuizFormFiveComponent } from './quiz-form-five/quiz-form-five.component';
import { QuizFormSixComponent } from './quiz-form-six/quiz-form-six.component';

export const routes: Routes = [
    {path: 'quiz-form-one', component: QuizFormOneComponent},
    {path: 'quiz-form-two', component: QuizFormTwoComponent},
    {path: 'quiz-form-three', component: QuizFormThreeComponent},
    {path: 'quiz-form-four', component: QuizFormFourComponent},
    {path: 'quiz-form-five', component: QuizFormFiveComponent},
    {path: 'quiz-form-six', component: QuizFormSixComponent}
];
