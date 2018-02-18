import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {MainService} from "../main.service";

@Injectable()
export class FiltersService {
  private filterValues = new Subject<any>();

  constructor(private service: MainService) {}

  sendMessage(message: string) {
    this.filterValues.next(message);
  }

  clearMessage() {
    this.filterValues.next();
  }

  getMessage(): Observable<any> {
    return this.filterValues.asObservable();
  }

  /**
   * Gets array of filters
   * @returns {Observable<any>}
   */
  getFilters(): Observable<any> {
    return this.service.get(`filters`);
  }
}
