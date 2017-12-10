import { Component, OnInit } from '@angular/core';
declare let jQuery: any;

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showPopUp() {
    jQuery('.ui.modal')
      .modal('show')
    ;
  }
}
