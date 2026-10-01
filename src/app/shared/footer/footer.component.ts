// ==================== footer.component.ts ====================
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    { icon: '📘', name: 'Facebook', url: '#' },
    { icon: '🐦', name: 'Twitter', url: '#' },
    { icon: '📷', name: 'Instagram', url: '#' },
    { icon: '💼', name: 'LinkedIn', url: '#' }
  ];

  quickLinks = [
    { label: 'Home', route: '/' },
    { label: 'Admin', route: '/admin' },
    { label: 'About Us', route: '/about' },
    { label: 'Contact', route: '/contact' }
  ];

  categories = [
    { label: 'Electronics', route: '/category/electronics' },
    { label: 'Clothing', route: '/category/clothing' },
    { label: 'Books', route: '/category/books' },
    { label: 'Home & Garden', route: '/category/home' }
  ];
}