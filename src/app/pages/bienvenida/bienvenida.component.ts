import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss'],
})
export class BienvenidaComponent implements OnInit {
  miPerfil: any = null;

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    this.http
      .get('https://api.github.com/users/EmmaVZ89')
      .subscribe((res: any) => {
        this.miPerfil = res;
      });
      this.authService.usuario.subscribe(() => {});
  }
}
