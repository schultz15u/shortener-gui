import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import {Observable} from 'rxjs/Observable';
import {of} from "rxjs/observable/of";

@Injectable()
export class DataRetrieverService {

  selected: number;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any>{
    return this.http.get('http://cnt.wkil.pw/s/entry/list').map(data => data['entries']);
  }

  addNew(url: string, shortName: string) {
    console.log(JSON.stringify({'host': 'cnt.wkil.pw', 'shortname': shortName, 'target': url}));
    return of("ok");
  }

  getById(searchedId): Observable<any> {
    return this.getAll().flatMap(data => data).filter(item => item['_id'] === searchedId);
  }

}
