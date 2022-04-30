import { Component, OnInit, Output} from '@angular/core';
import { Table } from '../../Tables';
@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.css']
})
export class TableDetailsComponent implements OnInit {
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
        paymentStatus: false
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
        paymentStatus: false
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

  ngOnInit(): void {
  }

}
