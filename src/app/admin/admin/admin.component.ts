import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  isSidebarCollapsed = false;
  activeMenu = 'dashboard';
  userName = 'Admin User';

  menuItems: MenuItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊', route: '/admin/dashboard' },
    { id: 'profile', label: 'Profile', icon: '👤', route: '/admin/profile' },
    { id: 'products', label: 'Products', icon: '📦', route: '/admin/products' },
    { id: 'categories', label: 'Categories', icon: '🗂️', route: '/admin/categories' }
  ];

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  setActiveMenu(menuId: string): void {
    this.activeMenu = menuId;
  }

  logout(): void {
    // Implement logout logic here
    console.log('Logout clicked');
    alert('Logout functionality will be implemented');
  }
}