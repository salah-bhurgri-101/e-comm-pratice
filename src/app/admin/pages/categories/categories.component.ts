import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Category, CategoryCardComponent } from '../../../shared/categroy-card/categroy-card.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FormsModule, CategoryCardComponent],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  showAddModal = false;

  categories: Category[] = [
    {
      id: 1,
      name: 'Electronics',
      description: 'Mobiles, laptops and accessories',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&h=300&fit=crop',
      productCount: 120,
      slug: 'electronics'
    },
    {
      id: 2,
      name: 'Fashion',
      description: 'Clothing and lifestyle products',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&h=300&fit=crop',
      productCount: 80,
      slug: 'fashion'
    },
    {
      id: 3,
      name: 'Home Appliances',
      description: 'Kitchen and home essentials',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&h=300&fit=crop',
      productCount: 45,
      slug: 'home-appliances'
    }
  ];

  newCategory: Partial<Category> = {
    name: '',
    description: '',
    image: ''
  };

  openAddModal(): void {
    this.showAddModal = true;
  }

  closeAddModal(): void {
    this.showAddModal = false;
  }

  addCategory(): void {
    const category: Category = {
      id: Date.now(),
      name: this.newCategory.name!,
      description: this.newCategory.description!,
      image: this.newCategory.image || 'https://via.placeholder.com/300',
      productCount: 0,
      slug: this.newCategory.name?.toLowerCase().replace(/\s+/g, '-')
    };

    this.categories.push(category);
    this.newCategory = {};
    this.closeAddModal();
  }

  deleteCategory(id: number): void {
    this.categories = this.categories.filter(c => c.id !== id);
  }
}
