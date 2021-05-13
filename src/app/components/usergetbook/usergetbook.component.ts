import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../../service/bookservice.service';
import { RegisterService } from '../../service/user.service';

@Component({
  selector: 'app-usergetbook',
  templateUrl: './usergetbook.component.html',
  styleUrls: ['./usergetbook.component.scss']
})
export class UsergetbookComponent implements OnInit {

  constructor(private dataservice: RegisterService, private service: BookserviceService) { }
  public data: any
  arr: any
  id: any
  isBag = false
  ngOnInit(): void {
    this.submit()
  }

  submit() {
    this.dataservice.getBooks().subscribe(res => {
      this.data = res
      this.arr = this.data.result
      this.arr = this.arr.reverse()
      console.log(this.arr)
    })
  }

  adToBag(data: any) {
    this.id = data
    this.isBag = true
    localStorage.setItem('addToBag', this.id)
    this.service.addToBag().subscribe(res => {
      console.log(res)
    }, err => {
      console.log(err)
    })

  }

}
