import { Component, OnInit } from '@angular/core';
import { UserService } from '../servers/user.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  constructor(private user: UserService, private router: Router) {}

  showLogin: boolean = false;
  
  authError: string | undefined;

  ngOnInit(): void {
    this.user.reloadUser();
  }
  
  signUp(data: SignUp): void {
    // console.warn(data);
    this.user.userSignUp(data);
  }

  login(data: SignUp) {
    // console.warn(data);
    this.authError = '';
    this.user.userLogin(data);
    this.user.isLoginError.subscribe((isError)=> {
      if(isError) {
        this.authError = 'User not registered';
      }
    });
    setTimeout(()=> {
      this.authError = undefined;
    }, 3000);
  }

  openLogin() {
    this.showLogin = true;
  }

  openSignup() {
    this.showLogin = false;
  }
}
