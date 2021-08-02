import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ExternalApiComponent } from './pages/external-api/external-api.component';
import { ErrorComponent } from './pages/error/error.component';
import { AuthGuard } from '@auth0/auth0-angular';

import { FixesAllComponent } from './fixes-all/fixes-all.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ArticleComponent } from './article/article.component';
import { SearchComponent } from './search/search.component';
import { FixesSearchComponent } from './fixes-search/fixes-search.component';
import { FixComponent } from './fix/fix.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { MapboxComponent } from './mapbox/mapbox.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'external-api',
    component: ExternalApiComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  // {
  //   path: '',
  //   component: HomeComponent,
  //   pathMatch: 'full',
  // },
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'mapbox', component: MapboxComponent },
  { path: 'bootstrap', component: BootstrapComponent },
  { path: 'fixes-all', component: FixesAllComponent },
  { path: 'search/:keyword', component: SearchComponent },
  { path: 'search', component: SearchComponent },
  { path: 'fixes-search', component: FixesSearchComponent },
  { path: 'article-list', component: ArticleListComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'fix/:id', component: FixComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
