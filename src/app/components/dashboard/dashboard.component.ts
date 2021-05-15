import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userClicked = false
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cartClick() {
    this.router.navigate(['cart'])
  }

  userClick() {
    this.userClicked = !this.userClicked
  }

  logoutUser() {
    this.router.navigate(['login'])
    localStorage.clear()
  }
}
