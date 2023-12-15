import { MatPaginatorIntl } from '@angular/material/paginator';

export class CustomPaginator {
  static portuguesePaginate() {
    const customPaginatorIntl = new MatPaginatorIntl();
    customPaginatorIntl.itemsPerPageLabel = '';
    customPaginatorIntl.nextPageLabel = 'próxima';
    customPaginatorIntl.previousPageLabel = 'anterior';
    customPaginatorIntl.getRangeLabel = (
      page: number,
      pageSize: number,
      length: number
    ) => {
      if (length === 0 || pageSize === 0) {
        return `0 de ${length}`;
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex =
        startIndex < length
          ? Math.min(startIndex + pageSize, length)
          : startIndex + pageSize;
      return `${startIndex + 1} - ${endIndex} de ${length}`;
    };
    return customPaginatorIntl;
  }
}
