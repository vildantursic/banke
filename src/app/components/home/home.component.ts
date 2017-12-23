import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FiltersService } from "../../services/filters/filters.service";
import { cloneDeep } from 'lodash';

declare let jQuery: any;

import Helpers from "../../helpers/helper";
import { allArticles } from './articles'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnInit {

  articles = [];
  video = [];
  column = [];
  globalNews = [];

  banks = []

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

  getFilters(): Array<any> {
    return this.filterService.getFilters();
  }

  onPageChanged(event) {
    window.scrollTo(0, 0);
    return event;
  }


}
