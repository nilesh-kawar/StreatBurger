import { Component, OnInit } from '@angular/core';
import { Table } from '../../Tables';

@Component({
  selector: 'app-table-status',
  templateUrl: './table-status.component.html',
  styleUrls: ['./table-status.component.css']
})
export class TableStatusComponent implements OnInit {
  tables:Table[] | undefined;
  constructor() { 
    this.tables = [
      {
        tableNo: 1,
        tableName: 'Mesa #1',
        active: true,
        paymentStatus: false
      },
      {
        tableNo: 2,
        tableName: 'Mesa #2',
        active: true,
        paymentStatus: false
      },
      {
        tableNo: 3,
        tableName: 'Mesa #3',
        active: false,
        paymentStatus: false
      },
      {
        tableNo: 4,
        tableName: 'Mesa #4',
        active: true,
        paymentStatus: false
      },
      {
        tableNo: 5,
        tableName: 'Mesa #5',
        active: false,
        paymentStatus: true
      },
      {
        tableNo: 6,
        tableName: 'Mesa #6',
        active: true,
        paymentStatus: false
      },
      {
        tableNo: 7,
        tableName: 'Mesa #7',
        active: false,
        paymentStatus: false
      },
      {
        tableNo: 12,
        tableName: 'Mesa #12',
        active: false,
        paymentStatus: true
      }
    ]
  }

  changeStatus(tableNo: any){
    if (this.tables) {
      let table = this.tables.filter(x=>x.tableNo === tableNo)[0];
      if(table.active === false){
        table.active = true;
      }
    }
  }
  moveToInactive(tableNo: any){
    if (this.tables) {
      let table = this.tables.filter(x=>x.tableNo === tableNo)[0];
      if(table.paymentStatus === true){
        table.paymentStatus = false;
        table.active = false;
      }
    }
  }

  ngOnInit(): void {
  }

}
