import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import json from 'highlight.js/lib/languages/json';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// TODO: need to load multiple
// import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ErrorComponent } from './pages/error/error.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ExternalApiComponent } from './pages/external-api/external-api.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { FormsModule } from '@angular/forms';

import { FixesAllComponent } from './fixes-all/fixes-all.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ArticleListComponent } from './article-list/article-list.component';

import { FixesSearchComponent } from './fixes-search/fixes-search.component';
import { FixComponent } from './fix/fix.component';
import { Data } from './data-provider';

import { ArticleComponent } from './article/article.component';
import { SearchComponent } from './search/search.component';

import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { MapboxComponent } from './mapbox/mapbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FrogComponent } from './frog/components/frog.component';
import { FrogEffects } from './frog/frog.effects';
import { FrogReducer } from './frog/frog.reducer';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    FrogComponent,
    FixesAllComponent,
    LoginComponent,
    WelcomeComponent,
    ArticleListComponent,
    ArticleComponent,
    SearchComponent,
    FixesSearchComponent,
    FixComponent,
    BootstrapComponent,
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NavBarComponent,
    FooterComponent,
    LoadingComponent,
    ExternalApiComponent,
    ErrorComponent,
    MapboxComponent
  ],
  imports: [
    StoreModule.forRoot({ frogs: FrogReducer }),
    EffectsModule.forRoot([FrogEffects]),
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    HighlightModule,
    FontAwesomeModule,
    AuthModule.forRoot({ ...env.auth, httpInterceptor: { ...env.httpInterceptor, }, }),
    BrowserAnimationsModule,
  ],
  providers: [Data,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
    {
      provide: Window,
      useValue: window,
    },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/highlight'),
        languages: {
          json: () => import('highlight.js/lib/languages/json'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
