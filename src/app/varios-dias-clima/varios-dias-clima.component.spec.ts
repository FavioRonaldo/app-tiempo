import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariosDiasClimaComponent } from './varios-dias-clima.component';

describe('VariosDiasClimaComponent', () => {
  let component: VariosDiasClimaComponent;
  let fixture: ComponentFixture<VariosDiasClimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariosDiasClimaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariosDiasClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
