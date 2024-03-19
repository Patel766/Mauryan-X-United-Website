import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menuType: string = 'default';
  serverName: string = '';
  userName: string = "";

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.route.events.subscribe((value: any) => {
      if (value.url) {
        // console.warn(value.url);
        if (localStorage.getItem('server') && value.url.includes('server')) {
          // console.warn("in server area");
          this.menuType = 'server';
          // if (localStorage.getItem('server')) {
            let serverStore = localStorage.getItem('server');
            let serverData = serverStore && JSON.parse(serverStore)[0];
            this.serverName = serverData.name;
          // }
        } 
        else if(localStorage.getItem('user')){
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore)[0];
          this.userName= userData.name;
          this.menuType='user';
          // this.product.getCartList(userData.id);
        }
        else {
          // console.warn("outside server area");
          this.menuType = 'default';
        }
      }
    });
  }
  logOut() {
    localStorage.removeItem('server');
    this.route.navigate(['home']);
  }

  userLogout(){
    localStorage.removeItem('user');
    this.route.navigate(['home'])
    // this.product.cartData.emit([])
  }
}
