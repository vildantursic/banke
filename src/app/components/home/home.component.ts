import {Component, AfterViewInit} from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  articles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  articlesSmall = [1, 2, 3, 4, 5]

  constructor() { }

  ngAfterViewInit() {
    setTimeout(function () {
      jQuery('.ui.sticky')
        .sticky({
          offset       : 450,
          bottomOffset : 50,
          context: '#context'
        })
    }, 3000)
  }

}
