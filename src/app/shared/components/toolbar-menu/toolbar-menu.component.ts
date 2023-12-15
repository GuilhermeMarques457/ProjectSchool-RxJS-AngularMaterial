import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MenuItem } from '@app/shared/models/menuItem';

@Component({
  selector: 'app-toolbar-menu',
  standalone: true,
  imports: [
    MatToolbarModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
    MatDividerModule,
  ],
  templateUrl: './toolbar-menu.component.html',
  styleUrl: './toolbar-menu.component.css',
})
export class ToolbarMenuComponent {
  @Input() menuName = '';
  @Input() shadow = false;
  @Input() popText = false;

  @Input() menuItemsList: MenuItem[] = [];

  ngOnChanges(changes: any): void {
    console.log(changes);
  }

  constructor() {
    console.log(this.menuName);
  }
}
