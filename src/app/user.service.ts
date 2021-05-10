import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  data1: any

  constructor(private http: HttpClient) { }

  registerUser(result: any) {
    return this.http.post(environment.baseURL + 'user', result)
  }
  loginUser(data: any) {
    this.data1 = data
    localStorage.setItem('email', this.data1.email)
    return this.http.post(environment.baseURL + 'login', data)
  }

  loginAdmin(result: any) {
    return this.http.post(environment.adminURL + 'admin/login', result)
  }

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
}

