import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeconfComponent } from './seconf.component';

describe('SeconfComponent', () => {
  let component: SeconfComponent;
  let fixture: ComponentFixture<SeconfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeconfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeconfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
