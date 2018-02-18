import {AfterViewInit, Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {FiltersService} from "./services/filters/filters.service";
declare let jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  filters = [];
  searchFilters = '';

  constructor(private router: Router, private filtersService: FiltersService) {
    router.events.subscribe((val) => {
      window.scrollTo(0, 0);
    });
    this.fillFilters();
  }

  ngOnInit() {
    this.getFilters();
  }

  showMenu(event): void {
    jQuery('.ui.sidebar').sidebar('setting', 'transition', 'overlay').sidebar('toggle');
    jQuery('.ui.accordion').accordion();
  }

  getFilters(): void {
    this.filtersService.getFilters().subscribe((data: any) => {
      const response = data[data.length - 1];
      for (const i in response) {
        if (response.hasOwnProperty(i) && i !== '_id' && i !== '__v') {
          this.filters.push({
            id: i,
            active: false,
            name: response[i],
            disabled: false
          });
        }
      }
    });

  }

  onFilterClicked(id): void {
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
