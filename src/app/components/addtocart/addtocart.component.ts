import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
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
  data: any;
  length: any;

  constructor(private service: BookserviceService, private router: Router, private fb: FormBuilder) { }

  customerForm = this.fb.group({
    name: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    pincode: ['', [Validators.required]],
    locality: ['', [Validators.required]],
    address: ['', [Validators.required]],
    city: ['', [Validators.required]],
    town: ['', [Validators.required]],

  });

  ngOnInit(): void {
    this.submit()
  }

  openBox(data: any) {
    this.openedBox = data

  }
  openBox2(data: any) {
    if (this.customerForm.touched && this.customerForm.valid) {
      this.openedBox2 = data
    }
    console.log(this.customerForm.value)

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
  deleteFromCart(data: any) {
    localStorage.setItem('deleteCart', data)
    this.service.deleteFromCart().subscribe(res => {
      console.log(res)
      this.submit()
    }, err => {
      console.log(err)
    })
  }


}
