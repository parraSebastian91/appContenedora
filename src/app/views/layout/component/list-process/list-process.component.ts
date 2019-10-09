import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UploadDocComponent } from './../upload-doc/upload-doc.component'
import { Router } from '@angular/router';

export interface PeriodicElement {
  position: number;
  macro: string
  nombreProceso: string;
  estado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, nombreProceso: 'Pactos', macro: 'Cuadratura Online', estado: 'No Procesado' },
  { position: 1, nombreProceso: 'Pactos', macro: 'Cuadratura RF', estado: 'No Procesado' },
];

@Component({
  selector: 'app-list-process',
  templateUrl: './list-process.component.html',
  styleUrls: ['./list-process.component.scss'],
  providers: []
})
export class ListProcessComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) { }

  Procesos = "Procesos"

  displayedColumns: string[] = ['nombreProceso', 'macro', 'estado', 'action'];
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

  verProceso(macro) {
    switch (macro) {
      case "Cuadratura Online":
        this.Procesos = macro
        this.router.navigate(['view/layout/grid/cuadratura_online'])
        break;
      case "Cuadratura RF":
        this.Procesos = macro
        this.router.navigate(['view/layout/grid/cuadratura_rf'])
        break;
    }
  }

  ngOnInit() {

  }

}
