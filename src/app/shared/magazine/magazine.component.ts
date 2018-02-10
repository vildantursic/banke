import { Component, OnInit } from '@angular/core';
import {GeneralService} from '../../services/general/general.service';
declare let jQuery: any;

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.scss']
})
export class MagazineComponent implements OnInit {

  email = '';
  constructor(private generalService: GeneralService) { }

  ngOnInit() {
  }

  showPopUp() {
    jQuery('.ui.modal.magazine').modal('show');
  }

  subscribeToMagazine(): void {
    // window.open(`mailto:banke@banke-biznis.com?subject=Banke Magazin&body=Zelio/la bih se ...`);
    this.generalService.subscribeToMagazine(this.email).subscribe(response => {
      console.log(response);
      if (response === 'subscribed') {
        alert('You have been subscribed to magazine "Banke"')
      } else {
        alert('Something went wrong')
      }
    })
  }
}
