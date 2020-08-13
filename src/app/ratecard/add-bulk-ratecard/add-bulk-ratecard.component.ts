import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ExcelService } from 'src/app/_services/excel.service';
import { CustomerService } from 'src/app/_services/customer.service';
import { BulkRatecard } from 'src/app/_model/ratecard';



@Component({
  selector: 'app-add-bulk-ratecard',
  templateUrl: './add-bulk-ratecard.component.html',
  styleUrls: ['./add-bulk-ratecard.component.scss']
})
export class AddBulkRatecardComponent implements OnInit {
  importBulkRatecard: BulkRatecard[] = [];
  constructor(private excelSrv: ExcelService,
    public toastr: ToastrService,
    private cusservice:CustomerService) { }

  ngOnInit(): void {
  }

  onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {

      const bstr: string = e.target.result;
      const data = <any[]>this.excelSrv.importFromFile(bstr);
     // console.log(data);
      const header: string[] = Object.getOwnPropertyNames(new BulkRatecard());
      const importedData = data.slice(1, -1);
      //console.log(importedData);
      this.importBulkRatecard = importedData.map(arr => {
        const obj = {};
        for (let i = 0; i < header.length; i++) {
          const k = header[i];
          obj[k] = arr[i];
        }
        return <BulkRatecard>obj;
      })

    };
    reader.readAsBinaryString(target.files[0]);

  }


  onSumbit(){
  //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.importBulkRatecard, null, 4));
//console.log(this.importBulkRatecard);
    this.excelSrv.AddbulkRatecard(this.importBulkRatecard).subscribe(data=>{
      this.toastr.success(' successfully Added!');
     this.cusservice.refresh();

    }, error=>{alert('ERROR!! :-)\n\n' + JSON.stringify(error.message, null, 4))});

}

}
