import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable()
export class CanActivateGuard implements CanActivate {
  isLoggedIn: boolean = false;
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.auth.isLoggedIn.subscribe((res) => (this.isLoggedIn = res));
    if (this.isLoggedIn) {
      return true;
    } else this.router.navigateByUrl('/login');
    return false;
  }
}
