import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglemapstestComponent } from './googlemapstest.component';

describe('GooglemapstestComponent', () => {
  let component: GooglemapstestComponent;
  let fixture: ComponentFixture<GooglemapstestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglemapstestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglemapstestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
