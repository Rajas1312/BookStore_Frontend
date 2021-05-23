import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registerlogin',
  templateUrl: './registerlogin.component.html',
  styleUrls: ['./registerlogin.component.scss']
})
export class RegisterloginComponent implements OnInit {

  registerActive = false
  loginActive = false
  constructor() { }

  ngOnInit(): void {
  }

  registerClick() {
    this.registerActive = true;
    this.loginActive = false
  }
  loginClick() {
    this.registerActive = false;
    this.loginActive = true
  }
}
