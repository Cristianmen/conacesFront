import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReposComponent } from './admin-repos.component';

describe('AdminReposComponent', () => {
  let component: AdminReposComponent;
  let fixture: ComponentFixture<AdminReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminReposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
