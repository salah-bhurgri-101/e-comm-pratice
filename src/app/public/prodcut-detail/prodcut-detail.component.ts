// ==================== product-detail.component.ts ====================
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface ProductDetail {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  brand: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stock: number;
  images: string[];
  specifications: { label: string; value: string }[];
  features: string[];
}

interface Review {
  id: number;
  userName: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
}

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './prodcut-detail.component.html',
  styleUrls: ['./prodcut-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: ProductDetail | null = null;
  selectedImage = 0;
  quantity = 1;
  activeTab = 'description';
  reviews: Review[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadProduct();
    this.loadReviews();
  }

  loadProduct(): void {
    // Mock product data
    this.product = {
      id: 1,
      name: 'Dual-Band Gigabit Wi-Fi Router AX3000',
      description: 'Experience blazing-fast Wi-Fi 6 speeds with this high-performance router. Perfect for streaming, gaming, and working from home with advanced security features and seamless coverage throughout your space.',
      price: 129.99,
      originalPrice: 179.99,
      category: 'Wi-Fi Routers',
      brand: 'TechNet',
      rating: 4.7,
      reviewCount: 312,
      inStock: true,
      stock: 45,
      images: [
        'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600',
        'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600',
        'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600',
        'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600'
      ],
      specifications: [
        { label: 'Wi-Fi Standard', value: 'Wi-Fi 6 (802.11ax)' },
        { label: 'Speed', value: 'Up to 3000 Mbps' },
        { label: 'Frequency', value: 'Dual-Band (2.4GHz + 5GHz)' },
        { label: 'Coverage', value: 'Up to 2500 sq ft' },
        { label: 'Ports', value: '4x Gigabit LAN, 1x Gigabit WAN' },
        { label: 'Security', value: 'WPA3, VPN Support' }
      ],
      features: [
        'Wi-Fi 6 technology for faster speeds',
        'Dual-band connectivity for multiple devices',
        'Advanced security with WPA3 encryption',
        'Easy setup with mobile app',
        'Parental controls and guest network',
        'MU-MIMO for simultaneous streaming'
      ]
    };
  }

  loadReviews(): void {
    this.reviews = [
      {
        id: 1,
        userName: 'John Smith',
        rating: 5,
        date: '2 days ago',
        comment: 'Excellent router! Setup was incredibly easy and the speed improvement is noticeable.',
        avatar: '👤'
      },
      {
        id: 2,
        userName: 'Sarah Johnson',
        rating: 4,
        date: '1 week ago',
        comment: 'Great product overall. Coverage is impressive but the app could be better.',
        avatar: '👤'
      },
      {
        id: 3,
        userName: 'Mike Chen',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Best router I\'ve owned. Handles all my smart home devices without any issues.',
        avatar: '👤'
      }
    ];
  }

  selectImage(index: number): void {
    this.selectedImage = index;
  }

  incrementQuantity(): void {
    if (this.product && this.quantity < this.product.stock) {
      this.quantity++;
    }
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(): void {
    console.log('Adding to cart:', {
      product: this.product,
      quantity: this.quantity
    });
    alert('Product added to cart!');
  }

  buyNow(): void {
    console.log('Buy now:', {
      product: this.product,
      quantity: this.quantity
    });
    alert('Proceeding to checkout...');
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  get starArray(): boolean[] {
    if (!this.product) return [];
    return Array(5).fill(false).map((_, i) => i < Math.floor(this.product!.rating));
  }

  getReviewStars(rating: number): boolean[] {
    return Array(5).fill(false).map((_, i) => i < rating);
  }

  get discountPercentage(): number {
    if (!this.product?.originalPrice) return 0;
    return Math.round(((this.product.originalPrice - this.product.price) / this.product.originalPrice) * 100);
  }
}