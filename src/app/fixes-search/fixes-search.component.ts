import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Fix } from '../models/fix';

@Component({
  selector: 'app-fixes-search',
  templateUrl: './fixes-search.component.html',
  styleUrls: ['./fixes-search.component.css']
})
export class FixesSearchComponent implements OnInit {
  searchResults: Fix[] = [];
  searchTitle: String = '';
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService) { }
  searchParams = {
    manufacturer: String,
    modelName: String,
    modelCode: String
  };
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchParams.manufacturer = params['make'];
      this.searchParams.modelName = params['model'];
      this.searchParams.modelCode = params['code'];
      console.log(this.searchParams);
      this.loadResults(this.searchParams);
    });
  }
  loadResults(queryParams: any) {
    console.log(queryParams);
    this.dataService.getSearchQParams(queryParams)
      .subscribe(
        data => {
          this.searchResults = data[0];
          this.searchTitle = data[1];
          console.log(data);
          console.log(this.searchResults);
        },
        error => {
          console.log(error);
        });

  }
}
