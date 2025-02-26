import { Component } from '@angular/core';

@Component({
  selector: 'app-input-show',
  imports: [],
  templateUrl: './input-show.component.html',
  styleUrl: './input-show.component.css'
})
export class InputShowComponent {
  keyTyped = '';

  onBtnSubmit() {
    const output = document.getElementById('input') as HTMLTextAreaElement;
    this.keyTyped = output.value;
  }
}
