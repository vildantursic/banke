import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-mini-header',
  templateUrl: './mini-header.component.html',
  styleUrls: ['./mini-header.component.scss']
})
export class MiniHeaderComponent implements OnInit {
  @Input() header;
  @Input() filter;

  @Output() headerSelect: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
