import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/service/bookservice.service';
import { UsergetbookComponent } from '../usergetbook/usergetbook.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userClicked = false
  userClickedSort = false
  constructor(private router: Router, private service: BookserviceService) { }

  message: any;
  cartItem: any
  highestClickArray = false;
  lowestClickArray = false;
  check = true
  data: any
  data1: any
  bookName: any
  arr: any
  arr1 = []
  receiveMessage($event: string) {
    this.message = $event
  }
  reciveCartItem($event: string) {
    this.cartItem = $event
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


  // submit() {
  //   this.check = false
  //   this.service.getBooks().subscribe(res => {
  //     this.data = res
  //     this.arr = this.data.result
  //     this.arr1 = this.arr
  //     this.arr = this.arr1.filter(res => {
  //       this.arr = res;
  //       this.data1 = this.data1.bookName.toLocaleLowerCase().match(this.bookName.toLocaleLowerCase())
  //       this.arr = this.data1
  //     })
  //     console.log(this.arr)
  //   })
  // if (this.bookName == "") {
  //   this.check = false
  // } else {
  //   this.check = true;
  //   this.arr = this.arr.filter(res => {
  //     return res.bookName.toLocaleLowerCase().match()
  //   })
  // }

  // }


}
