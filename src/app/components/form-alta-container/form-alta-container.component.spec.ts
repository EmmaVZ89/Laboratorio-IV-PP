import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAltaContainerComponent } from './form-alta-container.component';

describe('FormAltaContainerComponent', () => {
  let component: FormAltaContainerComponent;
  let fixture: ComponentFixture<FormAltaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAltaContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAltaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
