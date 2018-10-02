import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSoundemitComponent } from './test-soundemit.component';

describe('TestSoundemitComponent', () => {
  let component: TestSoundemitComponent;
  let fixture: ComponentFixture<TestSoundemitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSoundemitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSoundemitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
