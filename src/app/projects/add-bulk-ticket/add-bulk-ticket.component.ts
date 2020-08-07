import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/_services/excel.service';
import { ToastrService } from 'ngx-toastr';

export class Contact {
  address: string = "";
  jobType: string = "";
  describtion: string = "";
  status: string = "";
  remarks: string = "";
  cus_id : string = "";
  client_id : string = "";
}

@Component({
  selector: 'app-add-bulk-ticket',
  templateUrl: './add-bulk-ticket.component.html',
  styleUrls: ['./add-bulk-ticket.component.scss']
})
export class AddBulkTicketComponent implements OnInit {
  importContacts: Contact[] = [];


  constructor(private excelSrv: ExcelService,
    public toastr: ToastrService) { }

  ngOnInit(): void {


  }

  onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {

      const bstr: string = e.target.result;
      const data = <any[]>this.excelSrv.importFromFile(bstr);

      const header: string[] = Object.getOwnPropertyNames(new Contact());
      const importedData = data.slice(1, -1);

      this.importContacts = importedData.map(arr => {
        const obj = {};
        for (let i = 0; i < header.length; i++) {
          const k = header[i];
          obj[k] = arr[i];
        }
        return <Contact>obj;
      })

    };
    reader.readAsBinaryString(target.files[0]);

  }


  onSumbit(){
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.importContacts, null, 4));

    this.excelSrv.AddbulkTickets(this.importContacts).subscribe(data=>{
      this.toastr.success(' successfully Aded!');

    });
  }


}
