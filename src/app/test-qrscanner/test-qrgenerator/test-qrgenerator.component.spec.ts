import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestQrgeneratorComponent } from './test-qrgenerator.component';

describe('TestQrgeneratorComponent', () => {
  let component: TestQrgeneratorComponent;
  let fixture: ComponentFixture<TestQrgeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestQrgeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestQrgeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
