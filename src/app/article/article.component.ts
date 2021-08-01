import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Article } from '../models/article';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { pluck, switchMap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {


  articles?: Article[];
  constructor(private dataService: DataService, private route: ActivatedRoute) {

  }

  ngOnInit() {
   this.route.params.subscribe(params => {
     this.showArticle(params['id']);
   });

  }

  showArticle(id: string): void {
    this.dataService.getArticle(id)
      .subscribe(
        (data: any) => {
          this.articles = data;
          console.log(this.articles);
        },
        (error: any) => {
          console.log(error);
        });
  }

}
