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
      // 'Content-Type': 'application/json',
      'x-access-token': '' + localStorage.getItem('usertoken')
    });
    return this.http.post(environment.adminURL + 'add_cart_item/' + localStorage.getItem('addToBag'), '', { headers: reqHeader })
  }
  getCart() {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': '' + localStorage.getItem('usertoken')
    });
    return this.http.get(environment.adminURL + 'get_cart_items', { headers: reqHeader })
  }
  deleteFromCart() {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': '' + localStorage.getItem('usertoken')
    });
    return this.http.delete(environment.adminURL + 'remove_cart_item/' + localStorage.getItem('deleteCart'), { headers: reqHeader })
  }
}
