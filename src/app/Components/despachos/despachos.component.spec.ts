import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespachosComponent } from './despachos.component';

describe('DespachosComponent', () => {
  let component: DespachosComponent;
  let fixture: ComponentFixture<DespachosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DespachosComponent]
    });
    fixture = TestBed.createComponent(DespachosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
