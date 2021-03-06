import { UpdateBook } from './update.model';
import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../../service/interaction.service';
import { BookserviceService } from 'src/app/service/bookservice.service';

@Component({
  selector: 'app-getbooks',
  templateUrl: './getbooks.component.html',
  styleUrls: ['./getbooks.component.scss']
})
export class GetbooksComponent implements OnInit {

  update = new UpdateBook()
  public data: any
  arr: any
  id: any
  openModal = false;
  openDeleteModal = false;
  updateData: any
  constructor(private dataservice: BookserviceService, private service: InteractionService) { }

  ngOnInit(): void {
    this.submit()
    this.addBook()
    //this.closeBox()
    // this.closeDeleteBox()
  }

  submit() {
    this.dataservice.getBooks().subscribe(res => {
      this.data = res
      this.arr = this.data.result
      this.arr = this.arr.reverse()
      console.log(this.arr)
    })
  }
  addBook() {
    this.service.add$.subscribe(message => {
      this.submit()
    })
  }
  openBox(data: any, book: any, author: any, price: any, description: any, quantity: any, discountPrice: any) {
    this.update.bookName = book;
    this.update.author = author;
    this.update.price = price;
    this.update.description = description;
    this.update.quantity = quantity;
    this.update.discountPrice = discountPrice;
    this.openModal = true;
    this.id = data
    localStorage.setItem('updateId', this.id)
  }

  closeBox() {
    this.dataservice.updateBooks(this.update).subscribe(res => {
      console.log(res)
      this.openModal = false
      this.submit()
    }, err => {
      console.log(err)
      this.openModal = false
    })
  }

  openDeleteBox(data: any) {
    this.openDeleteModal = true;
    this.id = data
    localStorage.setItem('deleteId', this.id)
  }

  closeDeleteBox() {
    this.dataservice.deleteBooks().subscribe(res => {
      console.log(res)
      this.openDeleteModal = false
      this.submit()
    }, err => {
      console.log(err)
      this.openDeleteModal = false
    })
  }
}
