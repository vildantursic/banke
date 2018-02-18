import {Component, Input, OnInit} from '@angular/core';
import {FiltersService} from '../../services/filters/filters.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() partners = {
    bank: [],
    leasing: [],
    insurance: [],
    microcredit: []
  };
  @Input() ads = [];

  @Input() video = [];
  @Input() column = [];
  @Input() interviews = [];
  @Input() lifestyle = [];

  constructor(private filterService: FiltersService) { }

  ngOnInit() {
  }

  filterNewsOnHeaderSelect(event, second?): void {
    this.filterService.clearMessage();
    this.filterService.sendMessage(event);
    if (second) {
      this.filterService.sendMessage(second);
    }
  }

  setAd(section, number) {
    if (this.ads.length !== 0) {
      const ad = [0, number];

      if (section === 'top') {
        ad[0] = 0;
      } else {
        ad[0] = 1;
      }

      if (this.ads[ad[0]].ads[ad[1]]) {
        return {'background-image': `url(${ this.ads[ad[0]].ads[ad[1]].active ? this.ads[ad[0]].ads[ad[1]].image : '' })`}
      } else {
        return ''
      }
    }
  }

  goToForum() {
    window.location.href = 'http://banke.forumotion.me/'
  }
}
