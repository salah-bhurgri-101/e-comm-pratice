
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  productCount: number;
  slug?: string;
}

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './categroy-card.component.html',
  styleUrl: './categroy-card.component.scss'
})
export class CategoryCardComponent {
  @Input() category!: Category;
}