import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ToolbarTitleComponent } from '@app/shared/components/toolbar-title/toolbar-title.component';

@Component({
  selector: 'app-students',
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
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {}
