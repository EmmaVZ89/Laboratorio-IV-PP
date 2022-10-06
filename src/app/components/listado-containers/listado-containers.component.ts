import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Container } from 'src/app/clases/container';
import { EntidadesService } from 'src/app/services/entidades.service';

@Component({
  selector: 'app-listado-containers',
  templateUrl: './listado-containers.component.html',
  styleUrls: ['./listado-containers.component.scss'],
})
export class ListadoContainersComponent implements OnInit {
  @Output() PasamosUnContainer: EventEmitter<Container> = new EventEmitter<Container>();

  listadoContainers: Container[] = [];

  constructor(private entidadesService: EntidadesService) {}

  ngOnInit(): void {
    this.entidadesService.traerContainers().subscribe((containers) => {
      if (containers != null) {
        this.listadoContainers = containers;
      }
    });
  }

  enviarContainer(event:any){
    this.PasamosUnContainer.emit(event);
  }
}
