import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixesAllComponent } from './fixes-all/fixes-all.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ArticleComponent } from './article/article.component';
import { SearchComponent } from './search/search.component';
import { FixesSearchComponent } from './fixes-search/fixes-search.component';
import { FixComponent } from './fix/fix.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
