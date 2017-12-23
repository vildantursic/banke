import { AfterViewInit, Component } from '@angular/core';
import { allArticles } from '../home/articles'
import { ActivatedRoute } from "@angular/router";

declare let jQuery: any;

import Helpers from "../../helpers/helper";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements AfterViewInit {

  article;
  slug = '';
  video = [];
  column = [];
  globalNews = [];
  images = ['assets/images/unicredit_logo.svg', 'assets/images/unicredit_logo.svg', 'assets/images/unicredit_logo.svg']

  constructor(private route: ActivatedRoute, private helpers: Helpers) {
    route.params.subscribe(params => {
      this.slug = params['slug'];
      allArticles.forEach(article => {
        if (this.slug == article.slug) {
          this.article = article;
        }
      })
    });
  }

  ngAfterViewInit() {
    jQuery('.ui.sticky')
      .sticky({
        offset       : 450,
        bottomOffset : 50,
        context: '#context'
      })

    setTimeout(() => {
      console.log(this.helpers.getCategoryArticles(allArticles, 'video'))
      this.video = this.helpers.getCategoryArticles(allArticles, 'video');
      this.column = this.helpers.getCategoryArticles(allArticles, 'column');
      this.globalNews = this.helpers.getCategoryArticles(allArticles, 'globalNews');
    })
  }

}
