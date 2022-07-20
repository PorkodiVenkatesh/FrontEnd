import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirsyComponent } from './firsy.component';

describe('FirsyComponent', () => {
  let component: FirsyComponent;
  let fixture: ComponentFixture<FirsyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirsyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
