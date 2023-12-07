import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pages/users',
    loadChildren: () =>
      import('./pages/users/users.routing').then((r) => r.UsersRouting),
  },
];
