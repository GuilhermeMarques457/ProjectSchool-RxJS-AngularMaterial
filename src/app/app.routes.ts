import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/users/users.routing').then((r) => r.UsersRoutes),
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./pages/courses/courses.routing').then((r) => r.CoursesRoutes),
  },
  {
    path: 'students',
    loadChildren: () =>
      import('./pages/students/students.routing').then((r) => r.StudentsRoutes),
  },
  {
    path: 'support',
    loadChildren: () =>
      import('./pages/support/support.routing').then((r) => r.SupportRoutes),
  },
  {
    path: 'teachers',
    loadChildren: () =>
      import('./pages/teachers/teachers.routing').then((r) => r.TeachersRoutes),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.routing').then(
        (r) => r.DashboardRoutes
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
];
