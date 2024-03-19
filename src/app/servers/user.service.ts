import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Login, SignUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isUserLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);

  constructor(private http: HttpClient, private router: Router) { }
  userSignUp(data: SignUp) {
    this.http.post('http://localhost:3000/user', data, {
      observe: 'response',
    })
    .subscribe((result)=>{
      this.isUserLoggedIn.next(true);
      localStorage.setItem('user', JSON.stringify(result.body));
      this.router.navigate(['user-homepage']);
      console.warn(result);
    });
  }

  reloadUser() {
    if(localStorage.getItem('user')) {
      this.isUserLoggedIn.next(true);
      this.router.navigate(['user-homepage']);
    }
  }

  userLogin(data: Login) {
    // console.warn(data);
    this.http
      .get(
        `http://localhost:3000/user?email=${data.email}&password=${data.password}`, 
        {
          observe: 'response',
        }
    )
    .subscribe((result: any) => {
      // console.warn(result);
      if(result && result.body && result.body.length) {
        // console.warn("User logged in");
        localStorage.setItem('user', JSON.stringify(result.body));
        this.router.navigate(['user-homepage']);
      } else {
        // console.warn("login failed");
        this.isLoginError.emit(true);
      }
      // console.warn(result);
    });
  }
}
