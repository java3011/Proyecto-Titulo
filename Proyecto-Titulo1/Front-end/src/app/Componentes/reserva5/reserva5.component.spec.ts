import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reserva5Component } from './reserva5.component';

describe('Reserva5Component', () => {
  let component: Reserva5Component;
  let fixture: ComponentFixture<Reserva5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reserva5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reserva5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
