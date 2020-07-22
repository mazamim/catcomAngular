import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IClient } from '../_model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  GetClientList() {
    return this.http.get<IClient[]>(this.baseUrl + 'clients');
  }
  
  AddClient(data:IClient){

    return this.http.post<IClient>(this.baseUrl + 'clients', data );

  }

  DeleteClient(id: number) {

    return this.http.delete<IClient>(this.baseUrl + 'client/'+id);
  }
  
}
