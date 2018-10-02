import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WysiwygJoditComponent } from './wysiwyg-jodit.component';

describe('WysiwygJoditComponent', () => {
  let component: WysiwygJoditComponent;
  let fixture: ComponentFixture<WysiwygJoditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WysiwygJoditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WysiwygJoditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
