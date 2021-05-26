import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userClicked = false
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  userClick() {
    this.userClicked = !this.userClicked
  }

  logoutUser() {
    this.router.navigate(['login'])
    localStorage.clear()
  }
  dashboard() {
    this.router.navigate(['userdashboard'])
  }

}
