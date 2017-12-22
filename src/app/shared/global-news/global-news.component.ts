import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-global-news',
  templateUrl: './global-news.component.html',
  styleUrls: ['./global-news.component.scss']
})
export class GlobalNewsComponent implements OnInit {

  @Input() article;

  constructor() { }

  ngOnInit() {
  }

}
