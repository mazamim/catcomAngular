import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';

@Component({
  selector: 'app-customised-cell',
  templateUrl: './customised-cell.component.html',
  styleUrls: ['./customised-cell.component.scss']
})
export class CustomisedCellComponent implements OnInit,ICellRendererAngularComp {
cellvalue;
  constructor() { }
  refresh(params: any): boolean {
    this.cellvalue=params.value;

return true;
  }

  agInit(params: ICellRendererParams): void {
    this.cellvalue=params.value;



  }


  // afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
  //   throw new Error("Method not implemented.");
  // }

  ngOnInit(): void {
  }

}
