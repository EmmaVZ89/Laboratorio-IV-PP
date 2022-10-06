import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {

  productoActivo: Producto = new Producto(0, '', 0, 0, {}, false);

  constructor() { }

  ngOnInit(): void {
  }

  tomarProductoSeleccionado($event:any){
    this.productoActivo = $event;
  }
}
