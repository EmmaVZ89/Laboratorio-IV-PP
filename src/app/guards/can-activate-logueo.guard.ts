import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CanActivateLogueoGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
    this.authService.usuario.subscribe((usuario: any) => {
      if (!usuario) {
        this.router.navigate(['']);
      }
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.estaLogueado) {
      console.log('Usuario Logueado CanActivate');
      return true;
    }
    console.log('Usuario NO logueado CanActivate');
    this.router.navigate(['']);
    return false;
  }
}
