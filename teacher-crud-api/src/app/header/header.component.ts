import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private modal: bootstrap.Modal | null = null;

  openModal() {
      const modalElement = document.getElementById('teacherModal');
      if (modalElement) {
        this.modal = new bootstrap.Modal(modalElement);
        this.modal.show();
      }
    }

}
