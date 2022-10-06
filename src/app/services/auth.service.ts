import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usuario: any;
  estaLogueado: boolean = false;
  esAdministrador: boolean = false;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore
  ) {
    this.usuario = this.angularFireAuth.authState.pipe(
      switchMap((usuarioRes: any) => {
        if (usuarioRes) {         
          this.estaLogueado = true;
          return this.angularFirestore
            .doc<any>(`usuario/${usuarioRes.uid}`)
            .valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  registrarNuevoUsuario(nuevoUsuario: any) {
    this.angularFireAuth
      .createUserWithEmailAndPassword(nuevoUsuario.email, nuevoUsuario.password)
      .then((data) => {
        this.angularFirestore
          .collection('usuario')
          .doc(data.user?.uid)
          .set({
            idUsuario: data.user?.uid,
            emailUsuario: nuevoUsuario.email,
            rolUsuario: nuevoUsuario.rol,
          })
          .then(() => {
            console.log('Usuario logueado!');
          })
          .catch((error) => {
            console.error(error.message);
          });
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  async iniciarSesion(usuario: any) {
    try {
      return await this.angularFireAuth
        .signInWithEmailAndPassword(usuario.email, usuario.password)
        .then(() => {
          console.log('Sesión Iniciada!');
        })
        .catch((error) => {
          console.error('Email o contraseña incorrectos');
        });
    } catch (error) {
      return null;
    }
  }

  cerrarSesion() {
    this.angularFireAuth.signOut();
    this.estaLogueado = false;
    this.esAdministrador = false;
    console.log('Sesión cerrada!');
  }

  traerUsuarioLogueado() {
    return this.angularFireAuth.authState;
  }
}
