import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterService } from '../../service/user.service';
import { Register } from './registration.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  register = new Register();
  message: any
  data: any
  success: any
  error: any

  constructor(private dataservice: RegisterService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  submit() {
    this.dataservice.registerUser(this.register).subscribe(res => {
      console.log(res)
      this.data = res
      this.message = this.data.message
      this._snackBar.open(this.message, '', {
        duration: 3000
      })
    }, err => {
      this.error = err
      this.success = this.error.message
      this._snackBar.open("Invalid Credentials", '', {
        duration: 3000
      })
    })
  }
}
