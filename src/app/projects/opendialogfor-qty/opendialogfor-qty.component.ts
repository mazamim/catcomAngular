import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RatecardComponent, DialogData } from 'src/app/ratecard/ratecard/ratecard.component';

@Component({
  selector: 'app-opendialogfor-qty',
  templateUrl: './opendialogfor-qty.component.html',
  styleUrls: ['./opendialogfor-qty.component.scss']
})
export class OpendialogforQTYComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<OpendialogforQTYComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
