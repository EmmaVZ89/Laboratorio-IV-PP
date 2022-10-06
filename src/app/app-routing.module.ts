import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoProductosPublicoComponent } from './components/listado-productos-publico/listado-productos-publico.component';
import { CanActivateAdministradorGuard } from './guards/can-activate-administrador.guard';
import { CanActivateLogueoGuard } from './guards/can-activate-logueo.guard';
import { AltaProductoComponent } from './pages/alta-producto/alta-producto.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { ContainerComponent } from './pages/container/container.component';
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
    path: 'container',
    component: ContainerComponent,
    // canActivate: [CanActivateAdministradorGuard],
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
