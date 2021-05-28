import { MatSnackBar } from '@angular/material/snack-bar';
import { Login } from './login.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  login = new Login()
  data: any
  token: any
  constructor(private dataservice: RegisterService,
    private router: Router,
    private _snackBar: MatSnackBar, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formValidation()
  }

  formValidation() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  submit() {
    this.dataservice.loginUser(this.loginForm.value).subscribe(res => {
      this.data = res
      console.log(this.data.result.accessToken)
      this.token = this.data.result.accessToken
      localStorage.setItem('usertoken', this.token)
      this.router.navigate(['userdashboard'])
    }, error => {
      this._snackBar.open('invalid cerdentials!', '', {
        duration: 3000
      })
    })
    return true
  }
}
