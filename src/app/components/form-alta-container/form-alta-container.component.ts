import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Container } from 'src/app/clases/container';
import { EntidadesService } from 'src/app/services/entidades.service';

@Component({
  selector: 'app-form-alta-container',
  templateUrl: './form-alta-container.component.html',
  styleUrls: ['./form-alta-container.component.scss'],
})
export class FormAltaContainerComponent implements OnInit {
  listadoContainers: Container[] = [];
  nuevoContainer: Container = new Container(0, 'negro', '', 100);
  //@ts-ignore
  forma: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private entidadesService: EntidadesService
  ) {}

  ngOnInit(): void {
    this.forma = this.formBuilder.group({
      codigo: ['', Validators.required],
      color: ['', Validators.required],
      empresa: ['', Validators.required],
      capacidad: ['', Validators.required],
    });
    this.entidadesService.traerContainers().subscribe((containers) => {
      if (containers != null) {
        this.listadoContainers = containers;
      }
    });
  }

  agregarContainer() {
    if (!this.forma.invalid) {
      this.nuevoContainer.codigo = this.forma.getRawValue().codigo;
      this.nuevoContainer.color = this.forma.getRawValue().color;
      this.nuevoContainer.empresa = this.forma.getRawValue().empresa;
      this.nuevoContainer.capacidad = this.forma.getRawValue().capacidad;
      this.entidadesService.crearContainer(this.nuevoContainer);
      this.nuevoContainer = new Container(0, 'negro', '', 100);
      this.forma.reset();
      console.log('AGREGADO CON EXITO');
    } else {
      console.log('FORM INVALIDO');
    }
  }

}
