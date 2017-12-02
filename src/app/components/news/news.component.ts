import { AfterViewInit, Component } from '@angular/core';
declare let jQuery: any;

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    jQuery('.ui.sticky')
      .sticky({
        offset       : 450,
        bottomOffset : 50,
        context: '#context'
      })
  }

}
