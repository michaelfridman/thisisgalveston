import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from "@angular/router";
import { Fix } from '../models/fix';
import { Article } from '../models/article';

import { Mix } from '../models/mix';
import { Data } from '../data-provider';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  keyword: any = { keyword: '' };
  submitted = false;
  navigated2Search = false;
  searchTerm: String = ''
  searchResults!: Mix;
  resultsFixes!: Fix[];
  resultsArticles!: Article[];
  gotResults: boolean = false;
  constructor(
    private data: Data,
    private router: Router,
    private dataService: DataService) { }

  ngOnInit(): void {
    if (this.data.storage) {
      this.keyword.keyword = this.data.storage;
      this.loadResults();
      this.data.storage = '';
    }
  }

  loadResults() {
    this.dataService.postSearch(this.keyword)
      .subscribe(
        (data: any) => {
          this.gotResults = true;
          this.searchTerm = data.keywords;
          this.resultsFixes = data.data.fixes;
          this.resultsArticles = data.data.articles;
        },
        error => {
          console.log(error);
        });
  }

  doSearch(): any {
    this.data.storage = this.keyword.keyword.toString();
    this.searchTerm = this.keyword.keyword.toString();
    this.router.navigate(['/search/' + this.keyword.keyword]).then(() => {
      this.navigated2Search = true;
    });
  }
}
