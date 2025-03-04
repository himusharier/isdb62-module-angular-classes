import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuestionSetupComponent } from "./question-setup/question-setup.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, QuestionSetupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dynamic-question-form-styled';
}
