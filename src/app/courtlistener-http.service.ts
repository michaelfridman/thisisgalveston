import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Person } from './models/person';
@Injectable({
  providedIn: 'root'
})

export class CourtlistenerHttpService {

  private API: string = 'https://www.courtlistener.com/api/rest/v3/people/';

  constructor(private httpClient: HttpClient) { }

  getPeople(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(`${this.API}`)
  }

  // Error handling
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
