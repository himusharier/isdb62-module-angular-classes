import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  keyTyped = '';

  onBtnSubmit() {
    const output = document.getElementById('input') as HTMLTextAreaElement;
    this.keyTyped = output.value;
  }
}
