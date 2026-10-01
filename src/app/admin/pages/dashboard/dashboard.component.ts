import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StatCard {
  title: string;
  value: string;
  icon: string;
  color: string;
}

interface Activity {
  icon: string;
  message: string;
  time: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  stats: StatCard[] = [
    { title: 'Total Products', value: '1,234', icon: '📦', color: 'blue' },
    { title: 'Categories', value: '48', icon: '🗂️', color: 'green' },
    { title: 'Users', value: '5,678', icon: '👥', color: 'purple' },
    { title: 'Revenue', value: '$89,456', icon: '💰', color: 'gold' }
  ];

  activities: Activity[] = [
    {
      icon: '➕',
      message: 'New product added: Wireless Headphones',
      time: '2 hours ago'
    },
    {
      icon: '✏️',
      message: 'Category updated: Electronics',
      time: '5 hours ago'
    },
    {
      icon: '🗑️',
      message: 'Product deleted: Old Keyboard',
      time: '1 day ago'
    }
  ];

  quickAction(action: string): void {
    console.log(`Quick action clicked: ${action}`);
  }
}
