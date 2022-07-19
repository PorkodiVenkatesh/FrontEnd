import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceriseComponent } from './excerise.component';

describe('ExceriseComponent', () => {
  let component: ExceriseComponent;
  let fixture: ComponentFixture<ExceriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExceriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExceriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
