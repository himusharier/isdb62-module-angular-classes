import { Component } from '@angular/core';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { HeaderComponent } from "../components/header/header.component";

@Component({
  selector: 'app-create-quiz',
  imports: [NavbarComponent, HeaderComponent],
  templateUrl: './create-quiz.component.html',
  styleUrl: './create-quiz.component.css'
})
export class CreateQuizComponent {
  headerTitle = "Create Quiz";
}
