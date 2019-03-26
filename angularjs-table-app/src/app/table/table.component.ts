import { Component, OnInit } from '@angular/core';
import { TableService } from '../service/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public data = [];
  public select = 'null';
  constructor(
    private tableService: TableService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.data = this.tableService.getAll();
  }

}
