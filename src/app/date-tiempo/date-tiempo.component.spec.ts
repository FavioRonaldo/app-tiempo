import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTiempoComponent } from './date-tiempo.component';

describe('DateTiempoComponent', () => {
  let component: DateTiempoComponent;
  let fixture: ComponentFixture<DateTiempoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateTiempoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateTiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
