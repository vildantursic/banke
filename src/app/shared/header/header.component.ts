import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {FiltersService} from "../../services/filters/filters.service";
declare let jQuery: any;

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
      active: true,
      name: 'biznis'
    },
    {
      id: 2,
      active: true,
      name: 'finansije'
    }
  ]);

  constructor(private filterService: FiltersService) {
  }

  ngOnInit() {
    this.filterService.removeFilter();
    this.filters.subscribe((filters) => {
      filters.forEach(filter => {
        if (filter.active) {
          this.filterService.setFilter(filter);
        }
      })
    })

    jQuery('.ui.dropdown').dropdown()
  }

  setFilter(): void {
    this.filterService.removeFilter();
    this.filters.subscribe((filters) => {
      filters.forEach(filter => {
        if (filter.active) {
          this.filterService.setFilter(filter);
        }
      })
    })
  }

}
