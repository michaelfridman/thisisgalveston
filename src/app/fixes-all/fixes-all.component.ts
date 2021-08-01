import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Fix} from '../models/fix';

@Component({
  selector: 'app-fixes-all',
  templateUrl: './fixes-all.component.html',
  styleUrls: ['./fixes-all.component.css']
})
export class FixesAllComponent implements OnInit {

  constructor(private dataService: DataService) { }

  fixes?: Fix[];
  ngOnInit(): void {
    this.showFixes();
  }

  showFixes(): void {
      this.dataService.getFixes()
      .subscribe(
        data => {
          this.fixes = data;
          console.log(this.fixes);
        },
        error => {
          console.log(error);
        });
}

}
