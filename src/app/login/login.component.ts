import { MatSnackBar } from '@angular/material/snack-bar';
import { Login } from './login.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', Validators.required)
  })

  login = new Login()
  data: any
  token: any
  constructor(private dataservice: RegisterService,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  submit() {
    this.dataservice.loginUser(this.login).subscribe(res => {
      this.data = res
      this.token = this.data.token
      localStorage.setItem('token', this.token)
      this.router.navigate([''])
    }, error => {
      console.log(error)
      this._snackBar.open('invalid cerdentials!', '', {
        duration: 3000
      })
    })
    return true
  }
}
