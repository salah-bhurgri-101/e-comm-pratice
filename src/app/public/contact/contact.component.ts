import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  faqs = [
    {
      question: 'How long does support take to respond?',
      answer: 'We typically respond within 24 hours on business days.'
    },
    {
      question: 'Can I contact you for business inquiries?',
      answer: 'Yes, please use the contact form or email us directly.'
    },
    {
      question: 'Is my information secure?',
      answer: 'Absolutely. We follow strict security and privacy standards.'
    },
    {
      question: 'Do you offer international support?',
      answer: 'Yes, our support team assists customers globally.'
    }
  ];
}
