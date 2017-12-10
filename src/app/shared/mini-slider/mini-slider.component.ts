import {Component, Input, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-mini-slider',
  templateUrl: './mini-slider.component.html',
  styleUrls: ['./mini-slider.component.scss']
})
export class MiniSliderComponent implements AfterViewInit {

  @Input() images = [];
  @Input() orientation;
  constructor() { }

  ngAfterViewInit() {
    if (this.orientation === 'right') {
      document.getElementById('figure').style.animation = '30s slidy2 infinite';
    }
  }
}
