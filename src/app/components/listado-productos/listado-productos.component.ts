import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { EntidadesService } from 'src/app/services/entidades.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.scss'],
})
export class ListadoProductosComponent implements OnInit {
  @Output() PasamosUnProducto: EventEmitter<Producto> =
    new EventEmitter<Producto>();

  listadoProductos: Producto[] = [];

  constructor(private entidadesService: EntidadesService) {}

  ngOnInit(): void {
    this.entidadesService.traerProductos().subscribe((productos) => {
      if (productos != null) {
        this.listadoProductos = productos;
      }
    });
  }

  pasarProducto(event: any) {
    this.PasamosUnProducto.emit(event);
  }
}
