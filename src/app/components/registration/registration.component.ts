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
  data: any


  constructor(private dataservice: RegisterService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.register)
    this.dataservice.registerUser(this.register).subscribe(res => {
      console.log(res)
      this._snackBar.open('successfull', '', {
        duration: 3000
      })
    }, err => {
      console.log(err)
      this._snackBar.open("Invalid Credentials", '', {
        duration: 3000
      })
    })
  }
}
