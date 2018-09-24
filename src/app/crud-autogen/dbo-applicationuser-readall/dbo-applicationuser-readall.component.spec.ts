import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DboApplicationuserReadallComponent } from './dbo-applicationuser-readall.component';

describe('DboApplicationuserReadallComponent', () => {
  let component: DboApplicationuserReadallComponent;
  let fixture: ComponentFixture<DboApplicationuserReadallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DboApplicationuserReadallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DboApplicationuserReadallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
