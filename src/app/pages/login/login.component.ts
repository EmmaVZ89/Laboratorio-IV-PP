import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  usuarioForm: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  llenarCampos(opcion: number) {
    if (opcion === 1) {
      this.usuarioForm.email = 'admin@email.com';
      this.usuarioForm.password = '111111';
    } else if (opcion === 2) {
      this.usuarioForm.email = 'empleado@email.com';
      this.usuarioForm.password = '111111';
    }
  }

  async iniciarSesion() {
    await this.authService.iniciarSesion(this.usuarioForm);
  }
}
