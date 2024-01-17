import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CoursesService } from '@app/services/courses.service';
import { Category, Course } from '@app/shared/models/course';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { CustomPaginator } from '@app/shared/helpers/customPaginator';
import { HttpResponse } from '@angular/common/http';
import {
  EMPTY,
  Observable,
  Subscription,
  catchError,
  debounceTime,
  delay,
  map,
  of,
  take,
} from 'rxjs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatDividerModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatProgressBarModule,
  ],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss',
  // To label the paginator to portuguese
  // providers: [
  //   {
  //     provide: MatPaginatorIntl,
  //     useValue: CustomPaginator.portuguesePaginate(),
  //   },
  // ],
})
export class CourseListComponent {
  courseList: Course[] = [];
  categoryValue = Object.values(Category);
  totalCount = 0;
  pageSize = 5;
  currentPage = 1;
  courseData$!: Observable<any>;
  currentFilter!: string;
  currentSearching!: string;
  // subs$!: Subscription;

  form!: FormGroup;

  private validation() {
    this.form = this.fb.group({
      category: [''],
      search: [''],
    });
  }

  constructor(
    private courseService: CoursesService,
    private fb: FormBuilder,
    private snackbar: MatSnackBar
  ) {}

  // ngOnDestroy(): void {
  //   this.subs$.unsubscribe();
  // }

  ngOnInit(): void {
    this.validation();

    this.form.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      if (value) {
        this.getCourses(
          this.currentPage,
          this.pageSize,
          this.form.value.category,
          this.form.value.search
        );
      }
    });

    this.getCourses(this.currentPage, this.pageSize);
  }

  getCourses(
    currentPage: number,
    pageSize: number,
    category?: string,
    search?: string
  ) {
    // this.subs$ = this.courseService
    this.courseData$ = this.courseService
      .get(currentPage, pageSize, category, search)
      .pipe(
        map((res: HttpResponse<any>) => {
          this.courseList = res.body as Course[];
          this.totalCount = Number(res.headers.get('X-Total-Count')) || 0;

          if (this.totalCount === 0) {
            if (category) {
              this.currentFilter = category;
            }
            this.currentSearching = search || '';
          }

          return res;
        }),
        catchError((err) => {
          this.snackbar.open(err, 'Close', {
            duration: 4000,
          });

          return EMPTY;
        })
      );
  }

  onSubmit() {}

  doSearch() {
    this.getCourses(
      this.currentPage,
      this.pageSize,
      this.form.value.category,
      this.form.value.search
    );
  }

  handlePageEvent(e: PageEvent) {
    this.currentPage = e.pageIndex + 1;
    this.pageSize = e.pageSize;

    this.getCourses(
      this.currentPage,
      this.pageSize,
      this.form.value.category,
      this.form.value.search
    );
  }
}
function pipe(arg0: any) {
  throw new Error('Function not implemented.');
}

function tap(arg0: () => void): any {
  throw new Error('Function not implemented.');
}
