import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AltaProductoComponent } from './pages/alta-producto/alta-producto.component';
import { FormAltaProductoComponent } from './components/form-alta-producto/form-alta-producto.component';
import { ListadoPaisesComponent } from './components/listado-paises/listado-paises.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';
import { InformacionProductoComponent } from './components/informacion-producto/informacion-producto.component';
import { InformacionPaisComponent } from './components/informacion-pais/informacion-pais.component';
import { ListadoProductosPublicoComponent } from './components/listado-productos-publico/listado-productos-publico.component';
import { ContainerComponent } from './pages/container/container.component';
import { FormAltaContainerComponent } from './components/form-alta-container/form-alta-container.component';
import { ListadoContainersComponent } from './components/listado-containers/listado-containers.component';
import { FormModificacionContainerComponent } from './components/form-modificacion-container/form-modificacion-container.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    NavbarComponent,
    LoginComponent,
    AltaProductoComponent,
    FormAltaProductoComponent,
    ListadoPaisesComponent,
    DetalleProductoComponent,
    ListadoProductosComponent,
    InformacionProductoComponent,
    InformacionPaisComponent,
    ListadoProductosPublicoComponent,
    ContainerComponent,
    FormAltaContainerComponent,
    ListadoContainersComponent,
    FormModificacionContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    provideAuth(() => getAuth()),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
