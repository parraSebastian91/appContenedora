import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Router } from '@angular/router';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  nom_error = '¡ups!';
  cod_error = '404';
  descripcion = 'La página que intentas entrar no existe, ';
  seg = 5;
  faExclamationTriangle = faExclamationTriangle

  constructor(private router: Router) {

  }

  ngOnInit() {
    const secondsCounter = interval(1000);
    secondsCounter.subscribe(n => {
      this.seg -= 1;
      if (this.seg === 0) {
        this.router.navigate(['/view/page/login']);
      }
    });
  }

}
