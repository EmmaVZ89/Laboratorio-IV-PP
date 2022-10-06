import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoProductosPublicoComponent } from './components/listado-productos-publico/listado-productos-publico.component';
import { CanActivateLogueoGuard } from './guards/can-activate-logueo.guard';
import { AltaProductoComponent } from './pages/alta-producto/alta-producto.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'alta-producto',
    component: AltaProductoComponent,
    canActivate: [CanActivateLogueoGuard],
  },
  {
    path: 'detalle-producto',
    component: DetalleProductoComponent,
    canActivate: [CanActivateLogueoGuard],
  },
  {
    path: 'listado-producto-publico',
    component: ListadoProductosPublicoComponent,
  },
  { path: '', component: BienvenidaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
