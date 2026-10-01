import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  firstName = '';
  lastName = '';
  email = '';
  password = '';
  confirmPassword = '';

  register(): void {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    console.log({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    });

    // TODO: API integration
  }
}
