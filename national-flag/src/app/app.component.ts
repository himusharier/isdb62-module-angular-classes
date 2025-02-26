import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RectangleComponent } from "./rectangle/rectangle.component";
import { CircleComponent } from "./circle/circle.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RectangleComponent, CircleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'national-flag';
}
