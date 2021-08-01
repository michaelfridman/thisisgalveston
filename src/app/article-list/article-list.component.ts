import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Article} from '../models/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(private dataService: DataService) { }

  articles?: Article[];
  ngOnInit(): void {
    this.showArticles();
  }

  showArticles(): void {
      this.dataService.getArticles()
      .subscribe(
        data => {
          this.articles = data;
          console.log(this.articles);
        },
        error => {
          console.log(error);
        });
}

}
