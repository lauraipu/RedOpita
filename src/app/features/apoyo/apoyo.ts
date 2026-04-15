import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-apoyo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './apoyo.html'
})
export class ApoyoComponent {
  contact = {
    name: '',
    email: ''
  };

  submitted = false;

  onSubmit() {
    if (!this.contact.name || !this.contact.email) {
      return;
    }

    this.submitted = true;
    this.contact = { name: '', email: '' };
  }
}