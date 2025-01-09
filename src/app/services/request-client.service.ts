import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ItemSummary} from '../model/ItemSummary';

@Injectable({
  providedIn: 'root'
})
export class RequestClientService {

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<ItemSummary[]>
  {
    return this.http.get<ItemSummary[]>("/api/items");
  }


}
