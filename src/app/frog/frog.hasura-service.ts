import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Frog from './frog.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HasuraService {
  // private ApiURL: string = 'https://localhost:44308/api/Frog';
  // private ApiURL: string = 'https://thisisgalveston.hasura.app/api/rest/frogs';
  private ApiCreateURL: string = 'https://thisisgalveston.hasura.app/api/rest/frog-new3';
  // private ApiURL: string = 'https://autofixlist.com/api/frogs';
  private ApiURL: string = './assets/frogs.json';

  constructor(private httpclient: HttpClient) { }

  getFrogs(): Observable<Frog[]> {
    return this.httpclient.get<Frog[]>(this.ApiURL);
  }

  getFrogsHasura(): Observable<Frog[]> {
    console.log(this.ApiURL);
    return this.httpclient.get<Frog[]>(this.ApiURL,
            {headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': environment.hasura.ADMIN_SECRET
      }});
  }

  createFrogs(frog: Frog): Observable<Frog> {
      let o = {object: frog};
      console.log(o);
      return this.httpclient.post<Frog>(this.ApiCreateURL, JSON.stringify(o), {
      headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': environment.hasura.ADMIN_SECRET
      }
    });
  }
}
