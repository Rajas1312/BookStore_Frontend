import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/service/bookservice.service';
import { Customer } from './customer.model';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.scss']
})
export class AddtocartComponent implements OnInit {

  quantity = 0
  openedBox = null;
  openedBox2 = null;
  arr: any;
  data: any;
  length: any;
  clickerror: any
  customerDetails = new Customer()


  constructor(private service: BookserviceService, private router: Router, private fb: FormBuilder) { }

  customerForm = this.fb.group({
    name: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required, Validators.maxLength(10)]],
    pincode: ['', [Validators.required]],
    locality: ['', [Validators.required]],
    address: ['', [Validators.required]],
    city: ['', [Validators.required]],
    town: ['', [Validators.required]],
    addressType: ['', [Validators.required]]

  });


  ngOnInit(): void {
    this.submit()
  }

  openBox(data: any) {
    this.openedBox = data

  }
  openBox2(data: any) {
    this.customerDetails.addressType = this.customerForm.get('addressType')?.value
    this.customerDetails.fullAddress = this.customerForm.get('address')?.value
    this.customerDetails.city = this.customerForm.get('city')?.value
    this.customerDetails.state = this.customerForm.get('town')?.value
    if (this.customerForm.touched && this.customerForm.valid) {

      this.service.addCustomer(this.customerDetails).subscribe(res => {
        console.log(res)
        this.openedBox2 = data
        this.clickerror = 2
      }, err => {
        console.log(err)
      })
    } else {
      this.clickerror = 1
    }
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

  placeOrder() {
    let orderArray = []
    for (let i = 0; i < this.arr.length; i++) {
      orderArray.push({
        product_id: this.arr[i].product_id._id,
        product_name: this.arr[i].product_id.bookName,
        product_quantity: this.arr[i].product_id.quantity,
        product_price: this.arr[i].product_id.price
      })
    }
    this.service.placeOrder(orderArray).subscribe(res => {
      console.log(res)
      this.router.navigate(['/order'])
    }, err => {
      console.log(err)
      this.router.navigate(['/order'])
    })
  }

}
