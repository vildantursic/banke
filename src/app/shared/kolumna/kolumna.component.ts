import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-kolumna',
  templateUrl: './kolumna.component.html',
  styleUrls: ['./kolumna.component.scss']
})
export class KolumnaComponent implements OnInit {

  @Input() article;

  constructor() { }

  ngOnInit() {
  }

}
