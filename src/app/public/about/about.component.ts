import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  team = [
    {
      name: 'Alex Morgan',
      role: 'Founder & CEO',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Sarah Khan',
      role: 'Product Manager',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Daniel Lee',
      role: 'Tech Lead',
      image: 'https://randomuser.me/api/portraits/men/46.jpg'
    },
    {
      name: 'Emma Watson',
      role: 'Customer Success',
      image: 'https://randomuser.me/api/portraits/women/65.jpg'
    }
  ];
}
