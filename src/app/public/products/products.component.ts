import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, ProductCardComponent } from '../../shared/product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.products = [
      {
        id: 1,
        name: 'Wi-Fi 6 Dual-Band Router AX3000',
        description: 'High-speed router with extended coverage and stability',
        price: 129,
        originalPrice: 179,
        image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7',
        category: 'Routers',
        rating: 4.7,
        reviewCount: 312,
        inStock: true,
        badge: 'Best Seller'
      },
      {
        id: 2,
        name: '24-Port Gigabit Network Switch',
        description: 'Reliable unmanaged switch for offices and enterprises',
        price: 189,
        image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68',
        category: 'Switches',
        rating: 4.6,
        reviewCount: 148,
        inStock: true
      },
      {
        id: 3,
        name: 'Fiber ONT GPON Terminal',
        description: 'High-performance fiber optic network terminal',
        price: 99,
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758',
        category: 'Fiber Devices',
        rating: 4.5,
        reviewCount: 87,
        inStock: true
      },
      {
        id: 4,
        name: 'Mesh Wi-Fi System (3-Pack)',
        description: 'Whole-home seamless Wi-Fi coverage',
        price: 249,
        originalPrice: 299,
        image: 'https://images.unsplash.com/photo-1602524812643-2d4f4a1ec6b8',
        category: 'Mesh Systems',
        rating: 4.8,
        reviewCount: 426,
        inStock: true,
        badge: 'Top Rated'
      }
    ];
  }
}
