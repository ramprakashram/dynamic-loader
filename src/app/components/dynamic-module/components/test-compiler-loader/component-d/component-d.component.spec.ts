import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDComponent } from './component-d.component';

describe('ComponentDComponent', () => {
  let component: ComponentDComponent;
  let fixture: ComponentFixture<ComponentDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
