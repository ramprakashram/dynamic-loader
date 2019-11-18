import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicModuleComponent } from './dynamic-module.component';

describe('DynamicModuleComponent', () => {
  let component: DynamicModuleComponent;
  let fixture: ComponentFixture<DynamicModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
