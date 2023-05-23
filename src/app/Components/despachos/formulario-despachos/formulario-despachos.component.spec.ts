import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDespachosComponent } from './formulario-despachos.component';

describe('FormularioDespachosComponent', () => {
  let component: FormularioDespachosComponent;
  let fixture: ComponentFixture<FormularioDespachosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioDespachosComponent]
    });
    fixture = TestBed.createComponent(FormularioDespachosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
