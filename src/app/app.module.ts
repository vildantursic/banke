import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxPaginationModule } from 'ngx-pagination';

import {AppRoutingModule} from './app.router';
import {SharedModule} from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';

import { FiltersService } from './services/filters/filters.service';
import {BlogService} from './services/blog/blog.service';
import {MainService} from './services/main.service';
import {HttpClientModule} from '@angular/common/http';
import {HelperService} from './services/helpers/helpers.service';
import {GeneralService} from './services/general/general.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgxPaginationModule,
  ],
  providers: [
    FiltersService,
    MainService,
    HelperService,
    BlogService,
    GeneralService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
