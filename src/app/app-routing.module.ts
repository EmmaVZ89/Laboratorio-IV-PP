import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateLogueoGuard } from './guards/can-activate-logueo.guard';
import { AltaProductoComponent } from './pages/alta-producto/alta-producto.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'alta-producto',
    component: AltaProductoComponent,
    canActivate: [CanActivateLogueoGuard],
  },
  { path: '', component: BienvenidaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
