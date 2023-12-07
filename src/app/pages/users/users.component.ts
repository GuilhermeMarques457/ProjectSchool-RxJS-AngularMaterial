import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ToolbarTitleComponent } from '../../shared/components/toolbar-title/toolbar-title.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    RouterOutlet,
    MatTabsModule,
    CommonModule,
    RouterLink,
    MatIconModule,
    MatButtonModule,
    ToolbarTitleComponent,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  links = [
    {
      icon: 'person',
      url: '/pages/users/my-profile',
      display: 'Profile',
    },
    {
      icon: 'play_lesson',
      url: '/pages/users/my-diciplines',
      display: 'Disciplines',
    },
    {
      icon: 'workspace_premium',
      url: '/pages/users/my-conquests',
      display: 'Conquests',
    },
  ];

  activeLink = this.links[0];
}
