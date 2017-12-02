import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() article: {
    title: string,
    content: string,
    categories: string[],
    author: string,
    date: string
  };

  constructor() { }

  ngOnInit() {
  }

}
