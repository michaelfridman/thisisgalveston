import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  public show: boolean = false;
  firstClick: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  toggle() {

    this.firstClick = false;
    this.show = !this.show;
  }


}
