import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogocardComponentComponent } from './logocard-component.component';

describe('LogocardComponentComponent', () => {
  let component: LogocardComponentComponent;
  let fixture: ComponentFixture<LogocardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogocardComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogocardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
