import {Component, AfterViewInit, OnInit} from '@angular/core';
import {FiltersService} from '../../services/filters/filters.service';
import {cloneDeep, filter} from 'lodash';

declare let jQuery: any;

import {BlogService} from "../../services/blog/blog.service";
import {GeneralService} from "../../services/general/general.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnInit {

  allFilters = [];
  searchArticles = '';

  p;

  articles = [];
  video = [];
  column = [];
  interviews = [];
  lifestyle = [];

  partners = {
    bank: [],
    leasing: [],
    insurance: [],
    microcredit: []
  };
  ads = [];

  topArticles = [];

  constructor(private filterService: FiltersService,
              private blogService: BlogService,
              private generalService: GeneralService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => this.p = params['page']);
    this.getAds();
    this.getBlogs();
    this.getPartners();
  }

  ngAfterViewInit() {
    jQuery('.ui.sticky')
      .sticky({
        offset: 150,
        bottomOffset: 50,
        context: '#context'
      })

    document.getElementsByClassName('')

    setTimeout(() => {
      this.filterService.getMessage().subscribe(filter => {
        if (filter) {
          this.allFilters.push(filter);
        } else {
          this.allFilters = [];
        }
      });
    })
  }

  getBlogs(): void {
    this.blogService.getBlogs().subscribe((response: any) => {
      this.articles = response;
      this.topArticles = this.articles.filter(article => article.topNews ? article : null);
      this.video = this.getCategoryArticles(this.articles, 'video');
      this.column = this.getCategoryArticles(this.articles, 'kolumne');
      this.column = this.column.concat(this.getCategoryArticles(this.articles, 'analize'));
      this.interviews = this.getCategoryArticles(this.articles, 'interviews');
      this.lifestyle = this.getCategoryArticles(this.articles, 'lifestyle');
    })
  }

  getAds(): void {
    this.generalService.getAds().subscribe((response: any) => {
      this.ads = response[0].data;
    })
  }

  getPartners(): void {
    this.generalService.getPartners().subscribe((response: any) => {
      response.forEach(item => {
        if (item.type === 'bank') {
          this.partners.bank.push(item);
        } else if (item.type === 'leasing') {
          this.partners.leasing.push(item);
        } else if (item.type === 'microcredit') {
          this.partners.microcredit.push(item);
        } else {
          this.partners.insurance.push(item);
        }
      })
    })
  }

  onPageChanged(event) {
    window.scrollTo(0, 0);
    this.router.navigate(['home'], {queryParams: {page: event}})
    return event;
  }

  getCategoryArticles(articles, type) {
    const tempArticles = cloneDeep(articles);
    return tempArticles.filter(article => filter(article.categories, (category) => category === type).length > 0)
  }

  setAd(section, number) {
    if (this.ads.length !== 0) {
      const ad = [0, number];

      if (section === 'top') {
        ad[0] = 0;
      } else {
        ad[0] = 1;
      }

      if (this.ads[ad[0]].ads[ad[1]]) {
        return {'background-image': `url(${ this.ads[ad[0]].ads[ad[1]].active ? this.ads[ad[0]].ads[ad[1]].image : '' })`}
      } else {
        return ''
      }
    }
  }
}
