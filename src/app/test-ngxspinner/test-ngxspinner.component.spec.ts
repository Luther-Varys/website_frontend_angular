import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgxspinnerComponent } from './test-ngxspinner.component';

describe('TestNgxspinnerComponent', () => {
  let component: TestNgxspinnerComponent;
  let fixture: ComponentFixture<TestNgxspinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgxspinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgxspinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
