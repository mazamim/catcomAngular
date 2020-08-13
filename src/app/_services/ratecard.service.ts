import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BulkRatecard } from '../_model/ratecard';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RatecardService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }


  getAllRateCard(){
    return this.http.get<BulkRatecard[]>(this.baseUrl + 'ratecards');
  }
}
