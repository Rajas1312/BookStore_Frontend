import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.scss']
})
export class AddtocartComponent implements OnInit {

  openedBox = 4;
  constructor() { }

  ngOnInit(): void {
  }

  openBox(data: any) {
    this.openedBox = data
  }
}
