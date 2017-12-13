import { Injectable } from '@angular/core';

@Injectable()
export class FiltersService {

  filterValues = [];

  constructor() { }

  getFilters(): Array<any> {
    return this.filterValues
  }
  setFilter(value): void {
    this.filterValues.push(value)
  }
  removeFilter(): void {
    this.filterValues = []
  }

}
