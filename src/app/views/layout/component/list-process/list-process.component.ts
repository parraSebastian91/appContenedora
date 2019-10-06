import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {UploadDocComponent} from './../upload-doc/upload-doc.component'

export interface PeriodicElement {
  position: number;
  nombreProceso: string;
  estado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nombreProceso: 'Pactos', estado: 'No Procesado'},
];

@Component({
  selector: 'app-list-process',
  templateUrl: './list-process.component.html',
  styleUrls: ['./list-process.component.scss'],
  providers:[]
})
export class ListProcessComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  displayedColumns: string[] = ['nombreProceso', 'estado', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog() {
    const dialogRef = this.dialog.open(UploadDocComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }

}
