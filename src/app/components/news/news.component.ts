import { AfterViewInit, Component } from '@angular/core';
declare let jQuery: any;

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements AfterViewInit {

  article = {
    image: 'assets/images/steve.jpg',
    title: 'Neka vijest',
    content: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus faucibus tellus at rutrum. Aliquam sit amet diam purus. In sem turpis, tincidunt id venenatis ac, fringilla molestie lorem. Pellentesque convallis porta sem non ultrices. Vivamus quis urna semper, viverra tortor sed, sodales risus. Donec suscipit, sapien at consequat sodales, ante dui ullamcorper arcu, nec mattis dolor ipsum congue elit. Curabitur dapibus luctus massa, in egestas arcu tempus non. Aenean eleifend est metus, et commodo erat ultrices vel. Curabitur blandit est orci, a porta justo faucibus et. Aliquam laoreet nisl lectus, lacinia feugiat sem consequat ac.</p>
    <br>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus faucibus tellus at rutrum. Aliquam sit amet diam purus. In sem turpis, tincidunt id venenatis ac, fringilla molestie lorem. Pellentesque convallis porta sem non ultrices. Vivamus quis urna semper, viverra tortor sed, sodales risus. Donec suscipit, sapien at consequat sodales, ante dui ullamcorper arcu, nec mattis dolor ipsum congue elit. Curabitur dapibus luctus massa, in egestas arcu tempus non. Aenean eleifend est metus, et commodo erat ultrices vel. Curabitur blandit est orci, a porta justo faucibus et. Aliquam laoreet nisl lectus, lacinia feugiat sem consequat ac.</p>
    <br>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus faucibus tellus at rutrum. Aliquam sit amet diam purus. In sem turpis, tincidunt id venenatis ac, fringilla molestie lorem. Pellentesque convallis porta sem non ultrices. Vivamus quis urna semper, viverra tortor sed, sodales risus. Donec suscipit, sapien at consequat sodales, ante dui ullamcorper arcu, nec mattis dolor ipsum congue elit. Curabitur dapibus luctus massa, in egestas arcu tempus non. Aenean eleifend est metus, et commodo erat ultrices vel. Curabitur blandit est orci, a porta justo faucibus et. Aliquam laoreet nisl lectus, lacinia feugiat sem consequat ac.</p>
    `,
    categories: [
      'biznis', 'finansije', 'banke'
    ],
    date: '19.04.1993',
    author: 'Vildan Tursic'
  };
  news = [1, 2, 3];
  interviews = [1, 2, 3];
  globalNews = [1, 2, 3];
  images = ['assets/images/unicredit_logo.svg', 'assets/images/unicredit_logo.svg', 'assets/images/unicredit_logo.svg']

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
