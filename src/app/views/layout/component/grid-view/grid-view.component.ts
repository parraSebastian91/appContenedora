import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const lvl_online_IF = [
  {name:'Comparativo'},
  {name:'Q_IF'},
  {name:'Q_RF'},
  {name:'Q_PACTOS'},
  {name:'DCV'},
]

const lvl_Cuadratura_RF = [
  {name:'Resumen'},
  {name:'Cartera'},
  {name:'Custodia'},
  {name:'Q_PACTOS'}
]

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})

export class GridViewComponent implements OnInit {

  grid_type;
  tabs_OLRF = lvl_online_IF

  constructor(private rutaActiva: ActivatedRoute) { 
    this.grid_type = this.rutaActiva.snapshot.params.name
  }

  ngOnInit() {
    console.log(this.grid_type)
  }

}
