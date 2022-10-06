import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoProductosPublicoComponent } from './listado-productos-publico.component';

describe('ListadoProductosPublicoComponent', () => {
  let component: ListadoProductosPublicoComponent;
  let fixture: ComponentFixture<ListadoProductosPublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoProductosPublicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoProductosPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
