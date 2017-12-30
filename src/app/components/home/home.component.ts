import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FiltersService } from '../../services/filters/filters.service';
import { cloneDeep, filter } from 'lodash';

declare let jQuery: any;

import { allAds } from './ads'
import {BlogService} from "../../services/blog/blog.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnInit {

  allFilters = ['all'];

  p;

  articles = [];
  video = [];
  column = [];
  globalNews = [];

  banks = [];
  ads = allAds;

  constructor(private filterService: FiltersService, private blogService: BlogService) { }

  ngOnInit() {
    for (let i = 4; i <= this.articles.length; i += 4) {
      this.articles.splice(i, 0, {
        slug: 'ad'
      })
    }
  }

  ngAfterViewInit() {
    this.getBlogs();

    jQuery('.ui.sticky')
      .sticky({
        offset       : 150,
        bottomOffset : 50,
        context: '#context'
      })

    document.getElementsByClassName('')

    setTimeout(() => {
      this.filterService.getMessage().subscribe(filter => {
        this.allFilters = [filter];
      });


      this.banks = [
        {
          id: 0,
          active: true,
          path: 'assets/images/banks/addiko.png'
        },
        {
          id: 0,
          active: true,
          path: 'assets/images/banks/asa.jpg'
        },
        {
          id: 0,
          active: true,
          path: 'assets/images/banks/bbi.png'
        },
        {
          id: 0,
          active: true,
          path: 'assets/images/banks/nlb.jpg'
        }
      ]
    })
  }

  getBlogs(): void {
    this.blogService.getBlogs().subscribe((response: any) => {
      this.articles = response;
      this.video = this.getCategoryArticles(this.articles, 'video');
      this.column = this.getCategoryArticles(this.articles, 'column');
      this.globalNews = this.getCategoryArticles(this.articles, 'globalNews');
    })
  }

  filterNewsOnHeaderSelect(event): void {
    this.filterService.clearMessage();
    this.filterService.sendMessage(event);
  }

  onPageChanged(event) {
    window.scrollTo(0, 0);
    return event;
  }

  getCategoryArticles(articles, type) {
    const tempArticles = cloneDeep(articles);
    return tempArticles.filter(article => filter(article.categories, (category) => category === type).length > 0)
  }
}
