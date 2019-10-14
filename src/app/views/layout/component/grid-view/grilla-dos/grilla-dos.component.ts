import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Handsontable from 'handsontable';


export interface Config {
  heroesUrl: string;
  textfile: string;
}
@Component({
  selector: 'app-grilla-dos',
  templateUrl: './grilla-dos.component.html',
  styleUrls: ['./grilla-dos.component.scss']
})
export class GrillaDosComponent implements OnInit {

  @Input() header;
  @Input() data;


  dataset;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.showConfig();
  }

  getConfig() {
    return this.http.get('assets/Q_IF.json');
  }

  showConfig() {
    this.getConfig()
      .subscribe((data: Config) => {
        console.log(data)
        this.dataset = data
      });
  }

}
