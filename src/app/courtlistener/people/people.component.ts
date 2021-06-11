import { Component, OnInit } from '@angular/core';
import {CourtlistenerHttpService} from '../../courtlistener-http.service';
import { Person } from '../../models/person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  PEOPLE = new Array<Person>();
  constructor(private peopleService: CourtlistenerHttpService) { }

  ngOnInit(): void {
        this.peopleService.getPeople().subscribe(res => {
      this.PEOPLE = res;
  });
}
}
