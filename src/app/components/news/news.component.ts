import { AfterViewInit, Component } from '@angular/core';
import { allArticles } from '../home/articles'
import { ActivatedRoute } from "@angular/router";
import { cloneDeep, filter } from 'lodash';

declare let jQuery: any;

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

  constructor(private route: ActivatedRoute) {
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
      console.log(this.getCategoryArticles(allArticles, 'video'))
      this.video = this.getCategoryArticles(allArticles, 'video');
      this.column = this.getCategoryArticles(allArticles, 'column');
      this.globalNews = this.getCategoryArticles(allArticles, 'globalNews');
    })
  }

  getCategoryArticles(articles, type) {
    const tempArticles = cloneDeep(articles);
    return tempArticles.filter(article => filter(article.categories, (category) => category === type).length > 0)
  }
}
