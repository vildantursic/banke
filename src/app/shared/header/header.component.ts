import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {

  filters: Observable<any> = Observable.of([
    {
      id: 0,
      active: false,
      name: 'banke'
    },
    {
      id: 1,
      active: false,
      name: 'biznis'
    },
    {
      id: 2,
      active: false,
      name: 'finansije'
    }
  ]);

  constructor() {
  }

  ngOnInit() {
    this.filters.subscribe((filters) => {
      console.log(filters);
    })
  }

}
