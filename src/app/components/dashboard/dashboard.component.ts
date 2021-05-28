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
  data1: any
  message: any;
  cartItem: any
  highestClickArray = false;
  lowestClickArray = false;
  check = true
  bookName: any
  data: any
  arr: any
  filteredArr = []
  arr3 = []
  private _searchTerm: string
  // get searchTerm(): string {
  //   return this._searchTerm
  // }
  // set searchTerm(value: string) {
  //   this._searchTerm = value
  //   this.filteredArr = this.filterFunc(value)
  // }

  // filterFunc(searchString: string) {
  //   return this.arr3.filter(emp => {
  //     console.log(emp[1].bookName)
  //     // for (let i = 2; i < this.arr3.length; i++) {
  //     //   // emp[i].bookName.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
  //     //   console.log(emp[i].bookName)
  //     // }
  //   })
  // }
  constructor(private router: Router, private service: BookserviceService) { }


  receiveMessage($event: string) {
    this.message = $event
  }
  reciveCartItem($event: string) {
    this.cartItem = $event
  }
  ngOnInit(): void {
    this.submit()
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

  wishlist() {
    this.router.navigate(['wishlist'])
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

  submit() {
    this.service.getBooks().subscribe(res => {
      this.data = res
      this.arr = this.data.result
      this.arr3.push(this.arr)
      // console.log(this.arr3)
    })
  }



}

