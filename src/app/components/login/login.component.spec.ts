import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, MatSnackBarModule, ReactiveFormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('given the forms when tested should create form  with 2 controls and return truthy', () => {
    expect(component.loginForm.contains('email')).toBeTruthy()
    expect(component.loginForm.contains('password')).toBeTruthy()
  })


  it('given the forms when tested should make the email control required and return falsy', () => {
    let control = component.loginForm.get('email')
    control.setValue('')
    expect(control.valid).toBeFalsy()
  })
  it('given the forms when tested should make the email control required and return truthy', () => {
    let control = component.loginForm.get('email')
    control.setValue('Rajas1312dongre@gmail.com')
    expect(control.valid).toBeTruthy()
  })

  it('given the forms when tested should make the email control email and return falsy', () => {
    let control = component.loginForm.get('email')
    control.setValue('Rajas')
    expect(control.valid).toBeFalsy()
  })

  it('given the forms when tested should make the password control required and return falsy', () => {
    let control = component.loginForm.get('password')
    control.setValue('')
    expect(control.valid).toBeFalsy()
  })
  it('given the forms when tested should make the password control required and return truthy', () => {
    let control = component.loginForm.get('password')
    control.setValue('Rajas@123')
    expect(control.valid).toBeTruthy()
  })

});
