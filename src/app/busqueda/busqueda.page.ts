import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {
  
TipoAuto: any;
usoDiario: any;
presupuesto: any;
caracteristica: any;

recomendacion: any;




  constructor() { }

  ngOnInit() {
  }

}
