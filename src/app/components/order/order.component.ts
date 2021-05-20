import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

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
}
