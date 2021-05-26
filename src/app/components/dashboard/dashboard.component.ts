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
  filteredArr: any

  private _search: string = ''
  get searchTerm(): string {
    return this._search
  }
  set searchTerm(value: string) {
    this._search = value
    this.filteredArr = this.filterEmployee(value)
  }
  constructor(private router: Router, private service: BookserviceService) { }


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

  // submit() {
  //   this.service.getBooks().subscribe(res => {
  //     this.data = res
  //     this.arr = this.data.result

  //   })
  // }
  filterEmployee(value) {
    return this.service.getBooks().subscribe(res => {
      this.data = res
      this.arr = this.data.result
      return this.arr.filter(emp => {
        // emp.bookName.toLowerCase().indexOf(value.toLowerCase()) !== -1
        console.log(emp.bookName)
      })
    })
  }

}

