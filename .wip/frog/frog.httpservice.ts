import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Frog from './frog.model';

@Injectable({
  providedIn: 'root'
})
export class FrogHttpService {
  // private ApiURL: string = 'https://localhost:44308/api/Frog';
  // private ApiURL: string = 'https://thisisgalveston.hasura.app/api/rest/frogs';
    private ApiURL: string = 'https://autofixlist.com/api/frogs';
  l
  constructor(private httpclient: HttpClient) {}

  getFrogs(): Observable<Frog[]> {
    return this.httpclient.get<Frog[]>(this.ApiURL);
  }

  createFrogs(payload: Frog): Observable<Frog> {
    return this.httpclient.post<Frog>(this.ApiURL, JSON.stringify(payload), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
