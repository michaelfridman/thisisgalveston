import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FixesAllComponent } from './fixes-all/fixes-all.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ArticleListComponent } from './article-list/article-list.component';

import { HttpClientModule } from '@angular/common/http';
import { ArticleComponent } from './article/article.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { FixesSearchComponent } from './fixes-search/fixes-search.component';
import { FixComponent } from './fix/fix.component';
import { Data } from './data-provider';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FixesAllComponent,
    LoginComponent,
    WelcomeComponent,
    ArticleListComponent,
    ArticleComponent,
    SearchComponent,
    FixesSearchComponent,
    FixComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Data],
  bootstrap: [AppComponent]
})
export class AppModule { }
