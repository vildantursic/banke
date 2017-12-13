import { Component, OnInit } from '@angular/core';
declare let jQuery: any;

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.scss']
})
export class MagazineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showPopUp() {
    jQuery('.ui.modal').modal('show');
  }
}
