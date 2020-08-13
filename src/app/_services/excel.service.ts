import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IProject } from '../_model/project';
import { Contact } from '../projects/add-bulk-ticket/add-bulk-ticket.component';
import { BulkRatecard } from '../_model/ratecard';


@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  public importFromFile(bstr: string): XLSX.AOA2SheetOpts {
    /* read workbook */
    const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

    /* grab first sheet */
    const wsname: string = wb.SheetNames[0];
    const ws: XLSX.WorkSheet = wb.Sheets[wsname];

    /* save data */
    const data = <XLSX.AOA2SheetOpts>(XLSX.utils.sheet_to_json(ws, { header: 1 }));

    return data;
  }

  AddbulkTickets(ticket: Contact[]) {

    return this.http.post<Contact>(this.baseUrl + 'addbulk', ticket );
}


AddbulkRatecard(ratecards: BulkRatecard[]) {

  return this.http.post<BulkRatecard>(this.baseUrl + 'addbulkratecard', ratecards);
}

}
