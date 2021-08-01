import { Component, OnInit } from '@angular/core';
import { Fix } from '../models/fix';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { FixesAllComponent } from '../fixes-all/fixes-all.component';

@Component({
  selector: 'app-fix',
  templateUrl: './fix.component.html',
  styleUrls: ['./fix.component.css']
})
export class FixComponent implements OnInit {
  fix?: any;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.showFix(params['id']);
    });
  }
  showFix(id: string): void {
    this.dataService.getFix(id)
      .subscribe(
        (data) => {
          console.log(data);
          this.fix = data;
          console.log(this.fix);
        },
        (error: any) => {
          console.log(error);
        });
  }

}
