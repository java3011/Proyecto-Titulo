import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reserva4Component } from './reserva4.component';

describe('Reserva4Component', () => {
  let component: Reserva4Component;
  let fixture: ComponentFixture<Reserva4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reserva4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reserva4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
