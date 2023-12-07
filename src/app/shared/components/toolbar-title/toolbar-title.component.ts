import { Component, Input } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbar-title',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, FlexLayoutModule, MatButtonModule],
  templateUrl: './toolbar-title.component.html',
  styleUrl: './toolbar-title.component.css',
})
export class ToolbarTitleComponent {
  @Input() title = '';
  @Input() icon = '';
}
