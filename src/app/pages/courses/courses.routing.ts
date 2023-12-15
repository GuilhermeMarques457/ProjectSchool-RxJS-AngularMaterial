import { Route } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CourseListComponent } from './course-list/course-list.component';

export const CoursesRoutes: Route[] = [
  {
    path: '',
    component: CoursesComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
      {
        path: 'list',
        component: CourseListComponent,
      },
    ],
  },
];
