import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BulkRatecard } from '../_model/ratecard';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatecardService {
  baseUrl = environment.apiUrl;

  private rateSource = new BehaviorSubject<boolean>(false);
  public rate$ = this.rateSource.asObservable();
  constructor(private http: HttpClient) { }


  getAllRateCard(){
    return this.http.get<BulkRatecard[]>(this.baseUrl + 'ratecards');
  }

setValaue(val:boolean){
  return this.rateSource.next(val);
}

}
