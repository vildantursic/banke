import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { cloneDeep, filter } from 'lodash';
import {BlogService} from "../../services/blog/blog.service";
import {GeneralService} from "../../services/general/general.service";
import {FiltersService} from "../../services/filters/filters.service";

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
  interviews = [];
  lifestyle = [];
  ads = [];
  partners = {
    bank: [],
    leasing: [],
    insurance: [],
    microcredit: []
  };
  images = ['assets/images/unicredit_logo.svg', 'assets/images/unicredit_logo.svg', 'assets/images/unicredit_logo.svg']

  constructor(private route: ActivatedRoute,
              private blogService: BlogService,
              private generalService: GeneralService) {
    route.params.subscribe(params => {
      this.slug = params['slug'];
      console.log(this.slug.normalize('NFKD').replace (/[\u0300-\u036F]/g, ''))
      this.getBlogs();
      this.getAds();
      this.getPartners();
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
      this.video = this.getCategoryArticles(this.articles, 'video');
      this.column = this.getCategoryArticles(this.articles, 'kolumne');
      this.column = this.column.concat(this.getCategoryArticles(this.articles, 'analize'));
      this.interviews = this.getCategoryArticles(this.articles, 'interviews');
    })
  }

  getBlogs(): void {
    this.blogService.getBlog(this.slug).subscribe((response: any) => {
      this.article = response[0];
    })
    this.blogService.getBlogs().subscribe((response: any) => {
      this.articles = response;
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

  getCategoryArticles(articles, type) {
    const tempArticles = cloneDeep(articles);
    return tempArticles.filter(article => filter(article.categories, (category) => category === type).length > 0)
  }
}
