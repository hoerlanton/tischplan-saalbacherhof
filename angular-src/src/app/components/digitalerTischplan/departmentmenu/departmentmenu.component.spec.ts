import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentmenuComponent } from './departmentmenu.component';

describe('DepartmentmenuComponent', () => {
  let component: DepartmentmenuComponent;
  let fixture: ComponentFixture<DepartmentmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
