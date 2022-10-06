import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiPaisesService } from 'src/app/services/api-paises.service';

@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.scss'],
})
export class ListadoPaisesComponent implements OnInit {
  @Output() PasamosUnPais: EventEmitter<any> = new EventEmitter<any>();

  listadoPaises: any;
  listadoPaisesEuropa: any;
  listadoReducido: any[] = [];

  constructor(private apiPaises: ApiPaisesService) {}

  ngOnInit(): void {
    this.traerPaises();
  }

  async traerPaises() {
    this.listadoPaises = await this.apiPaises.traerPaises();
    this.listadoPaisesEuropa = this.listadoPaises
      .filter((p: any) => {
        return p.continents[0] == 'Europe';
      })
      .sort(() => Math.random() - 0.5);
    for (let i = 0; i < 5; i++) {
      const pais = this.listadoPaisesEuropa[i];
      this.listadoReducido.push(pais);
    }
  }

  pasarPais(pais: any) {
    this.PasamosUnPais.emit(pais);
  }
}
