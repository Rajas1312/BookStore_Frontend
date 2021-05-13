import { Login } from './adminlogin.model';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../user.service';
import { Router } from '@angular/router';
import '@cds/core/icon/register.js';
import { ClarityIcons, bookIcon, mapIcon } from '@cds/core/icon';
ClarityIcons.addIcons(bookIcon, mapIcon);

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  login = new Login()
  name: any
  data: any
  token: any
  constructor(private dataservice: RegisterService,
    private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.dataservice.loginAdmin(this.login).subscribe(res => {
      this.data = res
      this.token = this.data.result.accessToken
      console.log(this.token)
      localStorage.setItem('token', this.token)
      this.router.navigate(['admindashboard'])
    }, error => {
      console.log(error)
    })
    return true
  }
}
