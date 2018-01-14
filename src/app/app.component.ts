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
  filters = [];
  searchFilters = '';
// {
//   id: 0,
//   active: true,
//   name: 'all'
// }

  constructor(private router: Router, private filtersService: FiltersService) {
    this.getFilters();
    router.events.subscribe((val) => {
      window.scrollTo(0, 0);
    });
    this.fillFilters();
    // filtersService.getMessage().subscribe(f => {
    //   if (f !== undefined) {
    //     this.filters.forEach(filter => {
    //       if (filter.name === f) {
    //         this.onFilterClicked(filter.id);
    //       }
    //     })
    //   }
    // });
  }

  showMenu(event): void {
    jQuery('.ui.sidebar').sidebar('setting', 'transition', 'overlay').sidebar('toggle');
    jQuery('.ui.accordion').accordion();
  }

  getFilters(): void {
    this.filtersService.getFilters().subscribe((response: any) => {
      this.filters = response.map((item, i) => {
        return {
          id: i,
          active: false,
          name: item,
          disabled: false
        }
      });
      this.filters.splice(0, 1, {
        id: 1000,
        active: true,
        name: 'all',
        disabled: true
      })
    })
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
    this.fillFilters();
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
