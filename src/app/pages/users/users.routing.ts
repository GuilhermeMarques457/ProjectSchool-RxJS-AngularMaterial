import { Route } from '@angular/router';
import { UsersComponent } from './users.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyConquestsComponent } from './my-conquests/my-conquests.component';
import { MyDiciplinesComponent } from './my-diciplines/my-diciplines.component';

export const UsersRouting: Route[] = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'my-profile',
      },
      {
        path: 'my-profile',
        component: MyProfileComponent,
      },
      {
        path: 'my-conquests',
        component: MyConquestsComponent,
      },
      {
        path: 'my-diciplines',
        component: MyDiciplinesComponent,
      },
    ],
  },
];
