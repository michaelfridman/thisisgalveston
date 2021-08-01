import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {Fix} from './models/fix';
import {Article} from './models/article';
import {Mix} from './models/mix';



@Injectable({
  providedIn: 'root'
})
export class DataService {

// https://myapp-eg-7zyuq.ondigitalocean.app/api/fixes
// https://myapp-eg-7zyuq.ondigitalocean.app/api/articles
// options: {
//     headers?: HttpHeaders | {[header: string]: string | string[]},
//     observe?: 'body' | 'events' | 'response',
//     params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
//     reportProgress?: boolean,
//     responseType?: 'arraybuffer'|'blob'|'json'|'text',
//     withCredentials?: boolean,
//   }
fixesUrl = 'https://myapp-eg-7zyuq.ondigitalocean.app/api/fixes';
articlesUrl = 'https://myapp-eg-7zyuq.ondigitalocean.app/api/articles';
searchUrl = 'https://myapp-eg-7zyuq.ondigitalocean.app/api/search';
// TODO: need Nick for CORS
// fixesUrl = 'assets/fixes.json';


getFixes(): Observable<Fix[]> {
  return this.http.get<Fix[]>(this.fixesUrl).pipe(map((result:any)=>result.data));
}

getArticles(): Observable<Article[]> {
  return this.http.get<Article[]>(this.articlesUrl).pipe(map((result:any)=>result.data));
}

getFix(id: string): Observable<Fix[]> {
  return this.http.get<Fix[]>(this.fixesUrl + '/' + id.toString()).pipe(map((result:any)=>result.data));
}

getArticle(id: string): Observable<Article[]> {
  return this.http.get<Article[]>(this.articlesUrl + '/' + id.toString()).pipe(map((result:any)=>result.data));
}

getSearch(keyword: string): Observable<any[]> {
  return this.http.get<Article[]>(this.searchUrl + '/' + keyword.toString()).pipe(map((result:any)=>result.data));
}

postSearch(keyword: string): Observable<any[]> {
  return this.http.post<Mix[]>(this.searchUrl,keyword).pipe(map((result:any)=>{
    console.log(result);
    return result;
  }));
}
getSearchQParams(queryParams:any): Observable<any[]> {
let params = new HttpParams()
    .set('manufacturer', queryParams.manufacturer)
    .set('modelName', queryParams.modelName)
    .set('modelCode', queryParams.modelCode);
      // TODO: Note: console.log(params.toString()); //Returns page=3&sort=name
  return this.http.get<Fix[]>(this.searchUrl + '?' + params.toString()).pipe(map((result:any)=>{
    console.log(result);
    return [result.data, result.title]
  }));
}
  constructor(private http: HttpClient) { }
}
