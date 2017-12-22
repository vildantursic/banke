import {Component, AfterViewInit, OnInit} from '@angular/core';
import {FiltersService} from "../../services/filters/filters.service";
import { cloneDeep } from 'lodash';
declare let jQuery: any;

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

  constructor(private filterService: FiltersService) { }

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
      this.articles = [
        {
          image: 'assets/images/steve.jpg',
          slug: 'neka_vijest',
          title: 'Neka vijest',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse facere itaque nemo quam soluta voluptate! Aliquid asperiores aut consequuntur eos laborum mollitia quaerat sequi voluptatibus?',
          categories: [
            'finansije', 'banke', 'column'
          ],
          date: '29.07.1989',
          author: 'Irma Rustemovic'
        },
        {
          image: 'assets/images/steve.jpg',
          slug: 'neka_vijest',
          title: 'Neka vijest',
          content: 'Lorem ipsum dolor sit amet,speriores aut consequuntur eos laborum mollitia quaerat sequi voluptatibus?',
          categories: [
            'biznis', 'finansije', 'banke', 'interviews', 'video'
          ],
          date: '19.04.1993',
          author: 'Vildan Tursic'
        },
        {
          image: 'assets/images/steve.jpg',
          slug: 'neka_vijest',
          title: 'Neka vijest',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum delenere itaque nemo quam soluta voluptate! Aliq eos laborum mollitia quaerat sequi voluptatibus?',
          categories: [
            'biznis', 'banke', 'column'
          ],
          date: '19.04.1993',
          author: 'Vildan Tursic'
        },
        {
          image: 'assets/images/steve.jpg',
          slug: 'neka_vijest',
          title: 'Neka vijest',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus?',
          categories: [
            'banke', 'video'
          ],
          date: '29.07.1989',
          author: 'Irma Rustemovic'
        },
        {
          image: 'assets/images/steve.jpg',
          slug: 'neka_vijest',
          title: 'Neka vijest',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus?',
          categories: [
            'banke', 'video'
          ],
          date: '29.07.1989',
          author: 'Irma Rustemovic'
        },
        {
          image: 'assets/images/steve.jpg',
          slug: 'neka_vijest',
          title: 'Neka vijest',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus?',
          categories: [
            'banke', 'interviews'
          ],
          date: '29.07.1989',
          author: 'Irma Rustemovic'
        },
        {
          image: 'assets/images/steve.jpg',
          slug: 'neka_vijest',
          title: 'Neka vijest',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus?',
          categories: [
            'banke', 'globalNews'
          ],
          date: '29.07.1989',
          author: 'Irma Rustemovic'
        },
        {
          image: 'assets/images/steve.jpg',
          slug: 'neka_vijest',
          title: 'Neka vijest',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus?',
          categories: [
            'banke', 'globalNews'
          ],
          date: '29.07.1989',
          author: 'Irma Rustemovic'
        },
        {
          image: 'assets/images/steve.jpg',
          slug: 'neka_vijest',
          title: 'Neka vijest',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus?',
          categories: [
            'banke', 'interviews', 'video', 'globalNews'
          ],
          date: '29.07.1989',
          author: 'Irma Rustemovic'
        },
        {
          image: 'assets/images/steve.jpg',
          slug: 'neka_vijest',
          title: 'Neka vijest',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus?',
          categories: [
            'banke'
          ],
          date: '29.07.1989',
          author: 'Irma Rustemovic'
        },
        {
          image: 'assets/images/steve.jpg',
          slug: 'neka_vijest',
          title: 'Neka vijest',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus?',
          categories: [
            'banke', 'interviews', 'video', 'column'
          ],
          date: '29.07.1989',
          author: 'Irma Rustemovic'
        },
        {
          image: 'assets/images/steve.jpg',
          slug: 'neka_vijest',
          title: 'Neka vijest',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus?',
          categories: [
            'banke', 'globalNews'
          ],
          date: '29.07.1989',
          author: 'Irma Rustemovic'
        },
        {
          image: 'assets/images/steve.jpg',
          slug: 'neka_vijest',
          title: 'Neka vijest',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus?',
          categories: [
            'banke', 'interviews', 'globalNews'
          ],
          date: '29.07.1989',
          author: 'Irma Rustemovic'
        },
        {
          image: 'assets/images/steve.jpg',
          slug: 'neka_vijest',
          title: 'Neka vijest',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus? psum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti eius eos esse fauuntur eos laborum mollitia quaerat sequi voluptatibus?',
          categories: [
            'banke', 'column', 'globalNews'
          ],
          date: '29.07.1989',
          author: 'Irma Rustemovic'
        }
      ]
      console.log(this.getCategoryArticles(this.articles, 'video'))
      this.video = this.getCategoryArticles(this.articles, 'video');
      this.column = this.getCategoryArticles(this.articles, 'column');
      this.globalNews = this.getCategoryArticles(this.articles, 'globalNews');

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

  getCategoryArticles(articles, type) {
    let tempArticles = cloneDeep(articles);
    console.log(tempArticles.filter(article => !!article.categories.reduce(category => category === type)))
    // return tempArticles.filter(article => !!article.categories.reduce(category => category === type))
    return tempArticles
  }
}
