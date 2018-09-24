import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DboApplicationuserUpdateComponent } from './dbo-applicationuser-update.component';

describe('DboApplicationuserUpdateComponent', () => {
  let component: DboApplicationuserUpdateComponent;
  let fixture: ComponentFixture<DboApplicationuserUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DboApplicationuserUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DboApplicationuserUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
