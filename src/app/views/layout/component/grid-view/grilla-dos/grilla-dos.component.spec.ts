import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaDosComponent } from './grilla-dos.component';

describe('GrillaDosComponent', () => {
  let component: GrillaDosComponent;
  let fixture: ComponentFixture<GrillaDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillaDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
