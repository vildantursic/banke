import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() article: {
    title: string,
    subtitle: string,
    suptitle: string,
    slug: string,
    content: string,
    categories: string[],
    author: string,
    date: string,
    image: string,
    topNews: boolean,
    created_at: string,
    updated_at: string
  };

  constructor() { }

  ngOnInit() {
  }

}
