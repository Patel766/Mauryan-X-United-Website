import { Component, OnInit } from '@angular/core';
import { ServerService } from '../servers/server.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-server-login',
  templateUrl: './server-login.component.html',
  styleUrls: ['./server-login.component.css'],
})
export class ServerLoginComponent implements OnInit {
  constructor(private server: ServerService, private router: Router) {}

  showLogin: boolean = false;

  authError: string | undefined;

  ngOnInit(): void {
    this.server.reloadServer();
  }

  signUp(data: SignUp): void {
    // console.warn(data);
    this.server.serverSignUp(data);
  }

  login(data: SignUp): void {
    // console.warn(data);
    this.authError = '';
    this.server.serverLogin(data);
    this.server.isLoginError.subscribe((isError) => {
      if (isError) {
        this.authError = 'User not registered!';
      }
    });
    setTimeout(() => {
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
