import {Component, Input, OnInit} from '@angular/core';

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
