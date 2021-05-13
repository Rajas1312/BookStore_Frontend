import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsergetbookComponent } from './usergetbook.component';

describe('UsergetbookComponent', () => {
  let component: UsergetbookComponent;
  let fixture: ComponentFixture<UsergetbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsergetbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsergetbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
