import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FiltersService} from "./services/filters/filters.service";
declare let jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  filters = [
    {
      id: 0,
      active: true,
      name: 'all'
    },
    {
      id: 1,
      active: false,
      name: 'banke'
    },
    {
      id: 2,
      active: false,
      name: 'biznis',
      subfilters: [
        {
          id: 3,
          active: false,
          name: 'banke 1'
        },
        {
          id: 4,
          active: false,
          name: 'banke 2'
        }
      ]
    },
    {
      id: 5,
      active: false,
      name: 'finansije'
    }
  ]

  constructor(private router: Router, private filtersService: FiltersService) {
    router.events.subscribe((val) => {
      window.scrollTo(0, 0);
    });
    this.fillFilters();
  }

  showMenu(event): void {
    jQuery('.ui.sidebar').sidebar('setting', 'transition', 'overlay').sidebar('toggle');
    jQuery('.ui.accordion').accordion();
  }

  onFilterClicked(id): void {
    if (id !== 0) {
      this.filters[0].active = false;
      this.filters.map(filter => {
        if (filter.id === id && filter.active) {
          filter.active = false;
        } else if (filter.id === id && !filter.active) {
          filter.active = true;
        }
        if (filter.hasOwnProperty('subfilters')) {
          filter['subfilters'].map(subfilter => {
            if (subfilter.id === id && subfilter.active) {
              subfilter.active = false;
            } else if (subfilter.id === id && !subfilter.active) {
              subfilter.active = true;
            }
          })
        }
      })
    } else {
      this.filters.map(filter => {
        filter.active = false;
        if (filter.hasOwnProperty('subfilters')) {
          filter['subfilters'].map(subfilter => {
            subfilter.active = false;
          })
        }
      })
      this.filters[0].active = true;
    }
    this.fillFilters();
  }

  fillFilters(): void {
    this.filtersService.removeFilter();
    this.filters.forEach(filter => {
      if (filter.active) {
        this.filtersService.setFilter(filter.name)
      }
    })
  }
}
