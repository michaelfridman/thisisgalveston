import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {



  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

  }
// { queryParams: { page: 2 },  queryParamsHandling: "preserve"}
  doSearch(make:String, model: String, code: String): any {
    let searchParams = {
      make: make,
      model: model,
      code: code
    };
    this.router.navigate(['/fixes-search'], {queryParams: searchParams}).then(() => {
      console.log(searchParams)
    });

  }
}
