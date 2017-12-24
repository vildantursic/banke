import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FiltersService {
  private filterValues = new Subject<any>();

  constructor() {
    this.filterValues.next('all');
  }

  sendMessage(message: string) {
    this.filterValues.next(message);
  }

  clearMessage() {
    this.filterValues.next();
  }

  getMessage(): Observable<any> {
    return this.filterValues.asObservable();
  }
}
