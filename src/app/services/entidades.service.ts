import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Container } from '../clases/container';
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

  traerContainers() {
    const collection = this.angularFirestore.collection<any>('containers');
    return collection.valueChanges();
  }

  crearContainer(container: Container) {
    const con = {
      codigo: container.codigo,
      color: container.color,
      empresa: container.empresa,
      capacidad: container.capacidad,
    };
    this.angularFirestore.collection<any>('containers').add(con);
  }
}
