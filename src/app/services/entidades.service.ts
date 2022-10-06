import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Producto } from '../clases/producto';

@Injectable({
  providedIn: 'root',
})
export class EntidadesService {
  constructor(private angularFirestore: AngularFirestore) {}

  traerProductos() {
    const collection = this.angularFirestore.collection<any>('productos');
    return collection.valueChanges();
  }

  crearProducto(producto: Producto) {
    const prod = {
      codigo: producto.codigo,
      descripcion: producto.descripcion,
      precio: producto.precio,
      stock: producto.stock,
      paisOrigen: producto.paisOrigen,
      comestible: producto.comestible,
    };
    this.angularFirestore.collection<any>('productos').add(prod);
  }
}
