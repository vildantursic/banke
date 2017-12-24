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
      name: 'biznis'
    },
    {
      id: 5,
      active: false,
      name: 'finansije'
    },
    {
      id: 6,
      active: false,
      name: 'video'
    },
    {
      id: 7,
      active: false,
      name: 'globalNews'
    },
    {
      id: 8,
      active: false,
      name: 'column'
    }
  ]

  constructor(private router: Router, private filtersService: FiltersService) {
    router.events.subscribe((val) => {
      window.scrollTo(0, 0);
    });
    this.fillFilters();
    filtersService.getMessage().subscribe(f => {
      if (f !== undefined) {
        this.filters.forEach(filter => {
          if (filter.name === f) {
            this.onFilterClicked(filter.id);
          }
        })
      }
    });
  }

  showMenu(event): void {
    jQuery('.ui.sidebar').sidebar('setting', 'transition', 'overlay').sidebar('toggle');
    jQuery('.ui.accordion').accordion();
  }

  onFilterClicked(id): void {
    console.log(id);
    this.filters.map(filter => {
      if (filter.id === id && filter.active) {
        filter.active = false;
      } else if (filter.id === id && !filter.active) {
        filter.active = true;
      }
    })
    // this.fillFilters();
  }

  fillFilters(): void {
    this.filtersService.clearMessage();
    this.filters.forEach(filter => {
      if (filter.active) {
        this.filtersService.sendMessage(filter.name)
      }
    })
  }
}
