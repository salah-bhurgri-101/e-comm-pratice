import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  badge?: string;
  slug?: string;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: Product;
  
  isLightboxOpen = false;
  zoomLevel = 1;
  rotation = 0;
  positionX = 0;
  positionY = 0;
  isDragging = false;
  startX = 0;
  startY = 0;

  get discountPercentage(): number | null {
    if (this.product.originalPrice && this.product.originalPrice > this.product.price) {
      return Math.round(((this.product.originalPrice - this.product.price) / this.product.originalPrice) * 100);
    }
    return null;
  }

  get starArray(): boolean[] {
    return Array(5).fill(false).map((_, index) => index < Math.floor(this.product.rating));
  }

  @HostListener('document:keydown.escape')
  onEscapeKey() {
    if (this.isLightboxOpen) {
      this.closeLightbox();
    }
  }

  openLightbox(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.isLightboxOpen = true;
    this.resetTransform();
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.isLightboxOpen = false;
    document.body.style.overflow = '';
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  }

  toggleFullscreen(): void {
    const element = document.querySelector('.lightbox-modal') as HTMLElement;
    if (!document.fullscreenElement) {
      element.requestFullscreen().catch(err => {
        console.error('Error attempting to enable fullscreen:', err);
      });
    } else {
      document.exitFullscreen();
    }
  }

  zoomIn(): void {
    this.zoomLevel = Math.min(this.zoomLevel + 0.5, 5);
  }

  zoomOut(): void {
    this.zoomLevel = Math.max(this.zoomLevel - 0.5, 0.5);
  }

  resetTransform(): void {
    this.zoomLevel = 1;
    this.rotation = 0;
    this.positionX = 0;
    this.positionY = 0;
  }

  rotateImage(): void {
    this.rotation = (this.rotation + 90) % 360;
  }

  downloadImage(): void {
    fetch(this.product.image)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${this.product.name.replace(/\s+/g, '_')}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(err => console.error('Download failed:', err));
  }

  async shareImage(): Promise<void> {
    if (navigator.share) {
      try {
        await navigator.share({
          title: this.product.name,
          text: this.product.description,
          url: window.location.href
        });
      } catch (err) {
        console.log('Share cancelled or failed');
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (err) {
        console.error('Failed to copy link');
      }
    }
  }

  onImageMouseDown(event: MouseEvent): void {
    if (this.zoomLevel > 1) {
      this.isDragging = true;
      this.startX = event.clientX - this.positionX;
      this.startY = event.clientY - this.positionY;
      event.preventDefault();
    }
  }

  onImageMouseMove(event: MouseEvent): void {
    if (this.isDragging && this.zoomLevel > 1) {
      this.positionX = event.clientX - this.startX;
      this.positionY = event.clientY - this.startY;
    }
  }

  onImageMouseUp(): void {
    this.isDragging = false;
  }

  getTransform(): string {
    return `translate(${this.positionX}px, ${this.positionY}px) scale(${this.zoomLevel}) rotate(${this.rotation}deg)`;
  }

  getCursor(): string {
    if (this.zoomLevel > 1) {
      return this.isDragging ? 'grabbing' : 'grab';
    }
    return 'default';
  }
}
