import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxPaginationModule } from 'ngx-pagination';

import {AppRoutingModule} from './app.router';
import {SharedModule} from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';

import { FilterNewsPipe } from './pipes/filter-news/filter-news.pipe';

import { FiltersService } from './services/filters/filters.service';

import Helpers from "./helpers/helper";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    FilterNewsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgxPaginationModule
  ],
  providers: [
    FiltersService,
    { provide: Helpers, useClass: Helpers }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
