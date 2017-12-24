import {Component, Input, OnInit} from '@angular/core';
declare let FB: any;

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  @Input() slug;

  constructor() { }

  ngOnInit() {

  }

}
