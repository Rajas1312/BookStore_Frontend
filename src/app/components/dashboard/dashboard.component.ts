import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsergetbookComponent } from '../usergetbook/usergetbook.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userClicked = false
  userClickedSort = false
  constructor(private router: Router) { }

  message: any;
  highestClickArray = false;
  lowestClickArray = false;


  receiveMessage($event: string) {
    this.message = $event
  }
  ngOnInit(): void {
  }

  cartClick() {
    this.router.navigate(['cart'])
  }

  userClick() {
    this.userClicked = !this.userClicked
  }
  userClickSort() {
    this.userClickedSort = !this.userClickedSort
  }

  logoutUser() {
    this.router.navigate(['login'])
    localStorage.clear()
  }

  highestArray() {
    this.highestClickArray = true
    this.lowestClickArray = false
    console.log(this.highestClickArray)
  }
  lowestArray() {
    this.lowestClickArray = true
    this.highestClickArray = false
    console.log(this.lowestClickArray)
  }

}
