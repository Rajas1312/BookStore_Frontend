import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from '../service/bookservice.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  userClicked = false
  data: any
  arr: any
  arr1 = [{}]
  length: any
  constructor(private router: Router, private service: BookserviceService) { }

  ngOnInit(): void {
    this.submit()
  }

  submit() {
    this.service.getWishlist().subscribe(res => {
      console.log(res)
      this.data = res
      this.arr = this.data.result.reverse()
      this.length = this.data.result.length
    }, err => {
      console.log(err)
    })
  }

  deleteWish(data: any) {
    localStorage.setItem('deleteWish', data)
    this.service.deleteWish().subscribe(res => {
      console.log(res)
      this.submit()
    }, err => {
      console.log(err)
    })
  }

}

