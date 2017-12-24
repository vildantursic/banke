import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FiltersService } from '../../services/filters/filters.service';
import { cloneDeep } from 'lodash';

declare let jQuery: any;

import Helpers from '../../helpers/helper';
import { allArticles } from './articles'
import { allAds } from './ads'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnInit {

  allFilters = ['all'];

  articles = [];
  video = [];
  column = [];
  globalNews = [];

  banks = [];
  ads = allAds;

  constructor(private filterService: FiltersService, private helpers: Helpers) { }

  ngOnInit() {
    for (let i = 4; i <= this.articles.length; i += 4) {
      this.articles.splice(i, 0, {
        slug: 'ad'
      })
    }
  }

  ngAfterViewInit() {
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
      this.articles = cloneDeep(allArticles);
      this.video = this.helpers.getCategoryArticles(this.articles, 'video');
      this.column = this.helpers.getCategoryArticles(this.articles, 'column');
      this.globalNews = this.helpers.getCategoryArticles(this.articles, 'globalNews');

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

  filterNewsOnHeaderSelect(event): void {
    this.filterService.clearMessage();
    this.filterService.sendMessage(event);
  }

  onPageChanged(event) {
    window.scrollTo(0, 0);
    return event;
  }


}
