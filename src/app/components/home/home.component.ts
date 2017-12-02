import {Component, AfterViewInit} from '@angular/core';
declare let jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  articles = [
    {
      title: 'Neka vijest',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse facere itaque nemo quam soluta voluptate! Aliquid asperiores aut consequuntur eos laborum mollitia quaerat sequi voluptatibus?',
      categories: [
       'finansije', 'banke'
      ],
      date: '29.07.1989',
      author: 'Irma Rustemovic'
    },
    {
      title: 'Neka vijest',
      content: 'Lorem ipsum dolor sit amet,speriores aut consequuntur eos laborum mollitia quaerat sequi voluptatibus?',
      categories: [
        'biznis', 'finansije', 'banke'
      ],
      date: '19.04.1993',
      author: 'Vildan Tursic'
    },
    {
      title: 'Neka vijest',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum delenere itaque nemo quam soluta voluptate! Aliq eos laborum mollitia quaerat sequi voluptatibus?',
      categories: [
        'biznis', 'banke'
      ],
      date: '19.04.1993',
      author: 'Vildan Tursic'
    },
    {
      title: 'Neka vijest',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus?',
      categories: [
        'banke'
      ],
      date: '29.07.1989',
      author: 'Irma Rustemovic'
    }
  ];
  articlesSmall = [1, 2, 3, 4, 5];

  constructor() { }

  ngAfterViewInit() {
    jQuery('.ui.sticky')
      .sticky({
        offset       : 150,
        bottomOffset : 50,
        context: '#context'
      })
  }

}
