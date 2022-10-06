import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoContainersComponent } from './listado-containers.component';

describe('ListadoContainersComponent', () => {
  let component: ListadoContainersComponent;
  let fixture: ComponentFixture<ListadoContainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoContainersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
