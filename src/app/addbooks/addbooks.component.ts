import { AddBook } from './addbooks.model';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../user.service';
import { Router } from '@angular/router';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.scss']
})
export class AddbooksComponent implements OnInit {

  openModal = false;
  addBook = new AddBook()
  data: any
  token: any
  constructor(private dataservice: RegisterService,
    private router: Router, private service: InteractionService) { }

  ngOnInit(): void {
  }

  openBox() {
    this.openModal = true;
  }

  submit() {
    this.dataservice.addBook(this.addBook).subscribe(res => {
      console.log(res)
      this.service.sendMessage("addedBook")
      this.openModal = false
    }, error => {
      console.log(error)
      this.openModal = false
    })

  }
}
