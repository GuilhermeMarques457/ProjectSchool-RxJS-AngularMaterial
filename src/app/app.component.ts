import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MenuItem } from './shared/models/menuItem';
import { menuItems } from './shared/models/menu';
// import { NgModule } from '@angular/core';
// import { MatSliderModule } from '@angular/material/slider';
// import { MatInputModule } from '@angular/material/input';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
// import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
// import {
//   MAT_SNACK_BAR_DEFAULT_OPTIONS,
//   MatSnackBarModule,
// } from '@angular/material/snack-bar';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatTableModule } from '@angular/material/table';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  public itemsMenu: MenuItem[] = menuItems;
  public isSmallScreen = false;
  title = 'ProjectSchool';

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }
}
