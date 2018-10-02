import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestQrscannerComponent } from './test-qrscanner.component';

describe('TestQrscannerComponent', () => {
  let component: TestQrscannerComponent;
  let fixture: ComponentFixture<TestQrscannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestQrscannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestQrscannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
