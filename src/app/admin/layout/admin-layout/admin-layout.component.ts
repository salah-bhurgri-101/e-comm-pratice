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
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {

  isSidebarCollapsed = false;
  activeMenu = 'dashboard';
  userName = 'Admin User';

  menuItems: MenuItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊', route: '/admin' },
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
    console.log('Admin logout');
    // later: authService.logout();
  }
}
