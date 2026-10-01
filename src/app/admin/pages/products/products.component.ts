import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../shared/product-card/product-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  showAddModal = false;

  products: Product[] = [
    {
      id: 1,
      name: 'Wireless Headphones',
      description: 'High quality noise cancelling headphones',
      price: 129,
      originalPrice: 179,
      image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=500&h=300&fit=crop',
      category: 'Electronics',
      rating: 4.5,
      reviewCount: 120,
      inStock: true,
      badge: 'SALE',
      slug: 'wireless-headphones'
    },
    {
      id: 2,
      name: 'Smart Watch',
      description: 'Fitness tracking smart watch',
      price: 99,
      image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=500&h=300&fit=crop',
      category: 'Electronics',
      rating: 4.2,
      reviewCount: 85,
      inStock: true,
      badge: 'NEW',
      slug: 'smart-watch'
    },
    {
      id: 3,
      name: 'Running Shoes',
      description: 'Comfortable sports running shoes',
      price: 79,
      originalPrice: 99,
      image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=500&h=300&fit=crop',
      category: 'Fashion',
      rating: 4.0,
      reviewCount: 60,
      inStock: false,
      slug: 'running-shoes'
    }
  ];

  newProduct: Partial<Product> = {
    name: '',
    description: '',
    price: 0,
    image: '',
    category: '',
    rating: 0,
    reviewCount: 0,
    inStock: true
  };

  openAddModal(): void {
    this.showAddModal = true;
  }

  closeAddModal(): void {
    this.showAddModal = false;
  }

  addProduct(): void {
    const product: Product = {
      id: Date.now(),
      name: this.newProduct.name!,
      description: this.newProduct.description!,
      price: this.newProduct.price!,
      originalPrice: this.newProduct.originalPrice,
      image: this.newProduct.image || 'https://via.placeholder.com/300',
      category: this.newProduct.category!,
      rating: this.newProduct.rating || 0,
      reviewCount: this.newProduct.reviewCount || 0,
      inStock: this.newProduct.inStock ?? true,
      badge: this.newProduct.badge,
      slug: this.newProduct.name?.toLowerCase().replace(/\s+/g, '-')
    };

    this.products.push(product);
    this.newProduct = {};
    this.closeAddModal();
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
  }
}
