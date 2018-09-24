import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DboApplicationuserReadComponent } from './dbo-applicationuser-read.component';

describe('DboApplicationuserReadComponent', () => {
  let component: DboApplicationuserReadComponent;
  let fixture: ComponentFixture<DboApplicationuserReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DboApplicationuserReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DboApplicationuserReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
