import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/service/bookservice.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.scss']
})
export class AddtocartComponent implements OnInit {

  openedBox = null;
  openedBox2 = null;
  quantity = 1
  arr: any;
  data: any
  length: any
  constructor(private service: BookserviceService) { }

  ngOnInit(): void {
    this.submit()
  }

  openBox(data: any) {
    this.openedBox = data
  }
  openBox2(data: any) {
    this.openedBox2 = data
  }

  submit() {
    this.service.getCart().subscribe(res => {
      console.log(res)
      this.data = res
      this.arr = this.data.result
      this.length = this.data.result.length
    }, err => {
      console.log(err)
    })
  }

  incrementQuantity() {
    return this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity == 0) {
      return this.quantity = 0
    } else {
      return this.quantity--;
    }

  }

}
