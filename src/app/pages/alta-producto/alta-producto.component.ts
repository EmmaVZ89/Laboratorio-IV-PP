import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.scss']
})
export class AltaProductoComponent implements OnInit {

  paisSeleccionado:any;
  
  constructor() { }

  ngOnInit(): void {
  }

  tomarPaisSeleccionado(event: any) {
    this.paisSeleccionado = event;
  }
}
