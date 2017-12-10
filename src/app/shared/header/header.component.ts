import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import 'rxjs/add/observable/of';
declare let jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() onMenuClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

}
