import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DboApplicationuserDeleteComponent } from './dbo-applicationuser-delete.component';

describe('DboApplicationuserDeleteComponent', () => {
  let component: DboApplicationuserDeleteComponent;
  let fixture: ComponentFixture<DboApplicationuserDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DboApplicationuserDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DboApplicationuserDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
