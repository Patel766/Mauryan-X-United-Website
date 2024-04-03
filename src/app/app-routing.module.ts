import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ServerLoginComponent } from './server-login/server-login.component';
import { ServerHomeComponent } from './server-home/server-home.component';
import { ServerAuthGuard } from './server-auth.guard';
import { ServerAddComponent } from './server-add/server-add.component';
import { ServerHomepageComponent } from './server-homepage/server-homepage.component';
import { ServerUpdateComponent } from './server-update/server-update.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { UserAuthGuard } from './user-auth.guard';
import { UserHomeComponent } from './user-home/user-home.component';
import { ServerDetailsComponent } from './server-details/server-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HomeMembersComponent } from './home-members/home-members.component';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { UserContactComponent } from './user-contact/user-contact.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'home-members',
    component: HomeMembersComponent,
  },
  {
    path: 'home-about',
    component: HomeAboutComponent,
  },
  {
    path: 'home-contact',
    component: HomeContactComponent
  },
  {
    path: 'server-login',
    component: ServerLoginComponent,
  },
  {
    path: 'user-login',
    component: UserLoginComponent,
  },
  {
    path: 'home/home-members',
    component: HomeMembersComponent,
  },
  {
    path: 'home/home-about',
    component: HomeAboutComponent,
  },
  {
    path: 'home/home-contact',
    component: HomeContactComponent
  },
  {
    path: 'home/user-login',
    component: UserLoginComponent,
  },
  {
    path: 'home-members/user-login',
    component: UserLoginComponent,
  },
  {
    path: 'server-homepage',
    component: ServerHomepageComponent,
    canActivate: [ServerAuthGuard],
  },
  {
    path: 'server-home',
    component: ServerHomeComponent,
    canActivate: [ServerAuthGuard],
  },
  {
    path: 'server-add',
    component: ServerAddComponent,
    canActivate: [ServerAuthGuard],
  },
  {
    path: 'server-update/:id',
    component: ServerUpdateComponent,
    canActivate: [ServerAuthGuard],
  },
  {
    path: 'server-details',
    component: ServerDetailsComponent,
    canActivate: [ServerAuthGuard],
  },
  {
    path: 'server-homepage/server-home',
    component: ServerHomeComponent,
    canActivate: [ServerAuthGuard],
  },
  {
    path: 'server-homepage/server-add',
    component: ServerAddComponent,
    canActivate: [ServerAuthGuard],
  },
  {
    path: 'server-homepage/server-details',
    component: ServerDetailsComponent,
    canActivate: [ServerAuthGuard],
  },
  {
    path: 'user-homepage',
    component: UserHomepageComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'user-home',
    component: UserHomeComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'user-details',
    component: UserDetailsComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'user-contact',
    component: UserContactComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'user-homepage/user-home',
    component: UserHomeComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'user-homepage/user-details',
    component: UserDetailsComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'user-homepage/user-contact',
    component: UserContactComponent,
    canActivate: [UserAuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
