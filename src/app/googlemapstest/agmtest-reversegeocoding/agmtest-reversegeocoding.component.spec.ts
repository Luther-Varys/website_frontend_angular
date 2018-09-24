import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgmtestReversegeocodingComponent } from './agmtest-reversegeocoding.component';

describe('AgmtestReversegeocodingComponent', () => {
  let component: AgmtestReversegeocodingComponent;
  let fixture: ComponentFixture<AgmtestReversegeocodingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgmtestReversegeocodingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgmtestReversegeocodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
