import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  isServerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}
  serverSignUp(data: SignUp) {
    this.http
      .post('http://localhost:3000/server', data, {
        observe: 'response',
      })
      .subscribe((result) => {
        this.isServerLoggedIn.next(true);
        localStorage.setItem('server', JSON.stringify(result.body));
        this.router.navigate(['server-homepage']);
        // console.warn(result);
      });
  }
  reloadServer() {
    if (localStorage.getItem('server')) {
      this.isServerLoggedIn.next(true);
      this.router.navigate(['server-homepage']);
    }
  }

  serverLogin(data: Login) {
    // console.warn(data);
    this.http
      .get(
        `http://localhost:3000/server?email=${data.email}&password=${data.password}`,
        {
          observe: 'response',
        }
      )
      .subscribe((result: any) => {
        // console.warn(result);
        if (result && result.body && result.body.length) {
          // console.warn("User logged in");
          localStorage.setItem('server', JSON.stringify(result.body));
          this.router.navigate(['server-homepage']);
        } else {
          // console.warn("login failed");
          this.isLoginError.emit(true);
        }
        // console.warn(result);
      });
  }
}
