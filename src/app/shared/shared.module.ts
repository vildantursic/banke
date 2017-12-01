import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ArticleComponent } from './article/article.component';
import { ArticleSmallComponent } from './article-small/article-small.component';
import { ArticleMainComponent } from './article-main/article-main.component';
import { SocialComponent } from './social/social.component';
import { PartnersComponent } from './partners/partners.component';

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
    PartnersComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ArticleComponent,
    ArticleSmallComponent,
    ArticleMainComponent,
    SocialComponent,
    PartnersComponent
  ]
})
export class SharedModule { }
