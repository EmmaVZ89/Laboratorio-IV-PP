import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModificacionContainerComponent } from './form-modificacion-container.component';

describe('FormModificacionContainerComponent', () => {
  let component: FormModificacionContainerComponent;
  let fixture: ComponentFixture<FormModificacionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormModificacionContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormModificacionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
