import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http: HttpClient) { }

  addToBag() {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDliODMwNjY3MjNmOTAwMTU5N2RkYTkiLCJpYXQiOjE2MjA4ODA3MDcsImV4cCI6MTYyMDk2NzEwN30.BPWwpRjto7pagB2BMdcxSMhZGmW88s-Rt1vWrsYK_uE'
    });
    return this.http.post('https://backend-bookstore.herokuapp.com/bookstore_user/add_cart_item/' + localStorage.getItem('addToBag'), { headers: reqHeader })
  }
}
