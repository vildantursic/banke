import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ArticleComponent } from './article/article.component';
import { ArticleSmallComponent } from './article-small/article-small.component';
import { ArticleMainComponent } from './article-main/article-main.component';
import { SocialComponent } from './social/social.component';
import { PartnersComponent } from './partners/partners.component';
import { SliderComponent } from './slider/slider.component';
import { MiniHeaderComponent } from './mini-header/mini-header.component';
import { KolumnaComponent } from './kolumna/kolumna.component';
import { GlobalNewsComponent } from './global-news/global-news.component';
import { MiniSliderComponent } from './mini-slider/mini-slider.component';
import { MagazineComponent } from './magazine/magazine.component';
import {TextCutPipe} from "../pipes/filter-news/filter-news.pipe";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ArticleComponent,
    ArticleSmallComponent,
    ArticleMainComponent,
    SocialComponent,
    PartnersComponent,
    SliderComponent,
    MiniHeaderComponent,
    KolumnaComponent,
    GlobalNewsComponent,
    MiniSliderComponent,
    MagazineComponent,
    TextCutPipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ArticleComponent,
    ArticleSmallComponent,
    ArticleMainComponent,
    SocialComponent,
    PartnersComponent,
    SliderComponent,
    MiniHeaderComponent,
    KolumnaComponent,
    GlobalNewsComponent,
    MiniSliderComponent,
    MagazineComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class SharedModule { }
