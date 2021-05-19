import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http: HttpClient) { }

  addBook(result: any) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': '' + localStorage.getItem('token')
    });
    return this.http.post(environment.adminURL + 'admin/add/book', result, { headers: reqHeader })
  }

  getBooks() {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': '' + localStorage.getItem('token')
    });
    return this.http.get(environment.adminURL + 'get/book', { headers: reqHeader })
  }

  updateBooks(result: any) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': '' + localStorage.getItem('token')
    });
    return this.http.put(environment.adminURL + 'admin/update/book/' + localStorage.getItem('updateId'), result, { headers: reqHeader })
  }

  deleteBooks() {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': '' + localStorage.getItem('token')
    });
    return this.http.delete(environment.adminURL + 'admin/delete/book/' + localStorage.getItem('deleteId'), { headers: reqHeader })
  }

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

  addCustomer(data: any) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': '' + localStorage.getItem('usertoken')
    });
    return this.http.put(environment.adminURL + 'edit_user', data, { headers: reqHeader })
  }

  placeOrder(data: any) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': '' + localStorage.getItem('usertoken')
    });
    return this.http.post(environment.adminURL + 'add/order', data, { headers: reqHeader })
  }

}
