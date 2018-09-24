import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAutogenComponent } from './crud-autogen.component';

describe('CrudAutogenComponent', () => {
  let component: CrudAutogenComponent;
  let fixture: ComponentFixture<CrudAutogenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudAutogenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudAutogenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
