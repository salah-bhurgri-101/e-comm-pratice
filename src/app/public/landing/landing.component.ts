import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, ProductCardComponent } from '../../shared/product-card/product-card.component';
import { Category, CategoryCardComponent } from '../../shared/categroy-card/categroy-card.component';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, CategoryCardComponent, ProductCardComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];

  ngOnInit(): void {
    this.loadCategories();
    this.loadProducts();
  }

 loadCategories(): void {
  this.categories = [
    {
      id: 1,
      name: 'Wi-Fi Routers',
      description: 'High-speed wireless routers for home and business networks',
      image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=500&h=300&fit=crop',
      productCount: 48,
      slug: 'wifi-routers'
    },
    {
      id: 2,
      name: 'Network Switches',
      description: 'Managed and unmanaged switches for scalable networks',
      image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=500&h=300&fit=crop',
      productCount: 36,
      slug: 'network-switches'
    },
    {
      id: 3,
      name: 'Fiber Devices',
      description: 'ONTs, SFP modules, and fiber networking equipment',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&h=300&fit=crop',
      productCount: 29,
      slug: 'fiber-devices'
    },
    {
      id: 4,
      name: 'Modems',
      description: 'DSL, cable, and broadband modems for stable connectivity',
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=300&fit=crop',
      productCount: 21,
      slug: 'modems'
    },
    {
      id: 5,
      name: 'Mesh Systems',
      description: 'Whole-home mesh Wi-Fi systems with seamless coverage',
      image: 'https://images.unsplash.com/photo-1602524812643-2d4f4a1ec6b8?w=500&h=300&fit=crop',
      productCount: 18,
      slug: 'mesh-wifi'
    },
    {
      id: 6,
      name: 'Network Accessories',
      description: 'Cables, adapters, racks, and power accessories',
      image: 'https://images.unsplash.com/photo-1580894908361-967195033215?w=500&h=300&fit=crop',
      productCount: 64,
      slug: 'network-accessories'
    }
  ];
}


  loadProducts(): void {
  this.products = [
    {
      id: 1,
      name: 'Dual-Band Gigabit Wi-Fi Router AX3000',
      description: 'High-performance Wi-Fi 6 router with extended coverage',
      price: 129.99,
      originalPrice: 179.99,
      image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=500&h=400&fit=crop',
      category: 'Wi-Fi Routers',
      rating: 4.7,
      reviewCount: 312,
      inStock: true,
      badge: 'Best Seller',
      slug: 'wifi-router-ax3000'
    },
    {
      id: 2,
      name: '24-Port Gigabit Network Switch',
      description: 'Unmanaged switch ideal for office and enterprise use',
      price: 189.99,
      image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=500&h=400&fit=crop',
      category: 'Network Switches',
      rating: 4.6,
      reviewCount: 148,
      inStock: true,
      slug: '24-port-network-switch'
    },
    {
      id: 3,
      name: 'Fiber ONT GPON Terminal',
      description: 'High-speed fiber optic terminal for broadband networks',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&h=400&fit=crop',
      category: 'Fiber Devices',
      rating: 4.5,
      reviewCount: 87,
      inStock: true,
      slug: 'fiber-ont-terminal'
    },
    {
      id: 4,
      name: 'Cable Broadband Modem DOCSIS 3.1',
      description: 'Reliable modem supporting ultra-fast internet speeds',
      price: 139.99,
      originalPrice: 169.99,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=400&fit=crop',
      category: 'Modems',
      rating: 4.4,
      reviewCount: 201,
      inStock: true,
      slug: 'cable-modem-docsis-31'
    },
    {
      id: 5,
      name: 'Mesh Wi-Fi System (3-Pack)',
      description: 'Seamless whole-home Wi-Fi coverage with auto roaming',
      price: 249.99,
      originalPrice: 299.99,
      image: 'https://images.unsplash.com/photo-1602524812643-2d4f4a1ec6b8?w=500&h=400&fit=crop',
      category: 'Mesh Systems',
      rating: 4.8,
      reviewCount: 426,
      inStock: true,
      badge: 'Top Rated',
      slug: 'mesh-wifi-system'
    },
    {
      id: 6,
      name: 'Cat6 Ethernet Cable – 10m',
      description: 'High-quality copper Ethernet cable for stable connections',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1580894908361-967195033215?w=500&h=400&fit=crop',
      category: 'Network Accessories',
      rating: 4.9,
      reviewCount: 532,
      inStock: true,
      slug: 'cat6-ethernet-cable'
    }
  ];
}

}
