import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  NavigationEnd,
  Route,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MenuItem } from './shared/models/menuItem';
import { menuItems } from './shared/models/menu';
import { filter, fromEvent, map } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ToolbarMenuComponent } from './shared/components/toolbar-menu/toolbar-menu.component';
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

export const SCROLL_CONTAINER = 'mat-sidenav-content';
export const TEXT_LIMIT = 65;
export const SHADOW_LIMIT = 100;

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
    MatTooltipModule,
    ToolbarMenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private breakpointObserver: BreakpointObserver;
  private router: Router;
  private route: ActivatedRoute;
  itemsMenu: MenuItem[] = menuItems;
  isSmallScreen = false;
  popText = false;
  applyShadow = false;
  title = 'ProjectSchool';
  currentPage = '';

  constructor() {
    this.breakpointObserver = inject(BreakpointObserver);
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
  }

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }

  ngOnInit(): void {
    const content = document.getElementsByClassName(SCROLL_CONTAINER)[0];

    // Old Solutions
    // this.router.events
    //   .pipe(
    //     filter((event) => event instanceof NavigationEnd),
    //     map((event) => event as NavigationEnd)
    //   )
    //   .subscribe((event: NavigationEnd) => {
    //     this.currentPage =
    //       this.itemsMenu.find(
    //         (menuItem: MenuItem) => menuItem.link == event.url
    //       )?.label || 'Dashboard';
    //   });

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map((event) => event as NavigationEnd)
      )
      .subscribe(() => {
        this.currentPage =
          this.route.firstChild?.snapshot.routeConfig?.path || 'Dashboard';
      });

    fromEvent(content, 'scroll')
      .pipe(map(() => content.scrollTop))
      .subscribe((value: number) => this.determineHeader(value));
    //Same thing
    // .subscribe({
    //   next: (value: number) => this.determineHeader(value),
    // });
  }

  determineHeader(scrollTop: number) {
    this.popText = scrollTop >= TEXT_LIMIT;
    this.applyShadow = scrollTop >= SHADOW_LIMIT;
  }

  ngAfterContentInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 800px)'])
      .subscribe((res) => (this.isSmallScreen = res.matches));
  }
}
