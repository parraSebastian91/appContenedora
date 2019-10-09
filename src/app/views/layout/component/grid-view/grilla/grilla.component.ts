import { Component, OnInit, Input } from '@angular/core';

import { ColumnConfig } from 'material-dynamic-table';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.scss']
})
export class GrillaComponent implements OnInit {


  columns: ColumnConfig[];

  data1: object[];

  dataSource;

  @Input() header;
  @Input() data;

  constructor() {

  }

  ngOnInit() {
    this.columns = this.header
    this.data1 = this.data;
    this.dataSource = this.data1;
  }

}

