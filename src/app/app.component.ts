import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  ]

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      window.scrollTo(0, 0);
    });
  }

  showMenu(event): void {
    jQuery('.ui.sidebar').sidebar('toggle');
  }

  onFilterClicked(id): void {
    this.filters.map(filter => {
      if (filter.id === id) {
        filter.active = !filter.active ? true : false;
      }
    })
  }
}
