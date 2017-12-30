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

  subscribeToMagazine(): void {
    window.open(`mailto:banke@banke-biznis.com?subject=Banke Magazin&body=Zelio/la bih se ...`);
  }
}
