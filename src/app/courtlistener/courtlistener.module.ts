import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpinionsComponent } from './opinions/opinions.component';

import { HttpClientModule } from '@angular/common/http';
import { PeopleComponent } from './people/people.component';



@NgModule({
  declarations: [OpinionsComponent, PeopleComponent],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class CourtlistenerModule { }
