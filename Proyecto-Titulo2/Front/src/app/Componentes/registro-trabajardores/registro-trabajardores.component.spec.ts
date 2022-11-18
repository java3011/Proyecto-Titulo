import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTrabajardoresComponent } from './registro-trabajardores.component';

describe('RegistroTrabajardoresComponent', () => {
  let component: RegistroTrabajardoresComponent;
  let fixture: ComponentFixture<RegistroTrabajardoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroTrabajardoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroTrabajardoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
