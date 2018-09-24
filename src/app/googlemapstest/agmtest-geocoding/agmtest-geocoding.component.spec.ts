import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgmtestGeocodingComponent } from './agmtest-geocoding.component';

describe('AgmtestGeocodingComponent', () => {
  let component: AgmtestGeocodingComponent;
  let fixture: ComponentFixture<AgmtestGeocodingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgmtestGeocodingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgmtestGeocodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
