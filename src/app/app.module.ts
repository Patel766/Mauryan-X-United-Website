import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import { ServerLoginComponent } from './server-login/server-login.component';
import { HttpClientModule } from '@angular/common/http';
import { ServerHomeComponent } from './server-home/server-home.component';
import { ServerAddComponent } from './server-add/server-add.component';
import { ServerHomepageComponent } from './server-homepage/server-homepage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServerUpdateComponent } from './server-update/server-update.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ServerDetailsComponent } from './server-details/server-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HomeMembersComponent } from './home-members/home-members.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeContactComponent } from './home-contact/home-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserLoginComponent,
    ServerLoginComponent,
    ServerHomeComponent,
    ServerAddComponent,
    ServerHomepageComponent,
    ServerUpdateComponent,
    UserHomepageComponent,
    UserHomeComponent,
    ServerDetailsComponent,
    UserDetailsComponent,
    HomeMembersComponent,
    HomeAboutComponent,
    HomeContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
