import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  isEditMode = false;

  profile = {
    fullName: 'Admin User',
    email: 'admin@example.com',
    role: 'Administrator',
    phone: '+92 300 1234567',
    address: 'Karachi, Pakistan'
  };

  toggleEdit(): void {
    this.isEditMode = !this.isEditMode;
  }

  saveProfile(): void {
    console.log('Profile saved', this.profile);
    this.isEditMode = false;
  }

  cancelEdit(): void {
    this.isEditMode = false;
  }
}
