import { RegisterService } from './user.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private service: RegisterService, private router: Router) { }

  canActivate() {
    try {
      if (this.service.loggedIn()) {
        console.log("hii")
        return true
      }
      else {
        this.router.navigate(['./login'])
        return false
      }
    } catch {
      this.router.navigate(['/login'])
      return true
    }
  }
}
