import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-article-small',
  templateUrl: './article-small.component.html',
  styleUrls: ['article-small.component.scss']
})
export class ArticleSmallComponent implements OnInit {

  @Input() article;

  constructor() { }

  ngOnInit() {
  }

}
