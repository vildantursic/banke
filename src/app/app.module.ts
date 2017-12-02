import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app.router';
import {SharedModule} from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';

import { FilterNewsPipe } from './pipes/filter-news/filter-news.pipe';

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
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
