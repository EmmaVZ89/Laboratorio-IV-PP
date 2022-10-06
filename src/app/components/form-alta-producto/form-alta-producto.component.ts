import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Producto } from 'src/app/clases/producto';
import { EntidadesService } from 'src/app/services/entidades.service';

@Component({
  selector: 'app-form-alta-producto',
  templateUrl: './form-alta-producto.component.html',
  styleUrls: ['./form-alta-producto.component.scss'],
})
export class FormAltaProductoComponent implements OnInit {
  @Input() paisForm?: any;

  listadoProductos: Producto[] = [];
  nuevoProducto: Producto = new Producto(0, '', 0, 0, {}, false);
  //@ts-ignore
  forma: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private entidadesService: EntidadesService
  ) {}

  ngOnInit(): void {
    this.forma = this.formBuilder.group({
      codigo: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      stock: ['', Validators.required],
      paisOrigen: ['', Validators.required],
      comestible: ['', Validators.required],
    });
    this.entidadesService.traerProductos().subscribe((productos) => {
      if (productos != null) {
        this.listadoProductos = productos;
      }
    });
  }
  agregarProducto() {
    this.forma.setValue({
      codigo: this.forma.getRawValue().codigo,
      descripcion: this.forma.getRawValue().descripcion,
      precio: this.forma.getRawValue().precio,
      stock: this.forma.getRawValue().stock,
      paisOrigen: this.forma.getRawValue().paisOrigen,
      comestible: this.forma.getRawValue().comestible,
    });

    if (!this.forma.invalid) {
      this.nuevoProducto.codigo = this.forma.getRawValue().codigo;
      this.nuevoProducto.descripcion = this.forma.getRawValue().descripcion;
      this.nuevoProducto.precio = this.forma.getRawValue().precio;
      this.nuevoProducto.stock = this.forma.getRawValue().stock;
      this.nuevoProducto.paisOrigen = this.paisForm;
      this.nuevoProducto.comestible = this.forma.getRawValue().comestible;
      if (this.forma.getRawValue().comestible == 'si') {
        this.nuevoProducto.comestible = true;
      } else if (this.forma.getRawValue().comestible == 'no') {
        this.nuevoProducto.comestible = false;
      }
      this.entidadesService.crearProducto(this.nuevoProducto);
      this.nuevoProducto = new Producto(0, '', 0, 0, {}, false);
      this.forma.reset();
      this.paisForm = null;
      console.log('AGREGADO CON EXITO');
    } else {
      console.log('FORM INVALIDO');
    }
  }
}
