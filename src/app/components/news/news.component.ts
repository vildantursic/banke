import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { cloneDeep, filter } from 'lodash';
import {BlogService} from "../../services/blog/blog.service";

declare let jQuery: any;

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements AfterViewInit {

  articles = [];
  article;
  slug = '';
  video = [];
  column = [];
  globalNews = [];
  images = ['assets/images/unicredit_logo.svg', 'assets/images/unicredit_logo.svg', 'assets/images/unicredit_logo.svg']

  constructor(private route: ActivatedRoute, private blogService: BlogService) {
    route.params.subscribe(params => {
      this.slug = params['slug'];
      console.log(this.slug.normalize("NFKD").replace (/[\u0300-\u036F]/g, ""))
      this.getBlogs();
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
      console.log(this.getCategoryArticles(this.articles, 'video'))
      this.video = this.getCategoryArticles(this.articles, 'video');
      this.column = this.getCategoryArticles(this.articles, 'column');
      this.globalNews = this.getCategoryArticles(this.articles, 'globalNews');
    })
  }

  getBlogs(): void {
    this.blogService.getBlog(this.slug).subscribe((response: any) => {
      this.article = response[0];
    })
    this.blogService.getBlogs().subscribe((response: any) => {
      this.articles = response;
      this.video = this.getCategoryArticles(this.articles, 'video');
      this.column = this.getCategoryArticles(this.articles, 'column');
      this.globalNews = this.getCategoryArticles(this.articles, 'globalNews');
    })
  }


  getCategoryArticles(articles, type) {
    const tempArticles = cloneDeep(articles);
    return tempArticles.filter(article => filter(article.categories, (category) => category === type).length > 0)
  }
}
