import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ServerService } from './servers/server.service';

@Injectable({
  providedIn: 'root',
})
export class ServerAuthGuard implements CanActivate {
  constructor(private serverService: ServerService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (localStorage.getItem('server')) {
      return true;
    }
    return this.serverService.isServerLoggedIn;
  }
}
