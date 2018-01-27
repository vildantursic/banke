import {Component, Input, OnInit} from '@angular/core';
declare let jQuery: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() title = 'Banke';
  @Input() items = [];
  constructor() { }

  ngOnInit() {
  }

  showPopUp() {
    jQuery('.ui.modal.' + this.title.toLowerCase()).modal('show');
  }
}
