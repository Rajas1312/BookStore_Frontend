import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

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
    return this.http.post(environment.adminURL + 'login', data)
  }

  loginAdmin(result: any) {
    return this.http.post(environment.adminURL + 'admin/login', result)
  }

  loggedIn() {
    if (this.data1.email) {
      return true
    } else {
      return false
    }
  }

}

