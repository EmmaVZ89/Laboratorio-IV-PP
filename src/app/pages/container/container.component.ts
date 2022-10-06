import { Component, OnInit } from '@angular/core';
import { Container } from 'src/app/clases/container';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  
  containerRecibido: Container = new Container(0, 'negro', '', 100);

  constructor() {}

  ngOnInit(): void {}

  tomarContainerEnviado(event: any) {
    console.log(event);
  }

  tomarContainerActivo(event: any) {
    console.log(event);
  }
}
