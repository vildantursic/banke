import {Component, Input, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-mini-slider',
  templateUrl: './mini-slider.component.html',
  styleUrls: ['./mini-slider.component.scss']
})
export class MiniSliderComponent implements AfterViewInit {

  @Input() images = [];
  @Input() orientation;
  @Input() elementId;
  constructor() { }

  ngAfterViewInit() {
    setTimeout(() => {
      let el = document.getElementById('figure');
      if (el) {
       el.style.animation = '30s slidy2 infinite'
      }
    })
  }
}
