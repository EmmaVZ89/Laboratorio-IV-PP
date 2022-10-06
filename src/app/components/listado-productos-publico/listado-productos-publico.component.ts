import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { EntidadesService } from 'src/app/services/entidades.service';

@Component({
  selector: 'app-listado-productos-publico',
  templateUrl: './listado-productos-publico.component.html',
  styleUrls: ['./listado-productos-publico.component.scss'],
})
export class ListadoProductosPublicoComponent implements OnInit {
  listadoProductos: Producto[] = [];
  listadoPublico: Producto[] = [];
  constructor(private entidadesService: EntidadesService) {}

  ngOnInit(): void {
    this.entidadesService.traerProductos().subscribe((productos) => {
      if (productos != null) {
        this.listadoProductos = productos;
        this.listadoPublico = this.listadoProductos.filter((p) => {
          return p.stock > 0;
        });
      }
    });
  }
}
