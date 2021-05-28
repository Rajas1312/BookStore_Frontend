
import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BookserviceService } from 'src/app/service/bookservice.service';
import { RegisterService } from '../../service/user.service';

@Component({
  selector: 'app-usergetbook',
  templateUrl: './usergetbook.component.html',
  styleUrls: ['./usergetbook.component.scss']
})
export class UsergetbookComponent implements OnInit, OnChanges {

  message: any;
  cartItem = 1
  wishlistItem = 1
  @Input() highestArray = false
  @Output() messageEvent = new EventEmitter<any>();
  @Output() cartItemEvent = new EventEmitter<any>();

  constructor(private service: BookserviceService) { }

  public data: any
  arr: any
  arr1 = [{}]
  searchTerm = "Sherlock"
  id: any
  isBag = false
  isWishlist = false

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    const highValue = changes['highestArray'];
    if (highValue.currentValue === true) {
      console.log(highValue.currentValue)
      this.highestArrayFunction()
    }
    if (highValue.currentValue === false) {
      console.log(highValue.currentValue)
      this.lowestArrayFunction()
    }
  }

  submit() {
    this.service.getBooks().subscribe(res => {
      this.data = res
      this.arr = this.data.result
      this.arr = this.arr.reverse()
      console.log(this.arr)
    })
  }

  adToBag(data: any, index: any) {
    this.id = data
    this.isBag = true
    this.arr[index].isAdded = true
    this.arr[index].isWish = false
    this.cartItem = this.cartItem++
    this.messageEvent.emit(this.message = true)
    this.cartItemEvent.emit(this.cartItem++)
    localStorage.setItem('addToBag', this.id)
    this.service.addToBag().subscribe(res => {
      console.log(res)
    }, err => {
      console.log(err)
    })
  }

  addToWishlist(data: any, index: any) {
    this.id = data
    this.isBag = true
    this.arr[index].isWish = true
    this.arr[index].isAdded = false
    // this.cartItem = this.cartItem++
    // this.messageEvent.emit(this.message = true)
    // this.cartItemEvent.emit(this.cartItem++)
    localStorage.setItem('addToWishlist', this.id)
    this.service.addToWishlist().subscribe(res => {
      console.log(res)
    }, err => {
      console.log(err)
    })
  }
  highestArrayFunction() {
    this.service.getBooks().subscribe(res => {
      this.data = res
      this.arr = this.data.result;
      this.arr = this.arr.sort(function (a: any, b: any) { return b.price - a.price })
      this.arr1.push(this.arr)
      this.arr1.shift()
    })
  }

  lowestArrayFunction() {
    this.service.getBooks().subscribe(res => {
      this.data = res
      this.arr = this.data.result;
      this.arr = this.arr.sort(function (a: any, b: any) { return a.price - b.price })
      console.log(this.arr)
    })
  }
  disp() {
    console.log(this.arr1)
  }
}
